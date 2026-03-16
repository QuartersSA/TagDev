import { Search, Bell, Sun, Moon, Menu } from 'lucide-react'

interface TopBarProps {
  lang: string
  theme: 'dark' | 'light'
  onToggleTheme: () => void
  onToggleLang: () => void
  onToggleSidebar: () => void
  sidebarCollapsed: boolean
}

export default function TopBar({ lang, theme, onToggleTheme, onToggleLang, onToggleSidebar }: TopBarProps) {

  return (
    <header
      className="sticky top-0 z-30 h-16 flex items-center justify-between px-6 backdrop-blur-xl"
      style={{
        background: theme === 'dark' ? 'rgba(13,20,32,0.85)' : 'rgba(255,255,255,0.85)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Left: Menu + Search */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors hover:bg-[var(--bg-tertiary)]"
          style={{ color: 'var(--text-secondary)' }}
        >
          <Menu size={20} />
        </button>

        <div className="relative hidden sm:flex items-center">
          <Search size={16} className="absolute left-3" style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder={lang === 'ar' ? 'ابحث هنا ...' : 'Search here ...'}
            className="pl-10 pr-4 py-2 rounded-xl text-sm w-64 border transition-colors focus:border-[#11ABE2]"
            style={{
              background: 'var(--bg-tertiary)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
            }}
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <button
          onClick={onToggleTheme}
          className="flex items-center justify-center w-9 h-9 rounded-xl transition-colors hover:bg-[var(--bg-tertiary)]"
          style={{ color: 'var(--text-secondary)' }}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Language Toggle */}
        <div className="flex rounded-lg overflow-hidden border" style={{ borderColor: 'var(--border)', background: 'var(--bg-tertiary)' }}>
          <button
            onClick={() => lang !== 'en' && onToggleLang()}
            className={`px-3 py-1.5 text-xs font-semibold transition-all ${lang === 'en' ? 'bg-gradient-to-r from-[#11ABE2] to-[#0086FF] text-white' : ''}`}
            style={lang !== 'en' ? { color: 'var(--text-muted)' } : {}}
          >
            EN
          </button>
          <button
            onClick={() => lang !== 'ar' && onToggleLang()}
            className={`px-3 py-1.5 text-xs font-semibold transition-all ${lang === 'ar' ? 'bg-gradient-to-r from-[#11ABE2] to-[#0086FF] text-white' : ''}`}
            style={lang !== 'ar' ? { color: 'var(--text-muted)' } : {}}
          >
            AR
          </button>
        </div>

        {/* Notifications */}
        <button
          className="relative flex items-center justify-center w-9 h-9 rounded-xl transition-colors hover:bg-[var(--bg-tertiary)]"
          style={{ color: 'var(--text-secondary)' }}
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#2BE3B7]"></span>
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-3 ml-2 pl-3 border-l" style={{ borderColor: 'var(--border)' }}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2BE3B7] to-[#0086FF] flex items-center justify-center text-white text-xs font-bold">
            A
          </div>
          <div className="hidden md:block text-left">
            <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Ahmed</div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Admin</div>
          </div>
        </div>
      </div>
    </header>
  )
}
