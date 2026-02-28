import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

/**
 * Shows a "Go to top" button when the user has scrolled near the bottom of the page.
 */
export function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      // Show when user has scrolled past 60% of the page (near bottom)
      setShow(docHeight > 400 && scrollTop > docHeight * 0.6)
    }
    checkScroll()
    window.addEventListener('scroll', checkScroll, { passive: true })
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8"
        >
          <Link to="hero" smooth duration={600}>
            <motion.button
              type="button"
              aria-label="Scroll to top"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent)] text-white shadow-lg hover:shadow-glow border border-[var(--accent)] transition-all cursor-pointer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowUp className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
