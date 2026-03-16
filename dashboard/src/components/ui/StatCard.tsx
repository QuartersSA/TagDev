interface StatCardProps {
  label: string
  value: string
  change?: string
  changeType?: 'up' | 'down'
}

export default function StatCard({ label, value, change, changeType = 'up' }: StatCardProps) {
  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--card-shadow)',
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[13px] font-medium" style={{ color: 'var(--text-muted)' }}>
          {label}
        </span>
        {change && (
          <span
            className="text-[12px] font-semibold"
            style={{ color: changeType === 'up' ? 'var(--color-success)' : 'var(--color-danger)' }}
          >
            {changeType === 'up' ? '↑' : '↓'} {change}
          </span>
        )}
      </div>
      <div className="text-[28px] font-bold tracking-tight tabular-nums" style={{ color: 'var(--text-primary)' }}>
        {value}
      </div>
    </div>
  )
}
