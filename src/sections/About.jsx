import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { about, personal } from '../data/portfolioData'

const pillars = [
  { label: 'Analysis & Debugging', short: 'Debug' },
  { label: 'Scalable Systems', short: 'Scale' },
  { label: 'Leadership & Mentoring', short: 'Lead' },
  { label: 'AWS & Cloud', short: 'Cloud' },
]

export function About() {
  return (
    <section id="about" className="py-24 relative bg-page overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionTitle title="About Me" subtitle="What I bring to the table" />

        {/* Profile + intro block */}
        <motion.div
          className="flex flex-col md:flex-row md:items-start gap-10 md:gap-14 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {personal.profileImage && (
            <div className="shrink-0 flex justify-center md:justify-start">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover ring-2 ring-[var(--accent)]/30 shadow-glow"
                />
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--accent)]/20 to-transparent -z-10 blur-xl" />
              </motion.div>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
              {personal.name}
            </h3>
            <p className="text-[var(--accent)] font-semibold mb-4">{personal.title}</p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              {about.summary}
            </p>
          </div>
        </motion.div>

        {/* Highlights with left accent */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-4">
            Highlights
          </h4>
          <ul className="space-y-4">
            {about.highlights.map((item, i) => (
              <motion.li
                key={i}
                className="flex gap-4 pl-4 border-l-2 border-[var(--accent)] py-1"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
              >
                <span className="text-[var(--text-secondary)]">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Pillars as horizontal cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-4">
            Focus areas
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {pillars.map(({ label, short }, i) => (
              <motion.div
                key={label}
                className="rounded-xl px-4 py-4 text-center bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/5 transition-all"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
              >
                <span className="text-xs font-semibold text-[var(--accent)] block mb-1">{short}</span>
                <span className="text-sm font-medium text-[var(--text-primary)]">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
