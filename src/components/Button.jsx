import { motion } from 'framer-motion'

/**
 * Theme-aware buttons: primary, secondary, outline, ghost
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 disabled:opacity-50'
  const focusOffset = 'focus:ring-offset-[var(--bg-page)]'
  const variants = {
    primary:
      'bg-[var(--accent)] text-white shadow-lg hover:opacity-90 hover:shadow-glow hover:scale-[1.02] border border-transparent',
    secondary:
      'bg-card text-[var(--text-primary)] border border-[var(--border-subtle)] shadow-card hover:border-[var(--accent)] hover:text-[var(--accent)]',
    outline:
      'border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white',
    ghost:
      'text-[var(--text-secondary)] hover:bg-[var(--glass)] hover:text-[var(--text-primary)]',
  }
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${base} ${focusOffset} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
