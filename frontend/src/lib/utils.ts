import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(dateStr: string, fmt: 'short' | 'long' | 'time' = 'short') {
  const d = new Date(dateStr)
  if (fmt === 'short') return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
  if (fmt === 'long')  return d.toLocaleDateString('en-IN', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })
  return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
}

export function getStatusColor(status: string) {
  switch (status) {
    case 'live': return 'text-lime-neon border-lime-neon'
    case 'upcoming': return 'text-cyan-400 border-cyan-400'
    case 'completed': return 'text-gray-400 border-gray-600'
    case 'draft': return 'text-yellow-400 border-yellow-600'
    default: return 'text-gray-400 border-gray-600'
  }
}

export function getSportEmoji(sport: string) {
  const map: Record<string, string> = {
    cricket: '🏏', kabaddi: '🤼', football: '⚽',
    basketball: '🏀', volleyball: '🏐', badminton: '🏸',
  }
  return map[sport] ?? '🏆'
}
