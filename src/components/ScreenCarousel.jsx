import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function wrap(index, count) {
  return ((index % count) + count) % count
}

export default function ScreenCarousel({
  screens,
  title,
  frameClassName = 'aspect-[16/10] w-full object-cover',
  controlsClassName = 'mt-3',
}) {
  const [index, setIndex] = useState(0)
  const [failed, setFailed] = useState(() => new Set())
  const dragStart = useRef(null)
  const count = screens.length
  const safeIndex = count ? wrap(index, count) : 0
  const available = count - failed.size
  const screen = available > 0 ? screens[safeIndex] : null

  const paused = useRef(false)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    setIndex(0)
    setFailed(new Set())
  }, [title])

  useEffect(() => {
    if (count < 2) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => {
      if (paused.current) return
      setIndex(current => {
        const start = wrap(current, count)
        for (let step = 1; step <= count; step += 1) {
          const candidate = wrap(start + step, count)
          if (!failed.has(candidate)) return candidate
        }
        return start
      })
    }, 3000)
    return () => window.clearInterval(timer)
  }, [count, failed, cycle])

  if (!screen) return null

  const go = direction => {
    setCycle(current => current + 1)
    setIndex(current => {
      const start = wrap(current, count)
      for (let step = 1; step <= count; step += 1) {
        const candidate = wrap(start + direction * step, count)
        if (!failed.has(candidate)) return candidate
      }
      return start
    })
  }

  const onKeyDown = event => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(-1)
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(1)
    }
  }

  return (
    <div
      className="outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} screens`}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => {
        paused.current = true
      }}
      onMouseLeave={() => {
        paused.current = false
      }}
      onFocus={() => {
        paused.current = true
      }}
      onBlur={() => {
        paused.current = false
      }}
    >
      <img
        key={screen.src}
        src={screen.src}
        alt={`${title}, ${screen.label} screen`}
        width={1200}
        height={800}
        draggable={false}
        className={`bg-line ${frameClassName}`}
        onError={() => {
          setFailed(current => {
            const next = new Set(current)
            next.add(safeIndex)
            return next
          })
          setIndex(current => wrap(current + 1, count))
        }}
        onPointerDown={event => {
          dragStart.current = event.clientX
        }}
        onPointerUp={event => {
          if (dragStart.current == null) return
          const delta = event.clientX - dragStart.current
          dragStart.current = null
          if (delta > 40) go(-1)
          if (delta < -40) go(1)
        }}
      />

      <div className={`flex items-center justify-between gap-4 ${controlsClassName}`}>
        <p className="text-sm text-ink-300 dark:text-ink-200">
          {screen.label}
          <span className="text-ink-200">
            {' '}
            · {safeIndex + 1} / {count}
          </span>
        </p>
        {available > 1 ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous screen"
              onClick={event => {
                event.preventDefault()
                event.stopPropagation()
                go(-1)
              }}
              className="flex h-9 w-9 items-center justify-center border border-line text-ink-500 hover:border-brand-600 hover:text-brand-600 dark:border-white/15 dark:text-mist dark:hover:border-brand-300 dark:hover:text-brand-300"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next screen"
              onClick={event => {
                event.preventDefault()
                event.stopPropagation()
                go(1)
              }}
              className="flex h-9 w-9 items-center justify-center border border-line text-ink-500 hover:border-brand-600 hover:text-brand-600 dark:border-white/15 dark:text-mist dark:hover:border-brand-300 dark:hover:text-brand-300"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
