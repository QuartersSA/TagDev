import { type LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change?: string
  changeType?: 'up' | 'down'
  icon: LucideIcon
  gradient: string
}

export default function StatCard({ title, value, change, changeType = 'up', icon: Icon, gradient }: StatCardProps) {
  return (
    <div
      className="relative rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
      }}
    >
      {/* Subtle gradient glow on hover */}
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, ${gradient.split(',')[0]}20, transparent 70%)` }}
      />

      <div className="relative flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: gradient }}
        >
          <Icon size={22} className="text-white" />
        </div>
        {change && (
          <div
            className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
            style={{
              color: changeType === 'up' ? '#2BE3B7' : '#EF4444',
              background: changeType === 'up' ? 'rgba(43,227,183,0.1)' : 'rgba(239,68,68,0.1)',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d={changeType === 'up' ? 'M5 2L8 5H2L5 2Z' : 'M5 8L2 5H8L5 8Z'}
                fill="currentColor"
              />
            </svg>
            {change}
          </div>
        )}
      </div>

      <div className="relative">
        <div className="text-[26px] font-extrabold tracking-tight mb-0.5" style={{ color: 'var(--text-primary)' }}>
          {value}
        </div>
        <div className="text-[13px] font-medium" style={{ color: 'var(--text-muted)' }}>
          {title}
        </div>
      </div>
    </div>
  )
}
