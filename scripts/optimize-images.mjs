import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const DEFAULT_MAX_WIDTH = 2560
const DEFAULT_QUALITY = 75
const DEFAULT_MIN_BYTES = 250 * 1024

const exts = new Set(['.webp', '.jpg', '.jpeg', '.png'])

function parseArg(name, fallback) {
  const raw = process.argv.find((a) => a.startsWith(`${name}=`))
  if (!raw) return fallback
  const v = Number(raw.split('=')[1])
  return Number.isFinite(v) ? v : fallback
}

const maxWidth = parseArg('--maxWidth', DEFAULT_MAX_WIDTH)
const quality = parseArg('--quality', DEFAULT_QUALITY)
const minBytes = parseArg('--minBytes', DEFAULT_MIN_BYTES)

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const ent of entries) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) {
      yield* walk(full)
    } else if (ent.isFile()) {
      yield full
    }
  }
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!exts.has(ext)) return { status: 'skipped', reason: 'ext' }

  const stat = await fs.stat(filePath)
  if (stat.size < minBytes) return { status: 'skipped', reason: 'small' }

  const input = await fs.readFile(filePath)
  const img = sharp(input, { failOn: 'none' })
  const meta = await img.metadata()

  const width = meta.width ?? 0
  const height = meta.height ?? 0
  if (!width || !height) return { status: 'skipped', reason: 'meta' }

  const shouldResize = width > maxWidth

  let pipeline = sharp(input, { failOn: 'none' })
  if (shouldResize) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true })
  }

  if (ext === '.webp') {
    pipeline = pipeline.webp({ quality, effort: 4 })
  } else if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality, mozjpeg: true })
  } else if (ext === '.png') {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true })
  }

  const out = await pipeline.toBuffer()
  if (out.length >= input.length) return { status: 'skipped', reason: 'not-smaller' }

  const tmpPath = `${filePath}.tmp`
  await fs.writeFile(tmpPath, out)
  await fs.rename(tmpPath, filePath)

  return { status: 'optimized', saved: input.length - out.length, before: input.length, after: out.length, resized: shouldResize }
}

async function main() {
  const root = path.join(process.cwd(), 'public', 'assets')
  const started = Date.now()

  let optimized = 0
  let skipped = 0
  let bytesSaved = 0

  for await (const filePath of walk(root)) {
    const res = await optimizeImage(filePath).catch((e) => ({ status: 'error', error: e }))
    if (res.status === 'optimized') {
      optimized += 1
      bytesSaved += res.saved
      process.stdout.write(`optimized: ${path.relative(process.cwd(), filePath)} (${(res.before / 1024).toFixed(0)}KB -> ${(res.after / 1024).toFixed(0)}KB${res.resized ? ', resized' : ''})\n`)
    } else if (res.status === 'skipped') {
      skipped += 1
    } else {
      process.stdout.write(`error: ${path.relative(process.cwd(), filePath)} (${res.error?.message ?? res.error})\n`)
    }
  }

  const ms = Date.now() - started
  process.stdout.write(
    `\nDone. optimized=${optimized} skipped=${skipped} saved=${(bytesSaved / (1024 * 1024)).toFixed(2)}MB in ${(ms / 1000).toFixed(1)}s\n`
  )
}

await main()
