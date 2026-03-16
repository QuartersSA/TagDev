import { type LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change?: string
  changeType?: 'up' | 'down'
  icon: LucideIcon
  color: string
}

export default function StatCard({ title, value, change, changeType = 'up', icon: Icon, color }: StatCardProps) {
  return (
    <div
      className="rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--card-shadow)',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ background: `${color}15` }}
        >
          <Icon size={20} style={{ color }} />
        </div>
        {change && (
          <span
            className="text-xs font-semibold px-2 py-1 rounded-full"
            style={{
              color: changeType === 'up' ? '#2BE3B7' : '#EF4444',
              background: changeType === 'up' ? 'rgba(43,227,183,0.1)' : 'rgba(239,68,68,0.1)',
            }}
          >
            {changeType === 'up' ? '↑' : '↓'} {change}
          </span>
        )}
      </div>
      <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
        {value}
      </div>
      <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
        {title}
      </div>
    </div>
  )
}
