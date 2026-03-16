import { Outlet, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('tagdev-theme') as 'dark' | 'light') || 'dark'
  })
  const [lang, setLang] = useState<string>(() => {
    return localStorage.getItem('tagdev-lang') || 'en'
  })

  // Check auth
  useEffect(() => {
    const auth = localStorage.getItem('tagdev-auth')
    if (!auth) {
      window.location.href = '/login.html'
    }
  }, [])

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('tagdev-theme', theme)
  }, [theme])

  // Apply language
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('tagdev-lang', lang)
  }, [lang])

  const isRtl = lang === 'ar'
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  const toggleLang = () => setLang(l => l === 'en' ? 'ar' : 'en')

  return (
    <div className="flex min-h-screen w-full" style={{ background: 'var(--bg-primary)' }}>
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        lang={lang}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div
        className="flex-1 flex flex-col min-h-screen transition-all duration-300"
        style={{
          [isRtl ? 'marginRight' : 'marginLeft']: 0,
        }}
      >
        {/* Spacer for sidebar */}
        <style>{`
          @media (min-width: 1024px) {
            .main-content-area {
              ${isRtl ? 'margin-right' : 'margin-left'}: ${sidebarCollapsed ? '72px' : '260px'};
            }
          }
        `}</style>

        <div className="main-content-area flex-1 flex flex-col min-h-screen transition-all duration-300">
          <TopBar
            lang={lang}
            theme={theme}
            onToggleTheme={toggleTheme}
            onToggleLang={toggleLang}
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
