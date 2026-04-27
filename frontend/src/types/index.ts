// ─── Sport Types ──────────────────────────────────────────────────────────────
export type Sport = 'cricket' | 'kabaddi' | 'football' | 'basketball' | 'volleyball' | 'badminton'

export type TournamentFormat = 'league' | 'knockout' | 'group+knockout' | 'round-robin'

export type TournamentStatus = 'upcoming' | 'live' | 'completed' | 'draft'

export type MatchStatus = 'upcoming' | 'live' | 'completed'

export type UserRole = 'organizer' | 'team_manager' | 'player'

// ─── User ─────────────────────────────────────────────────────────────────────
export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  createdAt: string
}

// ─── Team ─────────────────────────────────────────────────────────────────────
export interface Player {
  id: string
  name: string
  position?: string
  jerseyNumber?: number
}

export interface Team {
  id: string
  name: string
  logo?: string
  color: string
  players: Player[]
  wins: number
  losses: number
  draws: number
  points: number
  goalsFor?: number
  goalsAgainst?: number
}

// ─── Match ────────────────────────────────────────────────────────────────────
export interface CricketScore {
  runs: number
  wickets: number
  overs: number
  extras?: number
}

export interface KabaddiScore {
  points: number
  raids: number
  tackles: number
}

export interface MatchScore {
  home: number | CricketScore | KabaddiScore
  away: number | CricketScore | KabaddiScore
}

export interface Match {
  id: string
  tournamentId: string
  homeTeam: Team
  awayTeam: Team
  date: string
  venue: string
  status: MatchStatus
  round?: string
  score?: MatchScore
  sport: Sport
}

// ─── Tournament ───────────────────────────────────────────────────────────────
export interface Tournament {
  id: string
  name: string
  sport: Sport
  format: TournamentFormat
  status: TournamentStatus
  startDate: string
  endDate: string
  venue: string
  description: string
  maxTeams: number
  registeredTeams: Team[]
  matches: Match[]
  organizerId: string
  prizePool?: string
  entryFee?: string
  banner?: string
  createdAt: string
}

// ─── Wizard Step ──────────────────────────────────────────────────────────────
export interface CreateTournamentForm {
  name: string
  sport: Sport | ''
  description: string
  format: TournamentFormat | ''
  maxTeams: number
  startDate: string
  endDate: string
  venue: string
  prizePool: string
  entryFee: string
  teamNames: string[]
}

// ─── Dashboard Stats ──────────────────────────────────────────────────────────
export interface DashboardStats {
  activeTournaments: number
  totalMatches: number
  totalTeams: number
  revenueEstimate: string
}
