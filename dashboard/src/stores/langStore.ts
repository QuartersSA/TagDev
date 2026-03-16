import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LangState {
  lang: 'en' | 'ar'
  setLang: (lang: 'en' | 'ar') => void
}

const applyLangAttributes = (lang: 'en' | 'ar') => {
  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
}

export const useLangStore = create<LangState>()(
  persist(
    (set) => ({
      lang: 'en',
      setLang: (lang: 'en' | 'ar') => {
        applyLangAttributes(lang)
        set({ lang })
      },
    }),
    {
      name: 'tagdev-lang',
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyLangAttributes(state.lang)
        }
      },
    }
  )
)

// Apply default lang attributes on init
applyLangAttributes('en')
