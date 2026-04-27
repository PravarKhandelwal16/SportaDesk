import type { Tournament, Team, Match } from '../types'

// ─── Shared Teams ──────────────────────────────────────────────────────────────
const makeTeam = (id: string, name: string, color: string, w: number, l: number, d: number, pts: number, gf = 0, ga = 0): Team => ({
  id, name, color,
  players: Array.from({ length: 11 }, (_, i) => ({
    id: `${id}_p${i}`,
    name: `Player ${i + 1}`,
    jerseyNumber: i + 1,
  })),
  wins: w, losses: l, draws: d, points: pts,
  goalsFor: gf, goalsAgainst: ga,
})

// ─── TOURNAMENT 1: Cricket Premier League ─────────────────────────────────────
const cricketTeams: Team[] = [
  makeTeam('ct1', 'Mumbai Titans', '#00f5ff', 5, 1, 0, 15, 0, 0),
  makeTeam('ct2', 'Delhi Dynamos', '#a3ff00', 4, 2, 0, 12, 0, 0),
  makeTeam('ct3', 'Chennai Kings', '#ff00ff', 3, 3, 0, 9, 0, 0),
  makeTeam('ct4', 'Bangalore Bulls', '#ff6600', 2, 4, 0, 6, 0, 0),
  makeTeam('ct5', 'Kolkata Knights', '#ffdd00', 1, 5, 0, 3, 0, 0),
  makeTeam('ct6', 'Hyderabad Hawks', '#00ff88', 0, 6, 0, 0, 0, 0),
]

const cricketMatches: Match[] = [
  {
    id: 'm1', tournamentId: 't1',
    homeTeam: cricketTeams[0], awayTeam: cricketTeams[1],
    date: '2026-05-02T14:00:00', venue: 'Wankhede Stadium', status: 'live',
    round: 'League Stage', sport: 'cricket',
    score: { home: { runs: 187, wickets: 4, overs: 18.2 }, away: { runs: 142, wickets: 6, overs: 20 } },
  },
  {
    id: 'm2', tournamentId: 't1',
    homeTeam: cricketTeams[2], awayTeam: cricketTeams[3],
    date: '2026-05-03T18:00:00', venue: 'Chepauk Stadium', status: 'upcoming',
    round: 'League Stage', sport: 'cricket',
  },
  {
    id: 'm3', tournamentId: 't1',
    homeTeam: cricketTeams[4], awayTeam: cricketTeams[5],
    date: '2026-04-28T14:00:00', venue: 'Eden Gardens', status: 'completed',
    round: 'League Stage', sport: 'cricket',
    score: { home: { runs: 165, wickets: 7, overs: 20 }, away: { runs: 148, wickets: 9, overs: 20 } },
  },
  {
    id: 'm4', tournamentId: 't1',
    homeTeam: cricketTeams[1], awayTeam: cricketTeams[4],
    date: '2026-05-05T18:00:00', venue: 'Feroz Shah Kotla', status: 'upcoming',
    round: 'League Stage', sport: 'cricket',
  },
  {
    id: 'm5', tournamentId: 't1',
    homeTeam: cricketTeams[0], awayTeam: cricketTeams[2],
    date: '2026-05-07T14:00:00', venue: 'Wankhede Stadium', status: 'upcoming',
    round: 'Quarter Final', sport: 'cricket',
  },
]

export const tournament1: Tournament = {
  id: 't1',
  name: 'Cyber Cricket Premier League 2026',
  sport: 'cricket',
  format: 'group+knockout',
  status: 'live',
  startDate: '2026-04-20',
  endDate: '2026-05-15',
  venue: 'Multiple Venues',
  description: 'The most prestigious cricket tournament with top clubs battling for cyber supremacy. 20-over format with AI-powered analytics.',
  maxTeams: 8,
  registeredTeams: cricketTeams,
  matches: cricketMatches,
  organizerId: 'user_demo',
  prizePool: '₹50,00,000',
  entryFee: '₹25,000',
  createdAt: '2026-04-01T00:00:00',
}

