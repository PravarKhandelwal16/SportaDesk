import { motion } from 'framer-motion'
import type { Team } from '../../types'

interface TournamentBracketProps {
  teams: Team[]
}

interface BracketMatch {
  id: string
  home: Team | null
  away: Team | null
  winner?: Team | null
  round: string
}

function BracketMatchBox({ match, delay }: { match: BracketMatch; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: 'easeOut' }}
      className="glass rounded-xl overflow-hidden border border-white/8 w-44"
    >
      <div className="text-xs text-gray-600 px-3 pt-2 pb-1 font-medium">{match.round}</div>
      {[match.home, match.away].map((team, i) => (
        <div
          key={i}
          className={`flex items-center gap-2 px-3 py-2 ${i === 0 ? 'border-b border-white/5' : ''}
            ${match.winner?.id === team?.id ? 'bg-cyan-neon/10' : ''}`}
        >
          {team ? (
            <>
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: team.color, boxShadow: `0 0 5px ${team.color}` }}
              />
              <span className={`text-xs font-medium truncate ${match.winner?.id === team.id ? 'text-cyan-neon' : 'text-gray-300'}`}>
                {team.name}
              </span>
              {match.winner?.id === team.id && (
                <span className="ml-auto text-xs text-cyan-neon">✓</span>
              )}
            </>
          ) : (
            <span className="text-xs text-gray-600 italic">TBD</span>
          )}
        </div>
      ))}
    </motion.div>
  )
}

export default function TournamentBracket({ teams }: TournamentBracketProps) {
  // Build a simple 4-team knockout bracket for display
  const t = teams.slice(0, 8)
  const qf: BracketMatch[] = [
    { id: 'qf1', home: t[0] ?? null, away: t[1] ?? null, winner: t[0] ?? null, round: 'QF 1' },
    { id: 'qf2', home: t[2] ?? null, away: t[3] ?? null, winner: t[2] ?? null, round: 'QF 2' },
    { id: 'qf3', home: t[4] ?? null, away: t[5] ?? null, winner: t[4] ?? null, round: 'QF 3' },
    { id: 'qf4', home: t[6] ?? null, away: t[7] ?? null, winner: t[6] ?? null, round: 'QF 4' },
  ]
  const sf: BracketMatch[] = [
    { id: 'sf1', home: t[0] ?? null, away: t[2] ?? null, winner: t[0] ?? null, round: 'SF 1' },
    { id: 'sf2', home: t[4] ?? null, away: t[6] ?? null, winner: t[4] ?? null, round: 'SF 2' },
  ]
  const final: BracketMatch = { id: 'f1', home: t[0] ?? null, away: t[4] ?? null, round: 'Final' }

  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex items-center gap-8 min-w-max">
        {/* Quarter Finals */}
        <div className="flex flex-col gap-6">
          <p className="text-xs text-gray-500 font-medium text-center mb-1">Quarter Finals</p>
          {qf.map((m, i) => <BracketMatchBox key={m.id} match={m} delay={i * 0.1} />)}
        </div>

        {/* Connector lines (visual only) */}
        <div className="flex flex-col justify-around h-full gap-24 py-8">
          {[0, 1].map((i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-8 h-px bg-cyan-neon/30" />
              <div className="w-px h-16 bg-cyan-neon/20" />
              <div className="w-8 h-px bg-cyan-neon/30" />
            </div>
          ))}
        </div>

        {/* Semi Finals */}
        <div className="flex flex-col gap-24 justify-around">
          <p className="text-xs text-gray-500 font-medium text-center mb-1">Semi Finals</p>
          {sf.map((m, i) => <BracketMatchBox key={m.id} match={m} delay={0.4 + i * 0.1} />)}
        </div>

        {/* Connector lines */}
        <div className="flex flex-col justify-center h-full py-16">
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-px bg-lime-neon/30" />
            <div className="w-px h-28 bg-lime-neon/20" />
            <div className="w-8 h-px bg-lime-neon/30" />
          </div>
        </div>

        {/* Final */}
        <div className="flex flex-col items-center">
          <p className="text-xs text-lime-neon font-bold text-center mb-3">🏆 Final</p>
          <div className="relative">
            <div className="absolute inset-0 rounded-xl blur-md" style={{ background: 'rgba(163,255,0,0.1)' }} />
            <BracketMatchBox match={final} delay={0.7} />
          </div>
        </div>
      </div>
    </div>
  )
}
