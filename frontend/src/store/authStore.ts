import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User, UserRole } from '../types'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, name: string, role: UserRole) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (email, name, role) => {
        const user: User = {
          id: `user_${Date.now()}`,
          name,
          email,
          role,
          createdAt: new Date().toISOString(),
        }
        set({ user, isAuthenticated: true })
      },

      logout: () => {
        set({ user: null, isAuthenticated: false })
      },
    }),
    {
      name: 'sportsdesk-auth',
    }
  )
)