// ─── TOURNAMENT 2: Kabaddi Clash ───────────────────────────────────────────────
const kabaddiTeams: Team[] = [
  makeTeam('kb1', 'Neon Raiders', '#00f5ff', 4, 0, 1, 13, 0, 0),
  makeTeam('kb2', 'Storm Warriors', '#a3ff00', 3, 1, 1, 10, 0, 0),
  makeTeam('kb3', 'Thunder Cats', '#ff00ff', 2, 2, 1, 7, 0, 0),
  makeTeam('kb4', 'Cyber Sharks', '#ff6600', 1, 3, 1, 4, 0, 0),
  makeTeam('kb5', 'Volt Panthers', '#ffdd00', 0, 4, 1, 1, 0, 0),
  makeTeam('kb6', 'Grid Runners', '#00ff88', 0, 5, 0, 0, 0, 0),
]

const kabaddiMatches: Match[] = [
  {
    id: 'km1', tournamentId: 't2',
    homeTeam: kabaddiTeams[0], awayTeam: kabaddiTeams[1],
    date: '2026-05-01T16:00:00', venue: 'Dome Arena', status: 'live',
    round: 'Round 5', sport: 'kabaddi',
    score: {
      home: { points: 38, raids: 18, tackles: 12 },
      away: { points: 29, raids: 14, tackles: 9 },
    },
  },
  {
    id: 'km2', tournamentId: 't2',
    homeTeam: kabaddiTeams[2], awayTeam: kabaddiTeams[3],
    date: '2026-05-04T18:00:00', venue: 'Cyber Dome', status: 'upcoming',
    round: 'Round 6', sport: 'kabaddi',
  },
  {
    id: 'km3', tournamentId: 't2',
    homeTeam: kabaddiTeams[4], awayTeam: kabaddiTeams[5],
    date: '2026-04-27T16:00:00', venue: 'Arena X', status: 'completed',
    round: 'Round 4', sport: 'kabaddi',
    score: {
      home: { points: 42, raids: 20, tackles: 15 },
      away: { points: 31, raids: 13, tackles: 11 },
    },
  },
  {
    id: 'km4', tournamentId: 't2',
    homeTeam: kabaddiTeams[1], awayTeam: kabaddiTeams[4],
    date: '2026-05-06T14:00:00', venue: 'Dome Arena', status: 'upcoming',
    round: 'Semi Final', sport: 'kabaddi',
  },
]

export const tournament2: Tournament = {
  id: 't2',
  name: 'Pro Kabaddi Neon League',
  sport: 'kabaddi',
  format: 'league',
  status: 'live',
  startDate: '2026-04-15',
  endDate: '2026-05-10',
  venue: 'Dome Arena, Navi Mumbai',
  description: 'Elite kabaddi league where raiders and defenders clash under neon lights. Full contact sport with precision analytics.',
  maxTeams: 8,
  registeredTeams: kabaddiTeams,
  matches: kabaddiMatches,
  organizerId: 'user_demo',
  prizePool: '₹20,00,000',
  entryFee: '₹10,000',
  createdAt: '2026-04-01T00:00:00',
}

// ─── TOURNAMENT 3: Football Cup ────────────────────────────────────────────────
const footballTeams: Team[] = [
  makeTeam('ft1', 'Volt FC', '#00f5ff', 3, 0, 0, 9, 8, 2),
  makeTeam('ft2', 'Neon United', '#a3ff00', 2, 1, 0, 6, 5, 4),
  makeTeam('ft3', 'Grid City', '#ff00ff', 1, 1, 1, 4, 4, 4),
  makeTeam('ft4', 'Cyber Athletic', '#ff6600', 1, 2, 0, 3, 3, 6),
  makeTeam('ft5', 'Storm FC', '#ffdd00', 0, 2, 1, 1, 2, 6),
  makeTeam('ft6', 'Pulse Wanderers', '#00ff88', 0, 3, 0, 0, 1, 9),
]

