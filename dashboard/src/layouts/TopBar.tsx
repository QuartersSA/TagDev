import { Search, Bell, Sun, Moon, Menu, LogOut } from 'lucide-react'

interface TopBarProps {
  lang: string
  theme: 'dark' | 'light'
  onToggleTheme: () => void
  onToggleLang: () => void
  onToggleSidebar: () => void
}

export default function TopBar({ lang, theme, onToggleTheme, onToggleLang, onToggleSidebar }: TopBarProps) {
  return (
    <header
      className="sticky top-0 z-30 h-16 flex items-center justify-between px-4 md:px-6 shrink-0"
      style={{
        background: theme === 'dark' ? 'rgba(13,20,32,0.8)' : 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl transition-colors cursor-pointer border-none"
          style={{ color: 'var(--text-secondary)', background: 'var(--bg-tertiary)' }}
        >
          <Menu size={18} />
        </button>

        <div className="relative hidden sm:flex items-center">
          <Search size={15} className="absolute left-3 pointer-events-none" style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder={lang === 'ar' ? 'ابحث هنا ...' : 'Search...'}
            className="pl-9 pr-4 py-2 rounded-xl text-sm w-56 border-none outline-none"
            style={{
              background: 'var(--bg-tertiary)',
              color: 'var(--text-primary)',
            }}
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-1.5">
        {/* Theme */}
        <button
          onClick={onToggleTheme}
          className="flex items-center justify-center w-9 h-9 rounded-xl transition-colors cursor-pointer border-none"
          style={{ color: 'var(--text-secondary)', background: 'transparent' }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-tertiary)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        {/* Language */}
        <div className="flex rounded-lg overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
          <button
            onClick={() => lang !== 'en' && onToggleLang()}
            className={`px-2.5 py-1.5 text-[11px] font-bold transition-all cursor-pointer border-none ${
              lang === 'en' ? 'bg-gradient-to-r from-[#11ABE2] to-[#0086FF] text-white' : ''
            }`}
            style={lang !== 'en' ? { color: 'var(--text-muted)', background: 'transparent' } : {}}
          >
            EN
          </button>
          <button
            onClick={() => lang !== 'ar' && onToggleLang()}
            className={`px-2.5 py-1.5 text-[11px] font-bold transition-all cursor-pointer border-none ${
              lang === 'ar' ? 'bg-gradient-to-r from-[#11ABE2] to-[#0086FF] text-white' : ''
            }`}
            style={lang !== 'ar' ? { color: 'var(--text-muted)', background: 'transparent' } : {}}
          >
            AR
          </button>
        </div>

        {/* Notifications */}
        <button
          className="relative flex items-center justify-center w-9 h-9 rounded-xl transition-colors cursor-pointer border-none"
          style={{ color: 'var(--text-secondary)', background: 'transparent' }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-tertiary)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <Bell size={17} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#EF4444] ring-2" style={{ ringColor: theme === 'dark' ? '#0D1420' : '#fff' }}></span>
        </button>

        {/* Divider */}
        <div className="w-px h-8 mx-1.5" style={{ background: 'var(--border)' }}></div>

        {/* User */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2BE3B7] to-[#0086FF] flex items-center justify-center text-white text-xs font-bold ring-2 ring-transparent group-hover:ring-[#11ABE2]/30 transition-all">
            A
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-[13px] font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
              {lang === 'ar' ? 'أحمد' : 'Ahmed'}
            </span>
            <span className="text-[11px] leading-tight" style={{ color: 'var(--text-muted)' }}>
              {lang === 'ar' ? 'مدير' : 'Admin'}
            </span>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={() => { localStorage.removeItem('tagdev-auth'); window.location.href = '/login.html' }}
          className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors cursor-pointer border-none ml-1"
          style={{ color: 'var(--text-muted)', background: 'transparent' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.1)'; e.currentTarget.style.color = '#EF4444' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)' }}
          title={lang === 'ar' ? 'تسجيل الخروج' : 'Logout'}
        >
          <LogOut size={16} />
        </button>
      </div>
    </header>
  )
}
