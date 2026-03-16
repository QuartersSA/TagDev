import { ArrowUpRight, Download } from 'lucide-react'
import StatCard from '../../components/ui/StatCard'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar
} from 'recharts'

const salesData = [
  { month: 'Jan', sales: 42000, cost: 28000 },
  { month: 'Feb', sales: 38000, cost: 25000 },
  { month: 'Mar', sales: 55000, cost: 32000 },
  { month: 'Apr', sales: 47000, cost: 30000 },
  { month: 'May', sales: 62000, cost: 35000 },
  { month: 'Jun', sales: 58000, cost: 33000 },
  { month: 'Jul', sales: 71000, cost: 38000 },
]

const revenueData = [
  { day: 'Sat', revenue: 4200 },
  { day: 'Sun', revenue: 3800 },
  { day: 'Mon', revenue: 5100 },
  { day: 'Tue', revenue: 4600 },
  { day: 'Wed', revenue: 5800 },
  { day: 'Thu', revenue: 6200 },
  { day: 'Fri', revenue: 4900 },
]

const recentOrders = [
  { id: '#5581', customer: 'Ahmed Hassan', items: 3, amount: '213.50', status: 'paid', method: 'Card', time: '2 min ago' },
  { id: '#5580', customer: 'Sara Mohamed', items: 1, amount: '89.00', status: 'paid', method: 'Cash', time: '15 min ago' },
  { id: '#5579', customer: 'Khalid Ali', items: 5, amount: '342.75', status: 'pending', method: 'Mada', time: '32 min ago' },
  { id: '#5578', customer: 'Fatima Omar', items: 2, amount: '156.20', status: 'paid', method: 'Card', time: '1 hr ago' },
  { id: '#5577', customer: 'Youssef Nasser', items: 4, amount: '78.90', status: 'refunded', method: 'STC Pay', time: '2 hrs ago' },
]

const topProducts = [
  { name: 'Arabic Coffee', sold: 234, revenue: '11,700 SAR', pct: 90 },
  { name: 'Cappuccino', sold: 189, revenue: '9,450 SAR', pct: 72 },
  { name: 'Cheese Cake', sold: 156, revenue: '7,800 SAR', pct: 60 },
  { name: 'Fresh Juice', sold: 142, revenue: '4,260 SAR', pct: 45 },
  { name: 'Croissant', sold: 98, revenue: '2,940 SAR', pct: 32 },
]

const statusStyle: Record<string, { bg: string; color: string }> = {
  paid: { bg: 'var(--color-success-bg)', color: 'var(--color-success)' },
  pending: { bg: 'var(--color-warning-bg)', color: 'var(--color-warning)' },
  refunded: { bg: 'var(--color-danger-bg)', color: 'var(--color-danger)' },
}

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Dashboard
          </h1>
          <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
            Here's what's happening with your store today
          </p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium text-white cursor-pointer border-none"
          style={{ background: 'var(--color-brand)' }}
        >
          <Download size={14} /> Export
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Total Sales" value="372,100 SAR" change="7.28%" changeType="up" />
        <StatCard label="Total Orders" value="1,847" change="12.5%" changeType="up" />
        <StatCard label="Active Customers" value="542" change="3.1%" changeType="up" />
        <StatCard label="Net Revenue" value="48,250 SAR" change="2.4%" changeType="down" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Sales Chart */}
        <div className="xl:col-span-2 rounded-xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-[13px] font-medium" style={{ color: 'var(--text-secondary)' }}>Sales & Cost</h3>
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5 text-[12px]" style={{ color: 'var(--text-muted)' }}>
                <span className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></span> Sales
              </span>
              <span className="flex items-center gap-1.5 text-[12px]" style={{ color: 'var(--text-muted)' }}>
                <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-success)' }}></span> Cost
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="gS" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-brand)" stopOpacity={0.12} />
                  <stop offset="100%" stopColor="var(--color-brand)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gC" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-success)" stopOpacity={0.08} />
                  <stop offset="100%" stopColor="var(--color-success)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${v / 1000}k`} width={36} />
              <Tooltip contentStyle={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13 }} formatter={(value) => [`${Number(value).toLocaleString()} SAR`]} />
              <Area type="monotone" dataKey="sales" stroke="var(--color-brand)" strokeWidth={2} fill="url(#gS)" dot={false} />
              <Area type="monotone" dataKey="cost" stroke="var(--color-success)" strokeWidth={2} fill="url(#gC)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Revenue */}
        <div className="rounded-xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}>
          <h3 className="text-[13px] font-medium mb-5" style={{ color: 'var(--text-secondary)' }}>Weekly Revenue</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={revenueData} barCategoryGap="30%">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} width={32} />
              <Tooltip contentStyle={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13 }} formatter={(value) => [`${Number(value).toLocaleString()} SAR`]} />
              <Bar dataKey="revenue" fill="var(--color-brand)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        {/* Recent Orders */}
        <div className="xl:col-span-3 rounded-xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[13px] font-medium" style={{ color: 'var(--text-secondary)' }}>Recent Orders</h3>
            <a href="/dashboard/invoices" className="text-[13px] font-medium no-underline flex items-center gap-1 hover:underline" style={{ color: 'var(--color-brand)' }}>
              View All <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]" style={{ minWidth: 520 }}>
              <thead>
                <tr>
                  {['Order', 'Customer', 'Amount', 'Method', 'Status', 'Time'].map(h => (
                    <th key={h} className="text-start pb-3 text-[12px] font-medium uppercase tracking-wide" style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(o => (
                  <tr key={o.id} className="interactive" style={{ borderBottom: '1px solid var(--border)' }}>
                    <td className="py-3 font-semibold tabular-nums" style={{ color: 'var(--text-primary)' }}>{o.id}</td>
                    <td className="py-3" style={{ color: 'var(--text-secondary)' }}>{o.customer}</td>
                    <td className="py-3 font-medium tabular-nums" style={{ color: 'var(--text-primary)' }}>{o.amount} <span style={{ color: 'var(--text-muted)' }}>SAR</span></td>
                    <td className="py-3" style={{ color: 'var(--text-secondary)' }}>{o.method}</td>
                    <td className="py-3">
                      <span className="text-[12px] font-medium px-2.5 py-1 rounded-md capitalize" style={{ background: statusStyle[o.status].bg, color: statusStyle[o.status].color }}>
                        {o.status}
                      </span>
                    </td>
                    <td className="py-3 text-[12px]" style={{ color: 'var(--text-muted)' }}>{o.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="xl:col-span-2 rounded-xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}>
          <h3 className="text-[13px] font-medium mb-4" style={{ color: 'var(--text-secondary)' }}>Top Products</h3>
          <div className="space-y-5">
            {topProducts.map((p, i) => (
              <div key={p.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[13px] font-semibold tabular-nums" style={{ color: 'var(--text-muted)', minWidth: 18 }}>{i + 1}</span>
                    <span className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>{p.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>{p.sold} sold</span>
                    <span className="text-[13px] font-semibold tabular-nums" style={{ color: 'var(--text-primary)' }}>{p.revenue}</span>
                  </div>
                </div>
                <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${p.pct}%`, background: 'var(--color-brand)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
