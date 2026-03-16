import { DollarSign, ShoppingBag, Users, TrendingUp, ArrowUpRight, ArrowDownRight, MoreHorizontal } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid, PieChart, Pie, Cell } from 'recharts'

/* ─── Mock Data ─── */
const salesData = [
  { m: 'Jan', sales: 42, cost: 28 }, { m: 'Feb', sales: 38, cost: 25 },
  { m: 'Mar', sales: 55, cost: 32 }, { m: 'Apr', sales: 47, cost: 30 },
  { m: 'May', sales: 62, cost: 35 }, { m: 'Jun', sales: 58, cost: 33 },
  { m: 'Jul', sales: 71, cost: 38 },
]

const weeklyData = [
  { d: 'Sat', v: 4200 }, { d: 'Sun', v: 3800 }, { d: 'Mon', v: 5100 },
  { d: 'Tue', v: 4600 }, { d: 'Wed', v: 5800 }, { d: 'Thu', v: 6200 }, { d: 'Fri', v: 4900 },
]

const pieData = [
  { name: 'Cash', value: 35, color: '#2BE3B7' },
  { name: 'Card', value: 30, color: '#11ABE2' },
  { name: 'Mada', value: 20, color: '#0086FF' },
  { name: 'STC Pay', value: 15, color: '#7C3AED' },
]

const orders = [
  { id: '#5581', customer: 'Ahmed Hassan', amount: '213.50', status: 'paid', time: '2m ago' },
  { id: '#5580', customer: 'Sara Mohamed', amount: '89.00', status: 'paid', time: '15m ago' },
  { id: '#5579', customer: 'Khalid Ali', amount: '342.75', status: 'pending', time: '32m ago' },
  { id: '#5578', customer: 'Fatima Omar', amount: '156.20', status: 'paid', time: '1h ago' },
  { id: '#5577', customer: 'Youssef Nasser', amount: '78.90', status: 'refunded', time: '2h ago' },
]

const topProducts = [
  { name: 'Arabic Coffee', qty: 234, amount: '11,700' },
  { name: 'Cappuccino', qty: 189, amount: '9,450' },
  { name: 'Cheese Cake', qty: 156, amount: '7,800' },
  { name: 'Fresh Juice', qty: 142, amount: '4,260' },
]

const stats = [
  { label: 'Total Sales', value: '372,100', unit: 'SAR', change: '+7.28%', up: true, icon: DollarSign, gradient: 'linear-gradient(135deg, #2BE3B7, #11ABE2)', bg: 'rgba(43,227,183,0.08)' },
  { label: 'Orders', value: '1,847', unit: '', change: '+12.5%', up: true, icon: ShoppingBag, gradient: 'linear-gradient(135deg, #11ABE2, #0086FF)', bg: 'rgba(17,171,226,0.08)' },
  { label: 'Customers', value: '542', unit: '', change: '+3.1%', up: true, icon: Users, gradient: 'linear-gradient(135deg, #0086FF, #7C3AED)', bg: 'rgba(0,134,255,0.08)' },
  { label: 'Revenue', value: '48,250', unit: 'SAR', change: '-2.4%', up: false, icon: TrendingUp, gradient: 'linear-gradient(135deg, #7C3AED, #EC4899)', bg: 'rgba(124,58,237,0.08)' },
]

const statusMap: Record<string, { label: string; bg: string; color: string }> = {
  paid: { label: 'Paid', bg: 'var(--green-bg)', color: 'var(--green)' },
  pending: { label: 'Pending', bg: 'var(--amber-bg)', color: 'var(--amber)' },
  refunded: { label: 'Refunded', bg: 'var(--red-bg)', color: 'var(--red)' },
}

