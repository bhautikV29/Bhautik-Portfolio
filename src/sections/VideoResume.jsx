import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaDownload, FaFilePdf } from 'react-icons/fa'
import { SectionTitle } from '../components/SectionTitle'
import { Button } from '../components/Button'
import { PdfModal } from '../components/PdfModal'
import { personal } from '../data/portfolioData'

export function VideoResume() {
  const [playing, setPlaying] = useState(false)
  const [resumePdfOpen, setResumePdfOpen] = useState(false)

  const hasEmbedUrl = Boolean(personal.videoResumeUrl?.trim())
  const hasLocalVideo = Boolean(personal.videoResumeFile?.trim())
  const hasVideo = hasEmbedUrl || hasLocalVideo

  const localVideoSrc = hasLocalVideo
    ? `/${encodeURIComponent(personal.videoResumeFile)}`
    : ''

  return (
    <section id="video-resume" className="py-24 relative bg-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Video Resume" subtitle="Watch my story in a few minutes" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-card border border-[var(--border-subtle)] shadow-card aspect-video flex items-center justify-center bg-[var(--bg-elevated)]"
        >
          {hasEmbedUrl ? (
            <>
              {!playing && (
                <motion.button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center z-10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-24 h-24 rounded-full bg-[var(--accent)] flex items-center justify-center shadow-glow">
                    <FaPlay className="w-8 h-8 text-white ml-1" />
                  </div>
                </motion.button>
              )}
              {playing ? (
                <iframe
                  src={personal.videoResumeUrl.includes('youtube') ? personal.videoResumeUrl.replace('watch?v=', 'embed/') : personal.videoResumeUrl}
                  title="Video Resume"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800')" }}
                />
              )}
            </>
          ) : hasLocalVideo ? (
            <video
              className="w-full h-full object-contain"
              controls
              playsInline
              preload="metadata"
              title="Video Resume"
            >
              <source src={localVideoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mx-auto mb-4">
                <FaPlay className="w-10 h-10 text-[var(--accent)]" />
              </div>
              <p className="text-[var(--text-muted)] mb-2">Add a video file to <code className="text-[var(--accent)]">public/</code> and set <code className="text-[var(--accent)]">videoResumeFile</code> in portfolioData.js</p>
              <p className="text-[var(--text-muted)] text-sm">Or add a YouTube/Vimeo URL to <code className="text-[var(--text-secondary)]">videoResumeUrl</code></p>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          <Button
            variant="primary"
            size="md"
            icon={<FaFilePdf className="w-5 h-5" />}
            iconPosition="left"
            onClick={() => setResumePdfOpen(true)}
          >
            Preview Resume
          </Button>
          <Button
            href={personal.resumePdfUrl}
            variant="secondary"
            size="md"
            icon={<FaDownload className="w-5 h-5" />}
            iconPosition="left"
          >
            Download Resume
          </Button>
        </motion.div>
      </div>

      <PdfModal
        isOpen={resumePdfOpen}
        onClose={() => setResumePdfOpen(false)}
        title="Resume"
        fileUrl={personal.resumePdfUrl}
      />
    </section>
  )
}
