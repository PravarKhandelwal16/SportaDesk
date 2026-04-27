import { create } from 'zustand'
import type { Tournament, CreateTournamentForm } from '../types'
import { mockTournaments } from '../lib/mockData'

interface TournamentState {
  tournaments: Tournament[]
  currentTournament: Tournament | null
  setCurrentTournament: (t: Tournament | null) => void
  addTournament: (form: CreateTournamentForm, organizerId: string) => Tournament
  getTournamentById: (id: string) => Tournament | undefined
}

export const useTournamentStore = create<TournamentState>((set, get) => ({
  tournaments: mockTournaments,
  currentTournament: null,

  setCurrentTournament: (t) => set({ currentTournament: t }),

  addTournament: (form, organizerId) => {
    const newTournament: Tournament = {
      id: `t_${Date.now()}`,
      name: form.name,
      sport: form.sport as Tournament['sport'],
      format: form.format as Tournament['format'],
      status: 'upcoming',
      startDate: form.startDate,
      endDate: form.endDate,
      venue: form.venue,
      description: form.description,
      maxTeams: form.maxTeams,
      registeredTeams: [],
      matches: [],
      organizerId,
      prizePool: form.prizePool,
      entryFee: form.entryFee,
      createdAt: new Date().toISOString(),
    }
    set((s) => ({ tournaments: [newTournament, ...s.tournaments] }))
    return newTournament
  },

  getTournamentById: (id) => get().tournaments.find((t) => t.id === id),
}))
