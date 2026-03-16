import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, ShoppingCart, Package, FileText,
  Users, BarChart3, Settings, ChevronLeft, ChevronRight, Headphones
} from 'lucide-react'

const nav = [
  { to: '/dashboard', icon: LayoutDashboard, en: 'Overview', ar: 'نظرة عامة', end: true },
  { to: '/dashboard/pos', icon: ShoppingCart, en: 'POS', ar: 'نقطة البيع' },
  { to: '/dashboard/products', icon: Package, en: 'Products', ar: 'المنتجات' },
  { to: '/dashboard/invoices', icon: FileText, en: 'Invoices', ar: 'الفواتير' },
  { to: '/dashboard/customers', icon: Users, en: 'Customers', ar: 'العملاء' },
  { to: '/dashboard/reports', icon: BarChart3, en: 'Reports', ar: 'التقارير' },
  { to: '/dashboard/settings', icon: Settings, en: 'Settings', ar: 'الإعدادات' },
]

interface Props { collapsed: boolean; onToggle: () => void; lang: string; mobileOpen: boolean; onMobileClose: () => void }

export default function Sidebar({ collapsed, onToggle, lang, mobileOpen, onMobileClose }: Props) {
  const loc = useLocation()
  const isRtl = lang === 'ar'

  return (
    <>
      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm" onClick={onMobileClose} />}
      <aside className={`fixed top-0 h-screen z-50 flex flex-col transition-all duration-300 ${isRtl ? 'right-0' : 'left-0'} ${mobileOpen ? 'translate-x-0' : `${isRtl ? 'translate-x-full' : '-translate-x-full'} lg:translate-x-0`} ${collapsed ? 'lg:w-[72px]' : 'lg:w-[250px]'} w-[250px]`}
        style={{ background: '#0D1420' }}>

        {/* Logo */}
        <div className={`h-[60px] flex items-center shrink-0 ${collapsed ? 'justify-center' : 'px-5'}`}>
          {!collapsed ? (
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2BE3B7, #0086FF)' }}>
                <span className="text-white font-extrabold text-sm">T</span>
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-white text-[17px] font-bold tracking-tight">Tag</span>
                <span className="text-[17px] font-bold tracking-tight" style={{ color: '#11ABE2' }}>Dev</span>
              </div>
            </div>
          ) : (
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2BE3B7, #0086FF)' }}>
              <span className="text-white font-extrabold text-sm">T</span>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 pt-2 overflow-y-auto">
          {!collapsed && <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25 px-3 mb-2">{lang === 'ar' ? 'القائمة' : 'MENU'}</p>}
          <ul className="flex flex-col gap-1 list-none">
            {nav.map(item => {
              const active = item.end ? loc.pathname === item.to : loc.pathname.startsWith(item.to)
              return (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.end} onClick={onMobileClose}
                    className={`group flex items-center gap-3 rounded-xl text-[13px] font-medium no-underline transition-all duration-200 ${collapsed ? 'justify-center p-3' : 'px-3 py-2.5'}`}
                    style={{
                      background: active ? 'linear-gradient(135deg, rgba(43,227,183,0.12), rgba(0,134,255,0.12))' : 'transparent',
                      color: active ? '#2BE3B7' : 'rgba(255,255,255,0.45)',
                    }}
                    onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = active ? '#2BE3B7' : 'rgba(255,255,255,0.75)' }}
                    onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = active ? '#2BE3B7' : 'rgba(255,255,255,0.45)' }}
                  >
                    <item.icon size={19} className="shrink-0" />
                    {!collapsed && <span>{lang === 'ar' ? item.ar : item.en}</span>}
                    {active && !collapsed && <span className="ms-auto w-1.5 h-1.5 rounded-full bg-[#2BE3B7]" />}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Support card */}
        {!collapsed && (
          <div className="mx-3 mb-3 p-4 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(43,227,183,0.08), rgba(0,134,255,0.08))', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2" style={{ background: 'linear-gradient(135deg, #2BE3B7, #11ABE2)' }}>
              <Headphones size={16} className="text-white" />
            </div>
            <p className="text-white text-[12px] font-semibold mb-0.5">{lang === 'ar' ? 'تحتاج مساعدة؟' : 'Need Help?'}</p>
            <p className="text-white/30 text-[11px] leading-snug mb-2.5">{lang === 'ar' ? 'فريقنا متاح 24/7' : 'Our team is available 24/7'}</p>
            <button className="w-full py-1.5 rounded-lg text-[11px] font-semibold cursor-pointer border-none text-white" style={{ background: 'linear-gradient(135deg, #11ABE2, #0086FF)' }}>
              {lang === 'ar' ? 'تواصل معنا' : 'Contact Support'}
            </button>
          </div>
        )}

        {/* Collapse */}
        <div className="p-3 border-t border-white/5 hidden lg:block">
          <button onClick={onToggle} className="w-full flex items-center justify-center p-2 rounded-lg cursor-pointer border-none transition-colors text-white/25 hover:text-white/50 hover:bg-white/5" style={{ background: 'transparent' }}>
            {collapsed ? (isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />) : (isRtl ? <ChevronRight size={16} /> : <ChevronLeft size={16} />)}
          </button>
        </div>
      </aside>
    </>
  )
}
