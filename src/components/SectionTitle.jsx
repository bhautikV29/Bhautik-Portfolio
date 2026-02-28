import { motion } from 'framer-motion'

export function SectionTitle({ title, subtitle, className = '' }) {
  return (
    <motion.div
      className={`text-center max-w-3xl mx-auto mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-muted)] text-lg sm:text-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
