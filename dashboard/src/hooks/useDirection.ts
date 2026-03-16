import { useEffect } from 'react'
import { useLangStore } from '../stores/langStore'

export function useDirection() {
  const lang = useLangStore((s) => s.lang)
  const dir: 'ltr' | 'rtl' = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.dir = dir
    document.documentElement.lang = lang
  }, [lang, dir])

  return dir
}
