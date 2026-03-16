import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, ShoppingCart, Package, FileText,
  Users, BarChart3, Settings, ChevronLeft, ChevronRight
} from 'lucide-react'

const navItems = [
  { key: 'overview', path: '/dashboard', icon: LayoutDashboard, end: true, en: 'Overview', ar: 'نظرة عامة' },
  { key: 'pos', path: '/dashboard/pos', icon: ShoppingCart, en: 'POS Terminal', ar: 'نقطة البيع' },
  { key: 'products', path: '/dashboard/products', icon: Package, en: 'Products', ar: 'المنتجات' },
  { key: 'invoices', path: '/dashboard/invoices', icon: FileText, en: 'Invoices', ar: 'الفواتير' },
  { key: 'customers', path: '/dashboard/customers', icon: Users, en: 'Customers', ar: 'العملاء' },
  { key: 'reports', path: '/dashboard/reports', icon: BarChart3, en: 'Reports', ar: 'التقارير' },
  { key: 'settings', path: '/dashboard/settings', icon: Settings, en: 'Settings', ar: 'الإعدادات' },
]

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  lang: string
  mobileOpen: boolean
  onMobileClose: () => void
}

export default function Sidebar({ collapsed, onToggle, lang, mobileOpen, onMobileClose }: SidebarProps) {
  const isRtl = lang === 'ar'
  const location = useLocation()

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onMobileClose} />
      )}

      <aside
        className={`
          fixed top-0 h-screen z-50 flex flex-col
          transition-all duration-300 ease-in-out
          ${isRtl ? 'right-0' : 'left-0'}
          ${mobileOpen ? 'translate-x-0' : `${isRtl ? 'translate-x-full' : '-translate-x-full'} lg:translate-x-0`}
          ${collapsed ? 'lg:w-[72px]' : 'lg:w-[260px]'}
          w-[260px]
        `}
        style={{
          background: 'var(--bg-secondary)',
          borderRight: isRtl ? 'none' : '1px solid var(--border)',
          borderLeft: isRtl ? '1px solid var(--border)' : 'none',
        }}
      >
        {/* Logo */}
        <div className={`h-16 flex items-center gap-3 border-b shrink-0 ${collapsed ? 'justify-center px-3' : 'px-5'}`} style={{ borderColor: 'var(--border)' }}>
          {!collapsed ? (
            <a href="/" className="flex items-center gap-2.5 no-underline">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2BE3B7] to-[#0086FF] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <div>
                <span className="text-[15px] font-bold" style={{ color: 'var(--text-primary)' }}>Tag</span>
                <span className="text-[15px] font-bold text-[#11ABE2]">Dev</span>
              </div>
            </a>
          ) : (
            <a href="/" className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2BE3B7] to-[#0086FF] flex items-center justify-center no-underline">
              <span className="text-white font-bold text-sm">T</span>
            </a>
          )}
        </div>

        {/* Section label */}
        {!collapsed && (
          <div className="px-5 pt-5 pb-2">
            <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
              {lang === 'ar' ? 'القائمة الرئيسية' : 'MAIN MENU'}
            </span>
          </div>
        )}

        {/* Nav Items */}
        <nav className="flex-1 py-2 px-3 overflow-y-auto">
          <ul className="flex flex-col gap-0.5 list-none">
            {navItems.map(item => {
              const isActive = item.end
                ? location.pathname === item.path
                : location.pathname.startsWith(item.path)

              return (
                <li key={item.key}>
                  <NavLink
                    to={item.path}
                    end={item.end}
                    onClick={onMobileClose}
                    className={`
                      flex items-center gap-3 rounded-xl text-[13px] font-medium
                      transition-all duration-200 no-underline relative
                      ${collapsed ? 'justify-center px-3 py-3' : 'px-4 py-2.5'}
                    `}
                    style={{
                      color: isActive ? '#fff' : 'var(--text-secondary)',
                      background: isActive ? 'linear-gradient(135deg, #11ABE2, #0086FF)' : 'transparent',
                      boxShadow: isActive ? '0 4px 15px rgba(17,171,226,0.3)' : 'none',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) e.currentTarget.style.background = 'var(--bg-tertiary)'
                    }}
                    onMouseLeave={e => {
                      if (!isActive) e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    <item.icon size={19} className="shrink-0" />
                    {!collapsed && <span>{lang === 'ar' ? item.ar : item.en}</span>}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Collapse Button (desktop only) */}
        <div className="p-3 border-t hidden lg:block" style={{ borderColor: 'var(--border)' }}>
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs transition-colors cursor-pointer border-none"
            style={{ color: 'var(--text-muted)', background: 'var(--bg-tertiary)' }}
          >
            {collapsed
              ? (isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />)
              : (isRtl ? <ChevronRight size={16} /> : <ChevronLeft size={16} />)
            }
            {!collapsed && (lang === 'ar' ? 'طي القائمة' : 'Collapse')}
          </button>
        </div>
      </aside>
    </>
  )
}
