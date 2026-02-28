import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { education } from '../data/portfolioData'

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Education" subtitle="Academic background" />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6 md:p-8 bg-card border border-[var(--border-subtle)] shadow-card hover:shadow-glow hover:border-[var(--accent)] transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">{edu.institution}</h3>
                {edu.period && <span className="text-[var(--text-muted)] text-sm">{edu.period}</span>}
              </div>
              <p className="text-[var(--accent)] font-medium">{edu.degree}</p>
              {edu.field && <p className="text-[var(--text-muted)] text-sm mt-1">{edu.field}</p>}
              {edu.description && <p className="text-[var(--text-secondary)] mt-3">{edu.description}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
