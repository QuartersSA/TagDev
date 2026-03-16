import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    (localStorage.getItem('tagdev-theme') as 'dark' | 'light') || 'dark'
  )
  const [lang, setLang] = useState(() =>
    localStorage.getItem('tagdev-lang') || 'en'
  )

  useEffect(() => {
    if (!localStorage.getItem('tagdev-auth')) window.location.href = '/login.html'
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('tagdev-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('tagdev-lang', lang)
  }, [lang])

  return (
    <div className="flex min-h-screen w-full" style={{ background: 'var(--bg-primary)' }}>
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        lang={lang}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div
        className="flex-1 flex flex-col min-h-screen transition-all duration-200"
        style={{ marginInlineStart: 0 }}
      >
        <style>{`
          @media (min-width: 1024px) {
            .dash-main { margin-inline-start: ${collapsed ? '64px' : '240px'}; }
          }
        `}</style>

        <div className="dash-main flex-1 flex flex-col min-h-screen transition-all duration-200">
          <TopBar
            lang={lang}
            theme={theme}
            onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            onToggleLang={() => setLang(l => l === 'en' ? 'ar' : 'en')}
            onToggleSidebar={() => setMobileOpen(!mobileOpen)}
          />
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
