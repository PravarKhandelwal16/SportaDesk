import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: 'cyan' | 'lime' | 'magenta' | 'none'
  onClick?: () => void
}

export default function GlassCard({ children, className = '', hover = true, glow = 'none', onClick }: GlassCardProps) {
  const glowClasses = {
    cyan:    'hover:border-cyan-neon/40 hover:shadow-[0_0_30px_rgba(0,245,255,0.1)]',
    lime:    'hover:border-lime-neon/40 hover:shadow-[0_0_30px_rgba(163,255,0,0.1)]',
    magenta: 'hover:border-magenta-neon/40 hover:shadow-[0_0_30px_rgba(255,0,255,0.1)]',
    none:    '',
  }

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`glass rounded-2xl ${hover ? glowClasses[glow] : ''} transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}
