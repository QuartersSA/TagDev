import { Search, Bell, Sun, Moon, Menu, ChevronDown, LogOut, User, Settings } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

interface TopBarProps {
  lang: string
  theme: 'dark' | 'light'
  onToggleTheme: () => void
  onToggleLang: () => void
  onToggleSidebar: () => void
}

export default function TopBar({ lang, theme, onToggleTheme, onToggleLang, onToggleSidebar }: TopBarProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setUserMenuOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header
      className="sticky top-0 z-30 h-14 flex items-center justify-between px-4 md:px-6 shrink-0"
      style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden interactive flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer border-none"
          style={{ color: 'var(--text-secondary)' }}
        >
          <Menu size={18} />
        </button>

        <div className="relative hidden sm:flex items-center">
          <Search size={15} className="absolute start-3 pointer-events-none" style={{ color: 'var(--text-placeholder)' }} />
          <input
            type="text"
            placeholder={lang === 'ar' ? 'بحث في الطلبات، المنتجات ...' : 'Search orders, products...'}
            className="ps-9 pe-16 py-2 rounded-lg text-[13px] border-none outline-none"
            style={{
              background: 'var(--bg-tertiary)',
              color: 'var(--text-primary)',
              width: 'max(240px, 28vw)',
              maxWidth: '360px',
            }}
          />
          <kbd
            className="absolute end-2.5 text-[10px] font-medium px-1.5 py-0.5 rounded hidden md:inline"
            style={{ color: 'var(--text-placeholder)', background: 'var(--bg-hover)', border: '1px solid var(--border)' }}
          >
            Ctrl+K
          </kbd>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-1">
        {/* Theme */}
        <button
          onClick={onToggleTheme}
          className="interactive flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer border-none"
          style={{ color: 'var(--text-muted)' }}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Language */}
        <div className="flex rounded-md overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
          <button
            onClick={() => lang !== 'en' && onToggleLang()}
            className="px-2.5 py-1.5 text-[11px] font-semibold cursor-pointer border-none transition-all min-w-[36px]"
            style={lang === 'en'
              ? { background: 'var(--bg-secondary)', color: 'var(--text-primary)', boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }
              : { background: 'transparent', color: 'var(--text-muted)' }
            }
          >EN</button>
          <button
            onClick={() => lang !== 'ar' && onToggleLang()}
            className="px-2.5 py-1.5 text-[11px] font-semibold cursor-pointer border-none transition-all min-w-[36px]"
            style={lang === 'ar'
              ? { background: 'var(--bg-secondary)', color: 'var(--text-primary)', boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }
              : { background: 'transparent', color: 'var(--text-muted)' }
            }
          >AR</button>
        </div>

        {/* Notifications */}
        <button
          className="interactive relative flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer border-none"
          style={{ color: 'var(--text-muted)' }}
        >
          <Bell size={16} />
          <span className="absolute top-1.5 end-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-danger)]"></span>
        </button>

        {/* Divider */}
        <div className="w-px h-6 mx-2" style={{ background: 'var(--border)' }} />

        {/* User Menu */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="interactive flex items-center gap-2 py-1 px-1.5 rounded-lg cursor-pointer border-none"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2BE3B7] to-[#0086FF] flex items-center justify-center text-white text-[11px] font-bold">
              A
            </div>
            <div className="hidden md:flex flex-col items-start">
              <span className="text-[13px] font-semibold leading-none" style={{ color: 'var(--text-primary)' }}>
                {lang === 'ar' ? 'أحمد' : 'Ahmed'}
              </span>
              <span className="text-[11px] leading-none mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {lang === 'ar' ? 'مدير' : 'Admin'}
              </span>
            </div>
            <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} className="hidden md:block" />
          </button>

          {/* Dropdown */}
          {userMenuOpen && (
            <div
              className="absolute top-full end-0 mt-1 w-48 rounded-lg py-1 shadow-lg z-50"
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
            >
              <button className="interactive w-full flex items-center gap-2.5 px-3 py-2 text-[13px] cursor-pointer border-none text-start"
                style={{ color: 'var(--text-secondary)' }}>
                <User size={15} /> {lang === 'ar' ? 'الملف الشخصي' : 'Profile'}
              </button>
              <button className="interactive w-full flex items-center gap-2.5 px-3 py-2 text-[13px] cursor-pointer border-none text-start"
                style={{ color: 'var(--text-secondary)' }}
                onClick={() => window.location.href = '/dashboard/settings'}>
                <Settings size={15} /> {lang === 'ar' ? 'الإعدادات' : 'Settings'}
              </button>
              <div className="my-1" style={{ borderTop: '1px solid var(--border)' }} />
              <button
                className="w-full flex items-center gap-2.5 px-3 py-2 text-[13px] cursor-pointer border-none text-start transition-colors"
                style={{ color: 'var(--color-danger)', background: 'transparent' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-danger-bg)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                onClick={() => { localStorage.removeItem('tagdev-auth'); window.location.href = '/login.html' }}
              >
                <LogOut size={15} /> {lang === 'ar' ? 'تسجيل الخروج' : 'Logout'}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
