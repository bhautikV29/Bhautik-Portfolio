import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'
import { PdfPreview } from '../components/PdfPreview'
import { PdfModal } from '../components/PdfModal'
import { certifications } from '../data/portfolioData'

export function Certifications() {
  const [fullPdf, setFullPdf] = useState({ open: false, title: '', url: '' })

  return (
    <section id="certifications" className="py-24 relative bg-page">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Certifications" subtitle="Professional credentials" />

        <div className="space-y-12">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl bg-card border border-[var(--border-subtle)] shadow-card overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Meta: icon, name, issuer, year */}
                  <div className="lg:w-72 shrink-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] shrink-0">
                        <FaAward className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                          {cert.name}
                        </h3>
                        <p className="text-[var(--text-muted)] text-sm mt-1">{cert.issuer}</p>
                        <p className="text-[var(--text-muted)] text-xs mt-0.5">{cert.year}</p>
                        {cert.url && (
                          <button
                            type="button"
                            onClick={() => setFullPdf({ open: true, title: cert.name, url: cert.url })}
                            className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-[var(--accent)] hover:underline"
                          >
                            Open full size <FaExternalLinkAlt className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Inline PDF preview – shown directly */}
                  {cert.url && (
                    <div className="flex-1 min-w-0 flex justify-center lg:justify-end">
                      <PdfPreview file={cert.url} width={280} className="max-w-full" />
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <PdfModal
        isOpen={fullPdf.open}
        onClose={() => setFullPdf((p) => ({ ...p, open: false }))}
        title={fullPdf.title}
        fileUrl={fullPdf.url}
      />
    </section>
  )
}
