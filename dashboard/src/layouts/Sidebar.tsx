import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, ShoppingCart, Package, FileText,
  Users, BarChart3, Settings, ChevronLeft, ChevronRight
} from 'lucide-react'

const navItems = [
  { key: 'sidebar_overview', path: '/dashboard', icon: LayoutDashboard, end: true },
  { key: 'sidebar_pos', path: '/dashboard/pos', icon: ShoppingCart },
  { key: 'sidebar_products', path: '/dashboard/products', icon: Package },
  { key: 'sidebar_invoices', path: '/dashboard/invoices', icon: FileText },
  { key: 'sidebar_customers', path: '/dashboard/customers', icon: Users },
  { key: 'sidebar_reports', path: '/dashboard/reports', icon: BarChart3 },
  { key: 'sidebar_settings', path: '/dashboard/settings', icon: Settings },
]

const labels: Record<string, Record<string, string>> = {
  en: {
    sidebar_overview: 'Overview',
    sidebar_pos: 'POS Terminal',
    sidebar_products: 'Products',
    sidebar_invoices: 'Invoices',
    sidebar_customers: 'Customers',
    sidebar_reports: 'Reports',
    sidebar_settings: 'Settings',
  },
  ar: {
    sidebar_overview: 'نظرة عامة',
    sidebar_pos: 'نقطة البيع',
    sidebar_products: 'المنتجات',
    sidebar_invoices: 'الفواتير',
    sidebar_customers: 'العملاء',
    sidebar_reports: 'التقارير',
    sidebar_settings: 'الإعدادات',
  },
}

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  lang: string
}

export default function Sidebar({ collapsed, onToggle, lang }: SidebarProps) {
  const t = labels[lang] || labels.en
  const isRtl = lang === 'ar'

  return (
    <aside
      className={`fixed top-0 ${isRtl ? 'right-0' : 'left-0'} h-screen z-40 flex flex-col transition-all duration-300 ${collapsed ? 'w-[72px]' : 'w-[260px]'}`}
      style={{ background: 'var(--bg-sidebar)', borderRight: isRtl ? 'none' : '1px solid var(--border)', borderLeft: isRtl ? '1px solid var(--border)' : 'none' }}
    >
      {/* Logo */}
      <div className={`h-16 flex items-center ${collapsed ? 'justify-center px-2' : 'px-5'} border-b`} style={{ borderColor: 'var(--border)' }}>
        {!collapsed ? (
          <a href="/" className="flex items-center gap-2">
            <img src="/dashboard/logo-white.svg" alt="TagDev" className="h-8 dark:brightness-100 brightness-0" />
          </a>
        ) : (
          <a href="/" className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#2BE3B7] to-[#0086FF]">
            <span className="text-white font-bold text-sm">T</span>
          </a>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto">
        <ul className="flex flex-col gap-1">
          {navItems.map(item => (
            <li key={item.key}>
              <NavLink
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group
                  ${isActive
                    ? 'bg-gradient-to-r from-[#11ABE2]/15 to-[#0086FF]/10 text-[#11ABE2]'
                    : 'hover:bg-[var(--bg-tertiary)]'
                  }
                  ${collapsed ? 'justify-center' : ''}`
                }
                style={({ isActive }) => ({
                  color: isActive ? '#11ABE2' : 'var(--text-secondary)',
                })}
              >
                <item.icon size={20} className="flex-shrink-0" />
                {!collapsed && <span>{t[item.key]}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Collapse Toggle */}
      <div className="p-3 border-t" style={{ borderColor: 'var(--border)' }}>
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm transition-colors hover:bg-[var(--bg-tertiary)]"
          style={{ color: 'var(--text-muted)' }}
        >
          {collapsed
            ? (isRtl ? <ChevronLeft size={18} /> : <ChevronRight size={18} />)
            : (isRtl ? <ChevronRight size={18} /> : <ChevronLeft size={18} />)
          }
          {!collapsed && (lang === 'ar' ? 'طي القائمة' : 'Collapse')}
        </button>
      </div>
    </aside>
  )
}
