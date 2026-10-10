import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CursorFollower = () => {
  const cursorRef = useRef(null)

  useGSAP((_, contextSafe) => {
    const cursor = cursorRef.current
    const supportsCursorEffect = window.matchMedia(
      '(pointer: fine) and (prefers-reduced-motion: no-preference)'
    ).matches

    if (!cursor || !supportsCursorEffect) return

    const ring = cursor.querySelector('.site-cursor__ring')
    const dot = cursor.querySelector('.site-cursor__dot')
    let isVisible = false

    gsap.set(cursor, { xPercent: -50, yPercent: -50, autoAlpha: 0 })

    const moveX = gsap.quickTo(cursor, 'x', {
      duration: 0.24,
      ease: 'power3.out',
    })
    const moveY = gsap.quickTo(cursor, 'y', {
      duration: 0.24,
      ease: 'power3.out',
    })

    const handlePointerMove = contextSafe((event) => {
      if (event.pointerType !== 'mouse') return

      moveX(event.clientX)
      moveY(event.clientY)

      if (!isVisible) {
        isVisible = true
        gsap.to(cursor, { autoAlpha: 1, duration: 0.2 })
      }

      const isInteractive = event.target instanceof Element &&
        Boolean(event.target.closest('a, button, [role="button"], input, textarea, select'))

      cursor.classList.toggle('is-interactive', isInteractive)
    })

    const handlePointerLeave = contextSafe(() => {
      isVisible = false
      gsap.to(cursor, { autoAlpha: 0, duration: 0.2 })
    })

    const handlePointerDown = contextSafe(() => {
      gsap.to(ring, { scale: 0.78, duration: 0.12 })
      gsap.to(dot, { scale: 0.75, duration: 0.12 })
    })

    const handlePointerUp = contextSafe(() => {
      gsap.to(ring, { scale: cursor.classList.contains('is-interactive') ? 1.35 : 1, duration: 0.2 })
      gsap.to(dot, { scale: 1, duration: 0.2 })
    })

    const handlePointerOver = contextSafe((event) => {
      if (event.pointerType !== 'mouse' || !(event.target instanceof Element)) return

      const isInteractive = Boolean(
        event.target.closest('a, button, [role="button"], input, textarea, select')
      )

      cursor.classList.toggle('is-interactive', isInteractive)
      gsap.to(ring, { scale: isInteractive ? 1.35 : 1, duration: 0.2 })
    })

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerover', handlePointerOver)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    document.documentElement.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerover', handlePointerOver)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return (
    <div ref={cursorRef} className='site-cursor' aria-hidden='true'>
      <span className='site-cursor__ring' />
      <span className='site-cursor__dot' />
    </div>
  )
}

export default CursorFollower
