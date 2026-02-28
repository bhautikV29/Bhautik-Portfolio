import { useState, useEffect } from 'react'
import { Document, Page } from 'react-pdf'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

/**
 * In-site PDF viewer with page navigation.
 * Used inside PdfModal for resume and certificate preview.
 */
function getPageWidth() {
  if (typeof window === 'undefined') return 600
  return Math.min(window.innerWidth * 0.85, 700)
}

export function PdfViewer({ file, onLoadSuccess }) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pageWidth, setPageWidth] = useState(getPageWidth)

  useEffect(() => {
    const onResize = () => setPageWidth(getPageWidth())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    setLoading(false)
    setError(null)
    onLoadSuccess?.(numPages)
  }

  const onDocumentLoadError = (err) => {
    setError(err?.message || 'Failed to load PDF')
    setLoading(false)
  }

  const goPrev = () => setPageNumber((p) => Math.max(1, p - 1))
  const goNext = () => setPageNumber((p) => Math.min(numPages || 1, p + 1))

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-[var(--text-muted)]">
        <p className="text-center">{error}</p>
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-[var(--accent)] hover:underline"
        >
          Open PDF in new tab
        </a>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="w-10 h-10 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading=""
        className="flex flex-col items-center"
      >
        <Page
          pageNumber={pageNumber}
          width={pageWidth}
          renderTextLayer={true}
          renderAnnotationLayer={true}
          className="shadow-lg"
        />
      </Document>
      {numPages > 1 && (
        <div className="flex items-center gap-4 mt-4 pb-2">
          <button
            type="button"
            onClick={goPrev}
            disabled={pageNumber <= 1}
            className="p-2 rounded-lg bg-card border border-[var(--border-subtle)] text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[var(--accent)] transition-colors"
            aria-label="Previous page"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-[var(--text-secondary)] font-medium">
            {pageNumber} / {numPages}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={pageNumber >= numPages}
            className="p-2 rounded-lg bg-card border border-[var(--border-subtle)] text-[var(--text-primary)] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[var(--accent)] transition-colors"
            aria-label="Next page"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  )
}
