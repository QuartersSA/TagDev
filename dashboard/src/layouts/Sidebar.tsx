import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, ShoppingCart, Package, FileText,
  Users, BarChart3, Settings, ChevronLeft, ChevronRight
} from 'lucide-react'

const navItems = [
  { path: '/dashboard', icon: LayoutDashboard, end: true, en: 'Overview', ar: 'نظرة عامة' },
  { path: '/dashboard/pos', icon: ShoppingCart, en: 'POS Terminal', ar: 'نقطة البيع' },
  { path: '/dashboard/products', icon: Package, en: 'Products', ar: 'المنتجات' },
  { path: '/dashboard/invoices', icon: FileText, en: 'Invoices', ar: 'الفواتير' },
  { path: '/dashboard/customers', icon: Users, en: 'Customers', ar: 'العملاء' },
  { path: '/dashboard/reports', icon: BarChart3, en: 'Reports', ar: 'التقارير' },
  { path: '/dashboard/settings', icon: Settings, en: 'Settings', ar: 'الإعدادات' },
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
      {mobileOpen && <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={onMobileClose} />}

      <aside
        className={`
          fixed top-0 h-screen z-50 flex flex-col transition-all duration-200
          ${isRtl ? 'right-0' : 'left-0'}
          ${mobileOpen ? 'translate-x-0' : `${isRtl ? 'translate-x-full' : '-translate-x-full'} lg:translate-x-0`}
          ${collapsed ? 'lg:w-16' : 'lg:w-60'} w-60
        `}
        style={{
          background: 'var(--bg-secondary)',
          borderInlineEnd: '1px solid var(--border)',
        }}
      >
        {/* Logo */}
        <div className={`h-14 flex items-center shrink-0 border-b ${collapsed ? 'justify-center px-2' : 'px-4'}`} style={{ borderColor: 'var(--border)' }}>
          {!collapsed ? (
            <a href="/" className="flex items-center gap-2.5 no-underline">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2BE3B7] to-[#0086FF] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-xs">T</span>
              </div>
              <span className="text-[15px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                Tag<span style={{ color: 'var(--color-brand)' }}>Dev</span>
              </span>
            </a>
          ) : (
            <a href="/" className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2BE3B7] to-[#0086FF] flex items-center justify-center no-underline">
              <span className="text-white font-bold text-xs">T</span>
            </a>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3 px-2.5 overflow-y-auto">
          <ul className="flex flex-col gap-0.5 list-none">
            {navItems.map(item => {
              const isActive = item.end
                ? location.pathname === item.path
                : location.pathname.startsWith(item.path)

              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.end}
                    onClick={onMobileClose}
                    className={`
                      interactive flex items-center gap-2.5 rounded-lg text-[13px] font-medium no-underline
                      ${collapsed ? 'justify-center p-2.5' : 'px-3 py-2'}
                    `}
                    style={{
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      background: isActive ? 'var(--bg-tertiary)' : 'transparent',
                      fontWeight: isActive ? 600 : 500,
                      position: 'relative',
                    }}
                  >
                    {isActive && !collapsed && (
                      <span
                        className="absolute top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-full"
                        style={{
                          background: 'var(--color-brand)',
                          insetInlineStart: 0,
                        }}
                      />
                    )}
                    <item.icon size={18} className="shrink-0" />
                    {!collapsed && <span>{lang === 'ar' ? item.ar : item.en}</span>}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Collapse */}
        <div className="p-2.5 border-t hidden lg:block" style={{ borderColor: 'var(--border)' }}>
          <button
            onClick={onToggle}
            className="interactive w-full flex items-center justify-center p-2 rounded-lg cursor-pointer border-none"
            style={{ color: 'var(--text-muted)', background: 'transparent' }}
          >
            {collapsed
              ? (isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />)
              : (isRtl ? <ChevronRight size={16} /> : <ChevronLeft size={16} />)
            }
          </button>
        </div>
      </aside>
    </>
  )
}
