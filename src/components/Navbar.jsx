import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaSun, FaMoon, FaEnvelope, FaPhone } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { personal } from '../data/portfolioData'

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Video', to: 'video-resume' },
  { name: 'Experience', to: 'experience' },
  { name: 'Education', to: 'education' },
  { name: 'Certs', to: 'certifications' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { darkMode, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open to prevent content bleeding through
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [mobileOpen])

  const navBg = scrolled
    ? 'bg-elevated/95 dark:bg-dark-900/95 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-card'
    : 'bg-transparent'

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="hero" smooth duration={500} className="font-display text-xl font-bold text-[var(--text-primary)] cursor-pointer hover:opacity-90 transition-opacity">
            BV
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--glass)] transition-colors text-sm"
              title="Send email"
            >
              <FaEnvelope className="w-4 h-4 shrink-0" />
              <span className="hidden md:inline truncate max-w-[160px]" title={personal.email}>{personal.email}</span>
            </a>
            <a
              href={`tel:${personal.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--glass)] transition-colors text-sm"
              title="Call"
            >
              <FaPhone className="w-4 h-4 shrink-0" />
              <span className="hidden md:inline">{personal.phone}</span>
            </a>
            <span className="w-px h-5 bg-[var(--border-subtle)] mx-1" />
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={500}
                spy
                offset={-80}
                activeClass="nav-link-active"
                className="px-3 py-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--glass)] transition-colors cursor-pointer text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            {/* Theme toggle pill */}
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-xl bg-card border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all shadow-card"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Light mode' : 'Dark mode'}
            >
              {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-card border border-[var(--border-subtle)] text-[var(--text-muted)]"
              aria-label="Toggle theme"
            >
              {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-xl text-[var(--text-primary)]"
              aria-label="Open menu"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            {/* Backdrop: dimmed, no scroll through */}
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm" aria-hidden />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="absolute inset-y-0 right-0 z-10 w-full max-w-sm flex flex-col items-center justify-center min-h-screen gap-6 bg-elevated shadow-2xl overflow-y-auto overscroll-contain"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 right-6 p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                aria-label="Close menu"
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <a
                href={`mailto:${personal.email}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)]"
              >
                <FaEnvelope className="w-5 h-5" /> {personal.email}
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s/g, '')}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)]"
              >
                <FaPhone className="w-5 h-5" /> {personal.phone}
              </a>
              <span className="w-12 h-px bg-[var(--border-subtle)]" />
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                  activeClass="nav-link-active-mobile"
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
