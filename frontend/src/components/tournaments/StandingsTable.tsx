import { motion } from 'framer-motion'
import type { Team } from '../../types'

interface StandingsTableProps {
  teams: Team[]
  sport: string
}

export default function StandingsTable({ teams, sport }: StandingsTableProps) {
  const sorted = [...teams].sort((a, b) => b.points - a.points)

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="px-5 py-4 border-b border-white/5">
        <h3 className="font-display font-semibold text-white text-sm">Standings</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-gray-500 border-b border-white/5">
              <th className="text-left px-5 py-3 font-medium">#</th>
              <th className="text-left px-3 py-3 font-medium">Team</th>
              <th className="text-center px-3 py-3 font-medium">P</th>
              <th className="text-center px-3 py-3 font-medium">W</th>
              <th className="text-center px-3 py-3 font-medium">L</th>
              <th className="text-center px-3 py-3 font-medium">D</th>
              {sport === 'football' && <th className="text-center px-3 py-3 font-medium">GD</th>}
              <th className="text-center px-3 py-3 font-medium text-cyan-neon">Pts</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((team, i) => (
              <motion.tr
                key={team.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`border-b border-white/5 transition-colors hover:bg-white/3 ${i === 0 ? 'bg-cyan-neon/5' : ''}`}
              >
                <td className="px-5 py-3">
                  <span className={`font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center
                    ${i === 0 ? 'bg-cyan-neon text-bg-base' : i === 1 ? 'bg-lime-neon/20 text-lime-neon' : i === 2 ? 'bg-magenta-neon/20 text-magenta-neon' : 'text-gray-500'}`}>
                    {i + 1}
                  </span>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: team.color, boxShadow: `0 0 6px ${team.color}` }}
                    />
                    <span className={`font-medium ${i === 0 ? 'text-cyan-neon' : 'text-white'}`}>{team.name}</span>
                  </div>
                </td>
                <td className="px-3 py-3 text-center text-gray-400">{team.wins + team.losses + team.draws}</td>
                <td className="px-3 py-3 text-center text-white">{team.wins}</td>
                <td className="px-3 py-3 text-center text-gray-400">{team.losses}</td>
                <td className="px-3 py-3 text-center text-gray-400">{team.draws}</td>
                {sport === 'football' && (
                  <td className="px-3 py-3 text-center text-gray-400">
                    {(team.goalsFor ?? 0) - (team.goalsAgainst ?? 0) > 0 ? '+' : ''}
                    {(team.goalsFor ?? 0) - (team.goalsAgainst ?? 0)}
                  </td>
                )}
                <td className="px-3 py-3 text-center">
                  <span className={`font-bold ${i === 0 ? 'text-cyan-neon neon-text-cyan' : 'text-white'}`}>
                    {team.points}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
