import { useLangStore } from '../stores/langStore'
import en from './en'
import ar from './ar'

const translations: Record<string, Record<string, string>> = { en, ar }

export function useTranslation() {
  const lang = useLangStore((s) => s.lang)
  const dir: 'ltr' | 'rtl' = lang === 'ar' ? 'rtl' : 'ltr'

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations['en']?.[key] ?? key
  }

  return { t, lang, dir }
}
