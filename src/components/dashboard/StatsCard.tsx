import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatsCardProps {
  label: string
  value: string | number
  icon: ReactNode
  trend?: string
  trendUp?: boolean
  color?: 'cyan' | 'lime' | 'magenta' | 'yellow'
  delay?: number
}

const colorMap = {
  cyan:    { text: 'text-cyan-neon', bg: 'bg-cyan-neon/10', border: 'border-cyan-neon/20', glow: 'rgba(0,245,255,0.15)' },
  lime:    { text: 'text-lime-neon',    bg: 'bg-lime-neon/10',    border: 'border-lime-neon/20',    glow: 'rgba(163,255,0,0.15)' },
  magenta: { text: 'text-magenta-neon', bg: 'bg-magenta-neon/10', border: 'border-magenta-neon/20', glow: 'rgba(255,0,255,0.12)' },
  yellow:  { text: 'text-yellow-400',   bg: 'bg-yellow-400/10',   border: 'border-yellow-400/20',   glow: 'rgba(255,221,0,0.15)' },
}

export default function StatsCard({ label, value, icon, trend, trendUp = true, color = 'cyan', delay = 0 }: StatsCardProps) {
  const c = colorMap[color]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`glass rounded-2xl p-5 border ${c.border} transition-all duration-300`}
      style={{ boxShadow: `0 4px 30px ${c.glow}` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center ${c.text}`}>
          {icon}
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-medium ${trendUp ? 'text-lime-neon' : 'text-red-400'}`}>
            {trendUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {trend}
          </div>
        )}
      </div>
      <div className={`font-display font-bold text-3xl ${c.text} mb-1`}
        style={{ textShadow: `0 0 20px ${c.glow}` }}>
        {value}
      </div>
      <div className="text-xs text-gray-500 font-medium">{label}</div>
    </motion.div>
  )
}
