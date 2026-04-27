import { motion } from 'framer-motion'
import type { Match } from '../../types'
import { sportConfig } from '../../lib/mockData'
import { formatDate } from '../../lib/utils'
import { MapPin, Clock } from 'lucide-react'

interface MatchCardProps {
  match: Match
  compact?: boolean
}

function CricketScoreDisplay({ score }: { score: any }) {
  return (
    <div className="text-center">
      <div className="font-display font-bold text-lg text-white">
        {score.runs}/{score.wickets}
      </div>
      <div className="text-xs text-gray-500">({score.overs} ov)</div>
    </div>
  )
}

function KabaddiScoreDisplay({ score }: { score: any }) {
  return (
    <div className="text-center">
      <div className="font-display font-bold text-lg text-white">{score.points}</div>
      <div className="text-xs text-gray-500">{score.raids}R · {score.tackles}T</div>
    </div>
  )
}

function ScoreDisplay({ match }: { match: Match }) {
  if (!match.score) return (
    <div className="flex flex-col items-center justify-center px-4">
      <span className="text-xs text-gray-600 font-mono">VS</span>
    </div>
  )

  if (match.sport === 'cricket') {
    return (
      <div className="flex items-center gap-3 px-2">
        <CricketScoreDisplay score={match.score.home} />
        <span className="text-gray-600 text-xs">vs</span>
        <CricketScoreDisplay score={match.score.away} />
      </div>
    )
  }

  if (match.sport === 'kabaddi') {
    return (
      <div className="flex items-center gap-3 px-2">
        <KabaddiScoreDisplay score={match.score.home} />
        <span className="text-gray-600 text-xs">vs</span>
        <KabaddiScoreDisplay score={match.score.away} />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 px-2">
      <span className="font-display font-bold text-2xl text-white">{match.score.home as number}</span>
      <span className="text-gray-600 text-sm">—</span>
      <span className="font-display font-bold text-2xl text-white">{match.score.away as number}</span>
    </div>
  )
}

export default function MatchCard({ match, compact = false }: MatchCardProps) {
  const sport = sportConfig[match.sport] ?? { color: '#00f5ff', glowColor: 'rgba(0,245,255,0.4)', icon: '🏆' }
  const isLive = match.status === 'live'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`glass rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/15
        ${isLive ? 'border border-lime-neon/30' : 'border border-white/5'}`}
      style={isLive ? { boxShadow: '0 0 20px rgba(163,255,0,0.08)' } : {}}
    >
      {/* Status Bar */}
      <div
        className="h-0.5 w-full"
        style={{ background: isLive ? 'linear-gradient(90deg, transparent, #a3ff00, transparent)' : `linear-gradient(90deg, transparent, ${sport.color}40, transparent)` }}
      />

      <div className={`${compact ? 'p-3' : 'p-4'}`}>
        {/* Header Row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm">{sport.icon}</span>
            <span className="text-xs text-gray-500 capitalize">{match.round ?? match.sport}</span>
          </div>
          {isLive ? (
            <span className="flex items-center gap-1.5 text-xs font-bold text-lime-neon">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-neon animate-pulse" />
              LIVE
            </span>
          ) : (
            <span className={`text-xs font-medium ${match.status === 'completed' ? 'text-gray-500' : 'text-cyan-400'}`}>
              {match.status === 'completed' ? 'FT' : 'Upcoming'}
            </span>
          )}
        </div>

        {/* Match Row */}
        <div className="flex items-center justify-between">
          {/* Home Team */}
          <div className="flex-1 text-right">
            <p className={`font-display font-semibold text-sm ${compact ? '' : 'text-base'} text-white leading-tight`}>
              {match.homeTeam.name}
            </p>
            <div
              className="inline-block w-2 h-2 rounded-full mt-1"
              style={{ backgroundColor: match.homeTeam.color, boxShadow: `0 0 6px ${match.homeTeam.color}` }}
            />
          </div>

          {/* Score */}
          <div className="mx-3">
            <ScoreDisplay match={match} />
          </div>

          {/* Away Team */}
          <div className="flex-1 text-left">
            <p className={`font-display font-semibold text-sm ${compact ? '' : 'text-base'} text-white leading-tight`}>
              {match.awayTeam.name}
            </p>
            <div
              className="inline-block w-2 h-2 rounded-full mt-1"
              style={{ backgroundColor: match.awayTeam.color, boxShadow: `0 0 6px ${match.awayTeam.color}` }}
            />
          </div>
        </div>

        {/* Footer */}
        {!compact && (
          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/5">
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <Clock size={10} />
              {formatDate(match.date, 'short')} · {formatDate(match.date, 'time')}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <MapPin size={10} />
              {match.venue}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
