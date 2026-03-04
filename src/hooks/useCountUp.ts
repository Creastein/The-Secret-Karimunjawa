import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpOptions {
    end: number
    duration?: number
    decimals?: number
}

export function useCountUp({ end, duration = 1.5, decimals = 0 }: CountUpOptions) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [display, setDisplay] = useState('0')

    useEffect(() => {
        if (!inView) return

        const start = performance.now()
        const step = (now: number) => {
            const elapsed = Math.min((now - start) / (duration * 1000), 1)

            // easeOutExpo curve — fast start, slow finish
            const progress = 1 - Math.pow(1 - elapsed, 3)
            const current = progress * end

            setDisplay(current.toFixed(decimals))

            if (elapsed < 1) {
                requestAnimationFrame(step)
            } else {
                setDisplay(end.toFixed(decimals))
            }
        }

        requestAnimationFrame(step)
    }, [inView, end, duration, decimals])

    return { ref, display }
}
