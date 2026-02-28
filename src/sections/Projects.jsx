import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'
import { Button } from '../components/Button'
import { projects } from '../data/portfolioData'

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-page">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Projects" subtitle="Selected work and case studies" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-card border border-[var(--border-subtle)] shadow-card hover:shadow-glow hover:border-[var(--accent)] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded bg-card/90 border border-[var(--border-subtle)] text-[var(--text-muted)] text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[var(--text-muted)] text-xs shrink-0">{project.client} · {project.teamSize}</span>
                </div>
                <p className="text-[var(--text-muted)] text-sm mb-4 line-clamp-3">{project.description}</p>
                <p className="text-[var(--accent)] text-sm font-medium mb-4">{project.role}</p>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button href={project.liveUrl} variant="primary" size="sm" icon={<FaExternalLinkAlt className="w-4 h-4" />}>
                      Live
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button href={project.githubUrl} variant="secondary" size="sm" icon={<FaGithub className="w-4 h-4" />}>
                      Code
                    </Button>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <span className="text-[var(--text-muted)] text-sm">Confidential / NDA</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
