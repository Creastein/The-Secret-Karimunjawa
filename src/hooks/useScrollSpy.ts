import { useState, useEffect, useCallback } from 'react'

interface ScrollSpyOptions {
    offset?: number
    ids: string[]
}

export function useScrollSpy({ offset = 200, ids }: ScrollSpyOptions) {
    const [activeId, setActiveId] = useState(ids[0] ?? '')

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY + offset

        for (const id of ids) {
            const el = document.getElementById(id)
            if (!el) continue

            const { offsetTop, offsetHeight } = el
            if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
                setActiveId(id)
                break
            }
        }
    }, [offset, ids])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return activeId
}
