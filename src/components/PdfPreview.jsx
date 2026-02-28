import { useState } from 'react'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

/**
 * Inline single-page PDF preview (e.g. for certification cards).
 * Shows first page only at a fixed width, no navigation.
 */
export function PdfPreview({ file, width = 260, className = '' }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const onLoadSuccess = () => {
    setLoading(false)
    setError(null)
  }

  const onLoadError = () => {
    setError(true)
    setLoading(false)
  }

  if (error) {
    return (
      <a
        href={file}
        target="_blank"
        rel="noopener noreferrer"
        className={`block rounded-xl border border-[var(--border-subtle)] bg-elevated p-6 text-center text-sm text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors ${className}`}
      >
        View certificate
      </a>
    )
  }

  return (
    <div className={`relative rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-white ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-elevated">
          <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <Document
        file={file}
        onLoadSuccess={onLoadSuccess}
        onLoadError={onLoadError}
        loading=""
      >
        <Page
          pageNumber={1}
          width={width}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="shadow-inner"
        />
      </Document>
    </div>
  )
}
