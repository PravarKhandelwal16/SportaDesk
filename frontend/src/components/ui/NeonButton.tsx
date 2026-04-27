import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface NeonButtonProps {
  children: ReactNode
  variant?: 'cyan' | 'lime' | 'magenta' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  fullWidth?: boolean
}

const variants = {
  cyan:    'bg-cyan-neon text-bg-base hover:shadow-neon-cyan font-bold',
  lime:    'bg-lime-neon text-bg-base hover:shadow-neon-lime font-bold',
  magenta: 'bg-magenta-neon text-white hover:shadow-neon-magenta font-bold',
  ghost:   'glass border border-white/10 text-gray-300 hover:border-cyan-neon/40 hover:text-cyan-neon',
  danger:  'bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30',
}

const sizes = {
  sm: 'px-3 py-1.5 text-xs rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-8 py-3.5 text-base rounded-xl',
}

export default function NeonButton({
  children, variant = 'cyan', size = 'md', onClick, type = 'button',
  disabled = false, className = '', fullWidth = false,
}: NeonButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.03, y: -1 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`btn-neon inline-flex items-center justify-center gap-2 transition-all duration-300
        ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
        ${className}`}
    >
      {children}
    </motion.button>
  )
}
