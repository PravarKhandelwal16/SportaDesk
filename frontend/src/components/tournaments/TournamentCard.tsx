import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import type { Tournament } from '../../types'
import { sportConfig } from '../../lib/mockData'
import { formatDate, getStatusColor } from '../../lib/utils'
import { Calendar, MapPin, Users, Trophy } from 'lucide-react'

interface TournamentCardProps {
  tournament: Tournament
}

export default function TournamentCard({ tournament }: TournamentCardProps) {
  const navigate = useNavigate()
  const sport = sportConfig[tournament.sport] ?? { icon: '🏆', color: '#00f5ff', glowColor: 'rgba(0,245,255,0.4)' }

  const statusLabel = {
    live: 'LIVE',
    upcoming: 'Upcoming',
    completed: 'Completed',
    draft: 'Draft',
  }[tournament.status]

  return (
    <GlassCard hover glow="cyan" onClick={() => navigate(`/tournaments/${tournament.id}`)} className="p-5">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: `radial-gradient(circle, ${sport.glowColor} 0%, rgba(0,0,0,0.3) 100%)`, border: `1px solid ${sport.color}30` }}
          >
            {sport.icon}
          </div>
          <div>
            <h3 className="font-display font-semibold text-white text-sm leading-tight line-clamp-2">
              {tournament.name}
            </h3>
            <p className="text-xs text-gray-500 capitalize mt-0.5">{tournament.sport}</p>
          </div>
        </div>
        <span
          className={`text-xs font-bold px-2.5 py-1 rounded-full border flex-shrink-0 ml-2 ${getStatusColor(tournament.status)}`}
          style={tournament.status === 'live' ? { boxShadow: `0 0 10px ${sport.glowColor}` } : {}}
        >
          {tournament.status === 'live' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime-neon mr-1 animate-pulse" />}
          {statusLabel}
        </span>
      </div>

      {/* Meta */}
      <div className="space-y-1.5 mb-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Calendar size={12} className="text-gray-600" />
          {formatDate(tournament.startDate)} → {formatDate(tournament.endDate)}
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <MapPin size={12} className="text-gray-600" />
          {tournament.venue}
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Users size={12} className="text-gray-600" />
          {tournament.registeredTeams.length} / {tournament.maxTeams} Teams
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(tournament.registeredTeams.length / tournament.maxTeams) * 100}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${sport.color}, ${sport.color}99)` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {tournament.prizePool ? (
          <div className="flex items-center gap-1.5">
            <Trophy size={12} className="text-yellow-400" />
            <span className="text-xs font-semibold text-yellow-400">{tournament.prizePool}</span>
          </div>
        ) : <span />}
        <span
          className="text-xs font-semibold px-3 py-1 rounded-lg capitalize"
          style={{ background: `${sport.color}15`, color: sport.color }}
        >
          {tournament.format.replace('+', ' + ')}
        </span>
      </div>
    </GlassCard>
  )
}
