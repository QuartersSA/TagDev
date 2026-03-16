import { Search, Bell, Sun, Moon, Menu, ChevronDown, LogOut, User, Settings } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

interface Props { lang: string; theme: 'dark' | 'light'; onToggleTheme: () => void; onToggleLang: () => void; onToggleSidebar: () => void }

export default function TopBar({ lang, theme, onToggleTheme, onToggleLang, onToggleSidebar }: Props) {
  const [menu, setMenu] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setMenu(false) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  return (
    <header className="sticky top-0 z-30 h-[60px] flex items-center justify-between px-5 md:px-7 shrink-0" style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl cursor-pointer border-none" style={{ background: 'var(--bg-input)', color: 'var(--text-secondary)' }}>
          <Menu size={18} />
        </button>
        <div>
          <h2 className="text-[15px] font-semibold" style={{ color: 'var(--text-primary)' }}>
            {lang === 'ar' ? 'مرحباً، أحمد' : 'Hello, Ahmed'} <span className="hidden sm:inline">👋</span>
          </h2>
          <p className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
            {lang === 'ar' ? 'ما الجديد في متجرك اليوم' : "Here's what's happening in your store"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative hidden md:flex items-center">
          <Search size={15} className="absolute start-3 pointer-events-none" style={{ color: 'var(--text-muted)' }} />
          <input type="text" placeholder={lang === 'ar' ? 'بحث...' : 'Search...'} className="ps-9 pe-4 py-2 rounded-xl text-[13px] border-none outline-none w-52" style={{ background: 'var(--bg-input)', color: 'var(--text-primary)' }} />
        </div>

        {/* Theme */}
        <button onClick={onToggleTheme} className="flex items-center justify-center w-9 h-9 rounded-xl cursor-pointer border-none transition-colors hover:opacity-80" style={{ background: 'var(--bg-input)', color: 'var(--text-secondary)' }}>
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Lang */}
        <div className="flex rounded-xl overflow-hidden" style={{ background: 'var(--bg-input)' }}>
          <button onClick={() => lang !== 'en' && onToggleLang()} className={`px-3 py-2 text-[11px] font-bold cursor-pointer border-none transition-all`}
            style={lang === 'en' ? { background: 'linear-gradient(135deg, #11ABE2, #0086FF)', color: '#fff' } : { background: 'transparent', color: 'var(--text-muted)' }}>EN</button>
          <button onClick={() => lang !== 'ar' && onToggleLang()} className={`px-3 py-2 text-[11px] font-bold cursor-pointer border-none transition-all`}
            style={lang === 'ar' ? { background: 'linear-gradient(135deg, #11ABE2, #0086FF)', color: '#fff' } : { background: 'transparent', color: 'var(--text-muted)' }}>AR</button>
        </div>

        {/* Notifications */}
        <button className="relative flex items-center justify-center w-9 h-9 rounded-xl cursor-pointer border-none transition-colors hover:opacity-80" style={{ background: 'var(--bg-input)', color: 'var(--text-secondary)' }}>
          <Bell size={16} />
          <span className="absolute top-1.5 end-1.5 w-2 h-2 rounded-full bg-[#EF4444] ring-2" style={{ ringColor: 'var(--bg-card)' }} />
        </button>

        {/* User */}
        <div className="relative" ref={ref}>
          <button onClick={() => setMenu(!menu)} className="flex items-center gap-2 py-1 px-1 rounded-xl cursor-pointer border-none hover:opacity-90 ms-1" style={{ background: 'transparent' }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[12px] font-bold" style={{ background: 'linear-gradient(135deg, #2BE3B7, #0086FF)' }}>A</div>
            <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} className="hidden md:block" />
          </button>

          {menu && (
            <div className="absolute top-full end-0 mt-2 w-52 rounded-xl py-1.5 shadow-xl z-50" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <div className="px-4 py-2.5 border-b" style={{ borderColor: 'var(--border)' }}>
                <p className="text-[13px] font-semibold" style={{ color: 'var(--text-primary)' }}>{lang === 'ar' ? 'أحمد الراشد' : 'Ahmed Al-Rashid'}</p>
                <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>ahmed@tagdev.com</p>
              </div>
              {[
                { icon: User, label: lang === 'ar' ? 'الملف الشخصي' : 'Profile', action: () => {} },
                { icon: Settings, label: lang === 'ar' ? 'الإعدادات' : 'Settings', action: () => window.location.href = '/dashboard/settings' },
              ].map(item => (
                <button key={item.label} onClick={() => { item.action(); setMenu(false) }} className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] cursor-pointer border-none text-start transition-colors hover:bg-[var(--bg-hover)]" style={{ color: 'var(--text-secondary)', background: 'transparent' }}>
                  <item.icon size={15} /> {item.label}
                </button>
              ))}
              <div className="my-1.5 mx-3" style={{ borderTop: '1px solid var(--border)' }} />
              <button onClick={() => { localStorage.removeItem('tagdev-auth'); window.location.href = '/login.html' }}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] cursor-pointer border-none text-start transition-colors hover:bg-[var(--red-bg)]" style={{ color: 'var(--red)', background: 'transparent' }}>
                <LogOut size={15} /> {lang === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