const footballMatches: Match[] = [
  {
    id: 'fm1', tournamentId: 't3',
    homeTeam: footballTeams[0], awayTeam: footballTeams[1],
    date: '2026-06-01T18:00:00', venue: 'Neon Stadium', status: 'upcoming',
    round: 'Group Stage', sport: 'football',
  },
  {
    id: 'fm2', tournamentId: 't3',
    homeTeam: footballTeams[2], awayTeam: footballTeams[3],
    date: '2026-05-20T16:00:00', venue: 'Cyber Ground', status: 'completed',
    round: 'Group Stage', sport: 'football',
    score: { home: 2, away: 1 },
  },
  {
    id: 'fm3', tournamentId: 't3',
    homeTeam: footballTeams[4], awayTeam: footballTeams[5],
    date: '2026-05-22T14:00:00', venue: 'Grid Arena', status: 'completed',
    round: 'Group Stage', sport: 'football',
    score: { home: 1, away: 0 },
  },
  {
    id: 'fm4', tournamentId: 't3',
    homeTeam: footballTeams[0], awayTeam: footballTeams[3],
    date: '2026-06-10T18:00:00', venue: 'Neon Stadium', status: 'upcoming',
    round: 'Quarter Final', sport: 'football',
  },
]

export const tournament3: Tournament = {
  id: 't3',
  name: 'Neon Football Cup 2026',
  sport: 'football',
  format: 'group+knockout',
  status: 'upcoming',
  startDate: '2026-06-01',
  endDate: '2026-06-30',
  venue: 'Neon Stadium, Pune',
  description: 'The most electrifying football tournament in the region. 16 teams competing for the coveted Neon Cup.',
  maxTeams: 16,
  registeredTeams: footballTeams,
  matches: footballMatches,
  organizerId: 'user_demo',
  prizePool: '₹35,00,000',
  entryFee: '₹15,000',
  createdAt: '2026-04-10T00:00:00',
}

export const mockTournaments: Tournament[] = [tournament1, tournament2, tournament3]

// ─── Dashboard Stats ───────────────────────────────────────────────────────────
export const mockStats = {
  activeTournaments: 2,
  totalMatches: 15,
  totalTeams: 18,
  revenueEstimate: '₹1,05,00,000',
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Cricket Organizer',
    text: 'SportaDesk completely changed how we manage our district-level cricket tournaments. The live scoring and bracket system is incredible.',
    avatar: '🏏',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Nair',
    role: 'Kabaddi Team Manager',
    text: 'Managing 12 teams was always a nightmare. With SportaDesk, everything from registrations to fixtures is seamless.',
    avatar: '🤼',
    rating: 5,
  },
  {
    id: 3,
    name: 'Arjun Mehta',
    role: 'Football Club President',
    text: 'The interface is absolutely stunning. Players love checking the leaderboards and upcoming match schedules.',
    avatar: '⚽',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    role: 'Sports Committee Head',
    text: 'We organized a 32-team knockout in 10 minutes. The automation and real-time updates are game changers.',
    avatar: '🏆',
    rating: 5,
  },
]

export const sportConfig: Record<string, { icon: string; color: string; glowColor: string }> = {
  cricket:    { icon: '🏏', color: '#00f5ff', glowColor: 'rgba(0,245,255,0.4)' },
  kabaddi:    { icon: '🤼', color: '#a3ff00', glowColor: 'rgba(163,255,0,0.4)' },
  football:   { icon: '⚽', color: '#ff00ff', glowColor: 'rgba(255,0,255,0.4)' },
  basketball: { icon: '🏀', color: '#ff6600', glowColor: 'rgba(255,102,0,0.4)' },
  volleyball: { icon: '🏐', color: '#ffdd00', glowColor: 'rgba(255,221,0,0.4)' },
  badminton:  { icon: '🏸', color: '#00ff88', glowColor: 'rgba(0,255,136,0.4)' },
}
