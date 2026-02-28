import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaArrowDown, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { personal } from '../data/portfolioData'

const iconMap = { FaGithub, FaLinkedinIn }

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-mesh"
    >
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-[320px] h-[320px] rounded-full bg-[var(--accent)] opacity-20 blur-[80px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[280px] h-[280px] rounded-full bg-purple-500 opacity-15 blur-[70px] animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full bg-cyan-500 opacity-10 blur-[60px] animate-float pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center pb-24">
        {/* Profile picture from public folder */}
        {personal.profileImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-[var(--border-subtle)] shadow-glow ring-4 ring-[var(--accent)]/20"
              />
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-card border border-[var(--border-subtle)] text-[var(--accent)] text-sm font-semibold shadow-card">
            {personal.title}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)] mb-4 leading-tight tracking-tight"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-purple-500 to-cyan-500">
            {personal.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[var(--text-secondary)] text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a href={`mailto:${personal.email}`} title="Send email to me" className="inline-block">
            <motion.span
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-[var(--accent)] text-white shadow-lg hover:shadow-glow transition-all cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaEnvelope className="w-5 h-5" /> Get in Touch
            </motion.span>
          </a>
          <Link to="projects" smooth duration={500}>
            <motion.span
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-card border border-[var(--border-subtle)] text-[var(--text-primary)] shadow-card hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          {personal.social.map((s) => {
            const Icon = iconMap[s.icon] || FaGithub
            return (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="p-3.5 rounded-xl bg-card border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] shadow-card transition-all shrink-0"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5 block" />
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <Link to="about" smooth duration={500}>
            <motion.div
              className="w-11 h-11 rounded-full border-2 border-[var(--border-strong)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] cursor-pointer transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaArrowDown className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
