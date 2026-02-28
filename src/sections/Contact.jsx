import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'
import { Button } from '../components/Button'
import { personal } from '../data/portfolioData'

const iconMap = { FaGithub, FaLinkedinIn }

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 800)
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-card border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition'

  return (
    <section id="contact" className="py-24 relative bg-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Get in Touch" subtitle="I'd love to hear from you" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <p className="text-[var(--text-secondary)] mb-6">
              Have a project in mind or want to collaborate? Drop a message or reach out via email.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="text-[var(--accent)] text-lg font-semibold hover:underline"
            >
              {personal.email}
            </a>
            <p className="text-[var(--text-muted)] mt-2">{personal.phone}</p>
            <div className="flex gap-3 mt-6">
              {personal.social.map((s) => {
                const Icon = iconMap[s.icon] || FaGithub
                return (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="p-3.5 rounded-xl bg-card border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] shadow-card transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="Your message..."
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={<FaPaperPlane className="w-5 h-5" />}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
            </Button>
            <p className="text-[var(--text-muted)] text-sm">
              Form ready for Formspree, Netlify Forms, or your API.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
