import { DollarSign, ShoppingCart, Users, TrendingUp, ArrowUpRight } from 'lucide-react'
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
  { id: '#5581', customer: 'Ahmed Hassan', amount: '213.50 SAR', status: 'paid', time: '2 min ago' },
  { id: '#5580', customer: 'Sara Mohamed', amount: '89.00 SAR', status: 'paid', time: '15 min ago' },
  { id: '#5579', customer: 'Khalid Ali', amount: '342.75 SAR', status: 'pending', time: '32 min ago' },
  { id: '#5578', customer: 'Fatima Omar', amount: '156.20 SAR', status: 'paid', time: '1 hr ago' },
  { id: '#5577', customer: 'Youssef Nasser', amount: '78.90 SAR', status: 'refunded', time: '2 hrs ago' },
]

const topProducts = [
  { name: 'Arabic Coffee', sold: 234, revenue: '11,700 SAR' },
  { name: 'Cappuccino', sold: 189, revenue: '9,450 SAR' },
  { name: 'Cheese Cake', sold: 156, revenue: '7,800 SAR' },
  { name: 'Fresh Juice', sold: 142, revenue: '4,260 SAR' },
]

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Dashboard
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
          Welcome back! Here's what's happening with your store today.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Sales" value="372,100 SAR" change="7.28%" changeType="up" icon={DollarSign} color="#2BE3B7" />
        <StatCard title="Total Orders" value="1,847" change="12.5%" changeType="up" icon={ShoppingCart} color="#11ABE2" />
        <StatCard title="Customers" value="542" change="3.1%" changeType="up" icon={Users} color="#0086FF" />
        <StatCard title="Revenue" value="48,250 SAR" change="2.4%" changeType="down" icon={TrendingUp} color="#F59E0B" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Sales & Cost Chart */}
        <div
          className="lg:col-span-2 rounded-2xl p-5"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>Sales & Cost</h3>
            <span className="text-xs px-3 py-1 rounded-lg" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>Last 7 months</span>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#11ABE2" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#11ABE2" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2BE3B7" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#2BE3B7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={v => `${v/1000}k`} />
              <Tooltip
                contentStyle={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--text-primary)' }}
                formatter={(value) => [`${Number(value).toLocaleString()} SAR`]}
              />
              <Area type="monotone" dataKey="sales" stroke="#11ABE2" strokeWidth={2.5} fill="url(#colorSales)" />
              <Area type="monotone" dataKey="cost" stroke="#2BE3B7" strokeWidth={2.5} fill="url(#colorCost)" />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex gap-6 mt-2 justify-center">
            <span className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
              <span className="w-3 h-1 rounded-full bg-[#11ABE2]"></span> Sales
            </span>
            <span className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
              <span className="w-3 h-1 rounded-full bg-[#2BE3B7]"></span> Cost
            </span>
          </div>
        </div>

        {/* Weekly Revenue */}
        <div
          className="rounded-2xl p-5"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}
        >
          <h3 className="font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Weekly Revenue</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="day" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--text-primary)' }}
                formatter={(value) => [`${Number(value).toLocaleString()} SAR`]}
              />
              <Bar dataKey="revenue" fill="url(#barGrad)" radius={[6, 6, 0, 0]} />
              <defs>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#11ABE2" />
                  <stop offset="100%" stopColor="#0086FF" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Orders */}
        <div
          className="rounded-2xl p-5"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>Recent Orders</h3>
            <a href="/dashboard/invoices" className="text-xs font-medium text-[#11ABE2] hover:underline flex items-center gap-1">
              View All <ArrowUpRight size={12} />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ color: 'var(--text-muted)' }}>
                  <th className="text-left pb-3 font-medium">Order</th>
                  <th className="text-left pb-3 font-medium">Customer</th>
                  <th className="text-left pb-3 font-medium">Amount</th>
                  <th className="text-left pb-3 font-medium">Status</th>
                  <th className="text-right pb-3 font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id} className="border-t" style={{ borderColor: 'var(--border)' }}>
                    <td className="py-3 font-semibold" style={{ color: 'var(--text-primary)' }}>{order.id}</td>
                    <td className="py-3" style={{ color: 'var(--text-secondary)' }}>{order.customer}</td>
                    <td className="py-3 font-medium" style={{ color: 'var(--text-primary)' }}>{order.amount}</td>
                    <td className="py-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        order.status === 'paid' ? 'bg-[#2BE3B7]/10 text-[#2BE3B7]' :
                        order.status === 'pending' ? 'bg-[#F59E0B]/10 text-[#F59E0B]' :
                        'bg-[#EF4444]/10 text-[#EF4444]'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 text-right text-xs" style={{ color: 'var(--text-muted)' }}>{order.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div
          className="rounded-2xl p-5"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}
        >
          <h3 className="font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Top Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, i) => (
              <div key={product.name} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: ['#2BE3B7', '#11ABE2', '#0086FF', '#F59E0B'][i] }}
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{product.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{product.sold} sold</div>
                </div>
                <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{product.revenue}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