/* ─── Card wrapper ─── */
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl p-5 ${className}`} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}>
    {children}
  </div>
)

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[13px] font-semibold mb-4" style={{ color: 'var(--text-secondary)' }}>{children}</h3>
)

export default function Overview() {
  return (
    <div className="space-y-6 max-w-[1400px]">

      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="rounded-2xl p-5 relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}>
            {/* Colored top bar */}
            <div className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl" style={{ background: s.gradient }} />

            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: s.bg }}>
                <s.icon size={20} style={{ color: s.gradient.includes('#2BE3B7') ? '#2BE3B7' : s.gradient.includes('#11ABE2') ? '#11ABE2' : s.gradient.includes('#0086FF') ? '#0086FF' : '#7C3AED' }} />
              </div>
              <div className={`flex items-center gap-1 text-[12px] font-semibold ${s.up ? 'text-[var(--green)]' : 'text-[var(--red)]'}`} style={{ color: s.up ? 'var(--green)' : 'var(--red)' }}>
                {s.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {s.change}
              </div>
            </div>
            <div className="text-[26px] font-bold tabular-nums tracking-tight" style={{ color: 'var(--text-primary)' }}>
              {s.value} {s.unit && <span className="text-[13px] font-normal" style={{ color: 'var(--text-muted)' }}>{s.unit}</span>}
            </div>
            <div className="text-[12px] font-medium mt-1" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Charts Row ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Sales Chart */}
        <Card className="xl:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <CardTitle>Sales Overview</CardTitle>
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5 text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#11ABE2' }} /> Sales
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#2BE3B7' }} /> Cost
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="gs" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#11ABE2" stopOpacity={0.2} /><stop offset="100%" stopColor="#11ABE2" stopOpacity={0} /></linearGradient>
                <linearGradient id="gc" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2BE3B7" stopOpacity={0.12} /><stop offset="100%" stopColor="#2BE3B7" stopOpacity={0} /></linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="m" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} width={30} tickFormatter={v => `${v}k`} />
              <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, fontSize: 12 }} formatter={(v) => [`${Number(v)}k SAR`]} />
              <Area type="monotone" dataKey="sales" stroke="#11ABE2" strokeWidth={2.5} fill="url(#gs)" dot={false} />
              <Area type="monotone" dataKey="cost" stroke="#2BE3B7" strokeWidth={2.5} fill="url(#gc)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Revenue Bars */}
        <Card>
          <CardTitle>Weekly Revenue</CardTitle>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={weeklyData} barCategoryGap="28%">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="d" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} width={30} />
              <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, fontSize: 12 }} formatter={(v) => [`${Number(v).toLocaleString()} SAR`]} />
              <defs><linearGradient id="gb" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#11ABE2" /><stop offset="100%" stopColor="#0086FF" /></linearGradient></defs>
              <Bar dataKey="v" fill="url(#gb)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* ── Bottom Row ── */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        {/* Recent Orders */}
        <Card className="xl:col-span-5">
          <div className="flex items-center justify-between mb-4">
            <CardTitle>Recent Orders</CardTitle>
            <a href="/dashboard/invoices" className="text-[12px] font-semibold no-underline hover:underline" style={{ color: '#11ABE2' }}>View All →</a>
          </div>
          <div className="space-y-0">
            {orders.map(o => (
              <div key={o.id} className="flex items-center justify-between py-3 transition-colors" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[11px] font-bold" style={{ background: 'var(--bg-input)', color: 'var(--text-secondary)' }}>
                    {o.id.slice(1, 3)}
                  </div>
                  <div>
                    <p className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>{o.customer}</p>
                    <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{o.id} · {o.time}</p>
                  </div>
                </div>
                <div className="text-end">
                  <p className="text-[13px] font-semibold tabular-nums" style={{ color: 'var(--text-primary)' }}>{o.amount} <span className="text-[11px] font-normal" style={{ color: 'var(--text-muted)' }}>SAR</span></p>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md" style={{ background: statusMap[o.status].bg, color: statusMap[o.status].color }}>{statusMap[o.status].label}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Payment Methods */}
        <Card className="xl:col-span-3">
          <CardTitle>Payment Methods</CardTitle>
          <div className="flex justify-center">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" strokeWidth={0}>
                  {pieData.map(d => <Cell key={d.name} fill={d.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            {pieData.map(d => (
              <div key={d.name} className="flex items-center gap-2 px-2.5 py-2 rounded-lg" style={{ background: 'var(--bg-input)' }}>
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: d.color }} />
                <span className="text-[11px] font-medium" style={{ color: 'var(--text-secondary)' }}>{d.name}</span>
                <span className="text-[11px] font-bold ms-auto tabular-nums" style={{ color: 'var(--text-primary)' }}>{d.value}%</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Products */}
        <Card className="xl:col-span-4">
          <div className="flex items-center justify-between mb-4">
            <CardTitle>Top Products</CardTitle>
            <button className="cursor-pointer border-none p-1 rounded-lg transition-colors hover:bg-[var(--bg-input)]" style={{ background: 'transparent', color: 'var(--text-muted)' }}><MoreHorizontal size={16} /></button>
          </div>
          <div className="space-y-3">
            {topProducts.map((p, i) => {
              const colors = ['#2BE3B7', '#11ABE2', '#0086FF', '#7C3AED']
              const pct = [90, 72, 60, 45][i]
              return (
                <div key={p.name} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[12px] font-bold shrink-0" style={{ background: colors[i] }}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[13px] font-medium truncate" style={{ color: 'var(--text-primary)' }}>{p.name}</span>
                      <span className="text-[12px] font-semibold tabular-nums shrink-0 ms-2" style={{ color: 'var(--text-primary)' }}>{p.amount} <span className="font-normal" style={{ color: 'var(--text-muted)' }}>SAR</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-input)' }}>
                        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: colors[i] }} />
                      </div>
                      <span className="text-[10px] font-medium shrink-0 tabular-nums" style={{ color: 'var(--text-muted)' }}>{p.qty} sold</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>
      </div>
    </div>
  )
}
