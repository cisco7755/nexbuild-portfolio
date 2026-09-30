import { useEffect, useRef } from 'react'

const COPIES = 3

export default function ScreenGrid({ screens, title }) {
  const scroller = useRef(null)
  const userActive = useRef(false)
  const adjusting = useRef(false)

  useEffect(() => {
    const el = scroller.current
    if (!el || screens.length === 0) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const stepSize = () => {
      const cards = el.querySelectorAll('figure')
      if (cards.length < 2) return el.clientWidth / 3
      return cards[1].offsetLeft - cards[0].offsetLeft
    }

    const markCenter = () => {
      const mid = el.scrollLeft + el.clientWidth / 2
      let best = null
      let bestDist = Infinity
      el.querySelectorAll('figure').forEach(fig => {
        const center = fig.offsetLeft + fig.offsetWidth / 2
        const dist = Math.abs(center - mid)
        if (dist < bestDist) {
          best = fig
          bestDist = dist
        }
      })
      el.querySelectorAll('figure').forEach(fig => {
        if (fig === best) fig.setAttribute('data-center', 'true')
        else fig.removeAttribute('data-center')
      })
    }

    const centerOf = screenIndex => {
      const card = el.querySelector(`[data-copy="1"][data-screen="${screenIndex}"]`)
      if (!card) return 0
      return card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2
    }

    const place = () => {
      adjusting.current = true
      el.scrollLeft = centerOf(0)
      adjusting.current = false
      markCenter()
    }

    const loopScroll = () => {
      const width = stepSize() * screens.length
      const origin = centerOf(0)
      if (!width) return
      if (el.scrollLeft >= origin + width) {
        adjusting.current = true
        el.scrollLeft -= width
        adjusting.current = false
      } else if (el.scrollLeft < origin - 1) {
        adjusting.current = true
        el.scrollLeft += width
        adjusting.current = false
      }
    }

    const frame = window.requestAnimationFrame(place)

    let idleTimer = 0
    const noteUser = () => {
      userActive.current = true
      window.clearTimeout(idleTimer)
      idleTimer = window.setTimeout(() => {
        userActive.current = false
      }, 1600)
    }

    const onScroll = () => {
      if (!adjusting.current) {
        noteUser()
        loopScroll()
      }
      markCenter()
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    el.addEventListener('pointerdown', noteUser)
    el.addEventListener('touchstart', noteUser, { passive: true })

    const timer = window.setInterval(() => {
      if (userActive.current || reduced || screens.length < 2) return
      const step = stepSize()
      if (!step) return
      adjusting.current = true
      el.scrollTo({ left: el.scrollLeft + step, behavior: 'smooth' })
      window.setTimeout(() => {
        loopScroll()
        markCenter()
        adjusting.current = false
      }, 700)
    }, 3000)

    window.addEventListener('resize', place)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearInterval(timer)
      window.clearTimeout(idleTimer)
      window.removeEventListener('resize', place)
      el.removeEventListener('scroll', onScroll)
      el.removeEventListener('pointerdown', noteUser)
      el.removeEventListener('touchstart', noteUser)
    }
  }, [screens, title])

  if (!screens.length) return null

  const loop = Array.from({ length: COPIES }, (_, copy) =>
    screens.map((screen, index) => ({ screen, copy, index })),
  ).flat()

  return (
    <div
      ref={scroller}
      className="flex overflow-x-auto overscroll-x-contain py-8"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} screens`}
      tabIndex={0}
    >
      {loop.map(({ screen, copy, index }) => (
        <figure
          key={`${copy}-${index}`}
          data-copy={copy}
          data-screen={index}
          className="group relative w-1/3 shrink-0 origin-center px-2 transition-transform duration-300 data-[center=true]:z-10 data-[center=true]:scale-125"
          aria-hidden={copy !== 1 ? true : undefined}
        >
          <div className="relative w-full overflow-hidden bg-line group-data-[center=true]:rounded-[8px]" style={{ paddingBottom: 'calc(33.333% + 20px)' }}>
            <img
              src={screen.src}
              alt={copy === 1 ? `${title}, ${screen.label} screen` : ''}
              width={1200}
              height={800}
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-2 text-center text-sm text-ink-300 dark:text-ink-200">{screen.label}</figcaption>
        </figure>
      ))}
    </div>
  )
}
