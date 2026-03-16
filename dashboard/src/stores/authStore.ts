import { create } from 'zustand'

interface User {
  name: string
  email: string
  role: string
  avatar?: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: { name: 'Ahmed Al-Rashid', email: 'ahmed@tagdev.com', role: 'admin' },
  isAuthenticated: true,
  login: (user: User) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}))
