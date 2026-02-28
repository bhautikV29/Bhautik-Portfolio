import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { skills } from '../data/portfolioData'

const categories = [
  { key: 'frontend', label: 'Frontend', border: 'border-blue-400/40', accent: 'text-blue-500' },
  { key: 'backend', label: 'Backend', border: 'border-emerald-400/40', accent: 'text-emerald-500' },
  { key: 'tools', label: 'Tools & DevOps', border: 'border-violet-400/40', accent: 'text-violet-500' },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-page">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Skills" subtitle="Technologies I work with" />

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className={`rounded-2xl border ${cat.border} bg-card p-6 shadow-card hover:shadow-glow transition-shadow`}
            >
              <h3 className={`font-display text-xl font-semibold mb-4 ${cat.accent}`}>{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {skills[cat.key].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.05 + i * 0.02 }}
                    className="px-3 py-1.5 rounded-lg bg-elevated border border-[var(--border-subtle)] text-[var(--text-secondary)] text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
