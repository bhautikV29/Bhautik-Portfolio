import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { experience } from '../data/portfolioData'

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-page overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Experience" subtitle="Professional journey" />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/50 to-transparent -translate-x-px" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 md:pr-12 md:pl-0 md:text-right flex flex-col md:items-end min-w-0">
                  <span className="text-[var(--accent)] font-semibold">{exp.period}</span>
                  <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">{exp.company}</h3>
                  <span className="text-[var(--text-muted)] text-sm">{exp.type}</span>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--accent)] -translate-x-1/2 mt-1.5 z-10 ring-4 ring-[var(--bg-page)]" />
                <div className="md:w-1/2 md:pl-12 ml-11 md:ml-0 min-w-0 flex-1">
                  <div className="p-5 rounded-xl bg-card border border-[var(--border-subtle)] shadow-card overflow-hidden">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-2 break-words">{exp.role}</h4>
                    <ul className="space-y-2 text-[var(--text-muted)] text-sm">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex gap-2 break-words">
                          <span className="text-[var(--accent)] shrink-0">▹</span>
                          <span className="min-w-0 break-words">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
