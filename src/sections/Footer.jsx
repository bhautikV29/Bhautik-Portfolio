import { Link } from 'react-scroll'
import { personal } from '../data/portfolioData'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--border-subtle)] bg-elevated">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="hero" smooth duration={500} className="font-display text-lg font-semibold text-[var(--text-primary)] cursor-pointer hover:text-[var(--accent)] transition-colors">
          {personal.name}
        </Link>
        <div className="flex items-center gap-6 text-[var(--text-muted)] text-sm">
          <a href={`mailto:${personal.email}`} className="hover:text-[var(--accent)] transition-colors">
            {personal.email}
          </a>
          <span>© {currentYear}</span>
        </div>
      </div>
    </footer>
  )
}
