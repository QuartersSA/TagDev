import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeState {
  mode: 'dark' | 'light'
  toggle: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: 'dark',
      toggle: () => {
        const next = get().mode === 'dark' ? 'light' : 'dark'
        document.documentElement.classList.remove('dark', 'light')
        document.documentElement.classList.add(next)
        set({ mode: next })
      },
    }),
    {
      name: 'tagdev-theme',
      onRehydrateStorage: () => (state) => {
        if (state) {
          document.documentElement.classList.remove('dark', 'light')
          document.documentElement.classList.add(state.mode)
        }
      },
    }
  )
)

// Apply default theme class on init
document.documentElement.classList.add('dark')
