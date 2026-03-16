import { DollarSign, ShoppingCart, Users, TrendingUp, ArrowUpRight, Package } from 'lucide-react'
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
  { name: 'Arabic Coffee', sold: 234, revenue: '11,700', progress: 90 },
  { name: 'Cappuccino', sold: 189, revenue: '9,450', progress: 72 },
  { name: 'Cheese Cake', sold: 156, revenue: '7,800', progress: 60 },
  { name: 'Fresh Juice', sold: 142, revenue: '4,260', progress: 45 },
  { name: 'Croissant', sold: 98, revenue: '2,940', progress: 32 },
]

const statusColors: Record<string, { bg: string, text: string }> = {
  paid: { bg: 'rgba(43,227,183,0.1)', text: '#2BE3B7' },
  pending: { bg: 'rgba(245,158,11,0.1)', text: '#F59E0B' },
  refunded: { bg: 'rgba(239,68,68,0.1)', text: '#EF4444' },
}

export default function Overview() {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Dashboard</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
            Here's what's happening with your store today
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer border-none"
            style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
          >
            Today
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white cursor-pointer border-none"
            style={{ background: 'linear-gradient(135deg, #11ABE2, #0086FF)' }}
          >
            <Package size={15} /> Export
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard title="Total Sales" value="372,100 SAR" change="7.28%" changeType="up" icon={DollarSign} gradient="linear-gradient(135deg, #2BE3B7, #11ABE2)" />
        <StatCard title="Total Orders" value="1,847" change="12.5%" changeType="up" icon={ShoppingCart} gradient="linear-gradient(135deg, #11ABE2, #0086FF)" />
        <StatCard title="Active Customers" value="542" change="3.1%" changeType="up" icon={Users} gradient="linear-gradient(135deg, #0086FF, #6366F1)" />
        <StatCard title="Net Revenue" value="48,250 SAR" change="2.4%" changeType="down" icon={TrendingUp} gradient="linear-gradient(135deg, #F59E0B, #EF4444)" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Sales Chart */}
        <div className="xl:col-span-2 rounded-2xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>Sales Overview</h3>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>Monthly sales and cost comparison</p>
            </div>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                <span className="w-2.5 h-2.5 rounded-full bg-[#11ABE2]"></span> Sales
              </span>
              <span className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                <span className="w-2.5 h-2.5 rounded-full bg-[#2BE3B7]"></span> Cost
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="gSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#11ABE2" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#11ABE2" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gCost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2BE3B7" stopOpacity={0.1} />
                  <stop offset="100%" stopColor="#2BE3B7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${v/1000}k`} width={40} />
              <Tooltip
                contentStyle={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--text-primary)', fontSize: 13 }}
                formatter={(value) => [`${Number(value).toLocaleString()} SAR`]}
              />
              <Area type="monotone" dataKey="sales" stroke="#11ABE2" strokeWidth={2.5} fill="url(#gSales)" dot={false} />
              <Area type="monotone" dataKey="cost" stroke="#2BE3B7" strokeWidth={2.5} fill="url(#gCost)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Revenue */}
        <div className="rounded-2xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <h3 className="text-base font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Weekly Revenue</h3>
          <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>This week's daily revenue</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={revenueData} barCategoryGap="25%">
              <defs>
                <linearGradient id="gBar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#11ABE2" />
                  <stop offset="100%" stopColor="#0086FF" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} width={35} />
              <Tooltip
                contentStyle={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--text-primary)', fontSize: 13 }}
                formatter={(value) => [`${Number(value).toLocaleString()} SAR`]}
              />
              <Bar dataKey="revenue" fill="url(#gBar)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        {/* Recent Orders */}
        <div className="xl:col-span-3 rounded-2xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>Recent Orders</h3>
            <a href="/dashboard/invoices" className="text-xs font-semibold text-[#11ABE2] hover:underline flex items-center gap-1 no-underline">
              View All <ArrowUpRight size={12} />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ minWidth: 500 }}>
              <thead>
                <tr>
                  {['Order', 'Customer', 'Items', 'Amount', 'Method', 'Status', 'Time'].map(h => (
                    <th key={h} className="text-left pb-3 text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(o => (
                  <tr key={o.id} className="border-t" style={{ borderColor: 'var(--border)' }}>
                    <td className="py-3 font-bold text-[13px]" style={{ color: 'var(--text-primary)' }}>{o.id}</td>
                    <td className="py-3 text-[13px]" style={{ color: 'var(--text-secondary)' }}>{o.customer}</td>
                    <td className="py-3 text-[13px]" style={{ color: 'var(--text-muted)' }}>{o.items}</td>
                    <td className="py-3 font-semibold text-[13px]" style={{ color: 'var(--text-primary)' }}>{o.amount} <span style={{ color: 'var(--text-muted)' }}>SAR</span></td>
                    <td className="py-3 text-[13px]" style={{ color: 'var(--text-secondary)' }}>{o.method}</td>
                    <td className="py-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full capitalize"
                        style={{ background: statusColors[o.status].bg, color: statusColors[o.status].text }}>
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
        <div className="xl:col-span-2 rounded-2xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <h3 className="text-base font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Top Products</h3>
          <div className="space-y-4">
            {topProducts.map((p, i) => (
              <div key={p.name} className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-extrabold text-white shrink-0"
                  style={{ background: ['linear-gradient(135deg,#2BE3B7,#11ABE2)', 'linear-gradient(135deg,#11ABE2,#0086FF)', 'linear-gradient(135deg,#0086FF,#6366F1)', 'linear-gradient(135deg,#F59E0B,#EF4444)', 'linear-gradient(135deg,#8B5CF6,#EC4899)'][i] }}
                >
                  #{i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[13px] font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{p.name}</span>
                    <span className="text-[12px] font-bold shrink-0 ml-2" style={{ color: 'var(--text-primary)' }}>{p.revenue} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>SAR</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
                      <div className="h-full rounded-full" style={{
                        width: `${p.progress}%`,
                        background: ['#2BE3B7', '#11ABE2', '#0086FF', '#F59E0B', '#8B5CF6'][i],
                      }}></div>
                    </div>
                    <span className="text-[11px] shrink-0" style={{ color: 'var(--text-muted)' }}>{p.sold} sold</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
