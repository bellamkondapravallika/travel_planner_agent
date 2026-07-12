/**
 * useScrolled — returns true when the window has scrolled past a threshold.
 * Used by Navbar to switch between transparent and solid states.
 *
 * @param {number} threshold - Scroll-Y pixels before triggering
 */
import { useState, useEffect } from 'react'

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}

export default useScrolled
