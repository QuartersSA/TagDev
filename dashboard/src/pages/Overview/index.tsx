import { DollarSign, ShoppingBag, Users, TrendingUp, ArrowUpRight, ArrowDownRight, MoreHorizontal, Calendar, Download, Filter, CreditCard, Banknote, Smartphone, Wallet, Package, Clock, ChevronRight, Zap, Target, Activity } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid, PieChart, Pie, Cell, LineChart, Line } from 'recharts'

const salesData = [
  { m: 'Jan', sales: 42, cost: 28 }, { m: 'Feb', sales: 38, cost: 25 },
  { m: 'Mar', sales: 55, cost: 32 }, { m: 'Apr', sales: 47, cost: 30 },
  { m: 'May', sales: 62, cost: 35 }, { m: 'Jun', sales: 58, cost: 33 },
  { m: 'Jul', sales: 71, cost: 38 },
]

const hourlyData = [
  { h: '8AM', v: 12 }, { h: '9AM', v: 28 }, { h: '10AM', v: 45 }, { h: '11AM', v: 62 },
  { h: '12PM', v: 85 }, { h: '1PM', v: 78 }, { h: '2PM', v: 55 }, { h: '3PM', v: 42 },
  { h: '4PM', v: 68 }, { h: '5PM', v: 72 }, { h: '6PM', v: 90 }, { h: '7PM', v: 65 },
]

const weeklyData = [
  { d: 'Sat', v: 4200 }, { d: 'Sun', v: 3800 }, { d: 'Mon', v: 5100 },
  { d: 'Tue', v: 4600 }, { d: 'Wed', v: 5800 }, { d: 'Thu', v: 6200 }, { d: 'Fri', v: 4900 },
]

const pieData = [
  { name: 'Cash', value: 35, color: '#2BE3B7', icon: Banknote },
  { name: 'Card', value: 30, color: '#11ABE2', icon: CreditCard },
  { name: 'Mada', value: 20, color: '#0086FF', icon: Wallet },
  { name: 'STC Pay', value: 15, color: '#7C3AED', icon: Smartphone },
]

const orders = [
  { id: '#5581', customer: 'Ahmed Hassan', avatar: 'AH', amount: '213.50', items: 3, status: 'paid', time: '2m ago', color: '#2BE3B7' },
  { id: '#5580', customer: 'Sara Mohamed', avatar: 'SM', amount: '89.00', items: 1, status: 'paid', time: '15m ago', color: '#11ABE2' },
  { id: '#5579', customer: 'Khalid Ali', avatar: 'KA', amount: '342.75', items: 5, status: 'pending', time: '32m ago', color: '#0086FF' },
  { id: '#5578', customer: 'Fatima Omar', avatar: 'FO', amount: '156.20', items: 2, status: 'paid', time: '1h ago', color: '#7C3AED' },
  { id: '#5577', customer: 'Youssef Nasser', avatar: 'YN', amount: '78.90', items: 4, status: 'refunded', time: '2h ago', color: '#EC4899' },
]

const topProducts = [
  { name: 'Arabic Coffee', qty: 234, amount: '11,700', pct: 92, emoji: '☕' },
  { name: 'Cappuccino', qty: 189, amount: '9,450', pct: 74, emoji: '🥤' },
  { name: 'Cheese Cake', qty: 156, amount: '7,800', pct: 61, emoji: '🍰' },
  { name: 'Fresh Juice', qty: 142, amount: '4,260', pct: 48, emoji: '🧃' },
  { name: 'Croissant', qty: 98, amount: '2,940', pct: 35, emoji: '🥐' },
]

const stats = [
  { label: 'Total Sales', value: '372,100', unit: 'SAR', change: '+7.28%', up: true, icon: DollarSign, color: '#2BE3B7', bg: 'linear-gradient(135deg, #2BE3B710, #2BE3B705)', borderColor: '#2BE3B730', sparkData: [30, 45, 38, 52, 48, 62, 58, 71] },
  { label: 'Total Orders', value: '1,847', unit: '', change: '+12.5%', up: true, icon: ShoppingBag, color: '#11ABE2', bg: 'linear-gradient(135deg, #11ABE210, #11ABE205)', borderColor: '#11ABE230', sparkData: [20, 35, 28, 42, 38, 55, 50, 62] },
  { label: 'Active Customers', value: '542', unit: '', change: '+3.1%', up: true, icon: Users, color: '#0086FF', bg: 'linear-gradient(135deg, #0086FF10, #0086FF05)', borderColor: '#0086FF30', sparkData: [40, 42, 45, 44, 48, 50, 52, 54] },
  { label: 'Net Revenue', value: '48,250', unit: 'SAR', change: '-2.4%', up: false, icon: TrendingUp, color: '#7C3AED', bg: 'linear-gradient(135deg, #7C3AED10, #7C3AED05)', borderColor: '#7C3AED30', sparkData: [55, 52, 58, 48, 50, 45, 47, 42] },
]

const statusStyle: Record<string, { label: string; bg: string; color: string; dot: string }> = {
  paid: { label: 'Paid', bg: 'var(--green-bg)', color: 'var(--green)', dot: '#10B981' },
  pending: { label: 'Pending', bg: 'var(--amber-bg)', color: 'var(--amber)', dot: '#F59E0B' },
  refunded: { label: 'Refunded', bg: 'var(--red-bg)', color: 'var(--red)', dot: '#EF4444' },
}

const Card = ({ children, className = '', noPad = false }: { children: React.ReactNode; className?: string; noPad?: boolean }) => (
  <div className={`rounded-2xl ${noPad ? '' : 'p-5'} ${className}`} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}>
    {children}
  </div>
)

export default function Overview() {
  return (
    <div className="space-y-6 max-w-[1440px]">

      {/* ═══ Header ═══ */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-[22px] font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>Dashboard</h1>
          <p className="text-[13px] mt-1" style={{ color: 'var(--text-muted)' }}>Monitor your store performance and recent activity</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-[13px] font-medium cursor-pointer border transition-colors hover:opacity-90"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
            <Calendar size={14} /> Last 7 Days
          </button>
          <button className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-[13px] font-medium cursor-pointer border-none text-white transition-colors hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #11ABE2, #0086FF)' }}>
            <Download size={14} /> Export
          </button>
        </div>
      </div>

      {/* ═══ Stat Cards ═══ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, idx) => (
          <div key={s.label} className="rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'var(--bg-card)', border: `1px solid var(--border)`, boxShadow: 'var(--card-shadow)' }}>

            {/* Gradient accent line */}
            <div className="absolute top-0 inset-x-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}80)` }} />

            {/* Icon + Change */}
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${s.color}12` }}>
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <div className="flex items-center gap-1 text-[12px] font-bold" style={{ color: s.up ? 'var(--green)' : 'var(--red)' }}>
                {s.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {s.change}
              </div>
            </div>

            {/* Value */}
            <div className="text-[28px] font-extrabold tabular-nums tracking-tight leading-none" style={{ color: 'var(--text-primary)' }}>
              {s.value}
              {s.unit && <span className="text-[13px] font-medium ms-1.5" style={{ color: 'var(--text-muted)' }}>{s.unit}</span>}
            </div>
            <p className="text-[12px] font-medium mt-1.5" style={{ color: 'var(--text-muted)' }}>{s.label}</p>

            {/* Mini sparkline */}
            <div className="mt-3 -mx-1">
              <ResponsiveContainer width="100%" height={32}>
                <AreaChart data={s.sparkData.map((v, i) => ({ v, i }))}>
                  <defs>
                    <linearGradient id={`spark-${idx}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={s.color} stopOpacity={0.2} />
                      <stop offset="100%" stopColor={s.color} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="v" stroke={s.color} strokeWidth={1.5} fill={`url(#spark-${idx})`} dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      {/* ═══ Charts Row ═══ */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

        {/* Sales & Cost */}
        <Card className="xl:col-span-2">
          <div className="flex items-center justify-between mb-1">
            <div>
              <h3 className="text-[15px] font-bold" style={{ color: 'var(--text-primary)' }}>Sales Overview</h3>
              <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-muted)' }}>Revenue vs Cost trend</p>
            </div>
            <div className="flex gap-5">
              <span className="flex items-center gap-1.5 text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>
                <span className="w-3 h-[3px] rounded-full" style={{ background: '#11ABE2' }} /> Sales
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>
                <span className="w-3 h-[3px] rounded-full" style={{ background: '#2BE3B7' }} /> Cost
              </span>
            </div>
          </div>

          {/* KPI mini row */}
          <div className="flex gap-6 mt-3 mb-5">
            <div>
              <p className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>Avg. Daily</p>
              <p className="text-[18px] font-bold tabular-nums" style={{ color: 'var(--text-primary)' }}>12,400 <span className="text-[11px] font-normal" style={{ color: 'var(--text-muted)' }}>SAR</span></p>
            </div>
            <div className="w-px" style={{ background: 'var(--border)' }} />
            <div>
              <p className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>Profit Margin</p>
              <p className="text-[18px] font-bold tabular-nums" style={{ color: '#2BE3B7' }}>34.2%</p>
            </div>
            <div className="w-px" style={{ background: 'var(--border)' }} />
            <div>
              <p className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>Growth</p>
              <p className="text-[18px] font-bold tabular-nums flex items-center gap-1" style={{ color: 'var(--green)' }}>
                <ArrowUpRight size={16} /> 18.3%
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="gSales" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#11ABE2" stopOpacity={0.15} /><stop offset="100%" stopColor="#11ABE2" stopOpacity={0} /></linearGradient>
                <linearGradient id="gCost" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2BE3B7" stopOpacity={0.1} /><stop offset="100%" stopColor="#2BE3B7" stopOpacity={0} /></linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="m" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} width={32} tickFormatter={v => `${v}k`} />
              <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, fontSize: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }} formatter={(v) => [`${Number(v)}k SAR`]} />
              <Area type="monotone" dataKey="sales" stroke="#11ABE2" strokeWidth={2.5} fill="url(#gSales)" dot={false} activeDot={{ r: 5, fill: '#11ABE2', stroke: 'var(--bg-card)', strokeWidth: 2 }} />
              <Area type="monotone" dataKey="cost" stroke="#2BE3B7" strokeWidth={2.5} fill="url(#gCost)" dot={false} activeDot={{ r: 5, fill: '#2BE3B7', stroke: 'var(--bg-card)', strokeWidth: 2 }} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Today's Activity */}
        <Card>
          <div className="flex items-center justify-between mb-1">
            <div>
              <h3 className="text-[15px] font-bold" style={{ color: 'var(--text-primary)' }}>Today's Activity</h3>
              <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-muted)' }}>Orders per hour</p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold" style={{ background: 'var(--green-bg)', color: 'var(--green)' }}>
              <Activity size={12} /> Live
            </div>
          </div>

          {/* Today's quick stats */}
          <div className="grid grid-cols-2 gap-2 mt-3 mb-4">
            <div className="rounded-xl p-3" style={{ background: 'var(--bg-input)' }}>
              <p className="text-[10px] font-medium mb-0.5" style={{ color: 'var(--text-muted)' }}>Today's Orders</p>
              <p className="text-[20px] font-extrabold tabular-nums" style={{ color: 'var(--text-primary)' }}>127</p>
            </div>
            <div className="rounded-xl p-3" style={{ background: 'var(--bg-input)' }}>
              <p className="text-[10px] font-medium mb-0.5" style={{ color: 'var(--text-muted)' }}>Today's Revenue</p>
              <p className="text-[20px] font-extrabold tabular-nums" style={{ color: 'var(--text-primary)' }}>18.4k</p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={170}>
            <BarChart data={hourlyData} barCategoryGap="20%">
              <XAxis dataKey="h" tick={{ fill: 'var(--text-muted)', fontSize: 9 }} axisLine={false} tickLine={false} interval={1} />
              <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, fontSize: 11 }} formatter={(v) => [`${v} orders`]} />
              <defs><linearGradient id="gHour" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#11ABE2" /><stop offset="100%" stopColor="#0086FF" stopOpacity={0.6} /></linearGradient></defs>
              <Bar dataKey="v" fill="url(#gHour)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* ═══ Middle Row ═══ */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">

        {/* Recent Orders */}
        <Card className="xl:col-span-7">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[15px] font-bold" style={{ color: 'var(--text-primary)' }}>Recent Orders</h3>
            <a href="/dashboard/invoices" className="flex items-center gap-1 text-[12px] font-semibold no-underline hover:underline" style={{ color: '#11ABE2' }}>
              View All <ChevronRight size={14} />
            </a>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full" style={{ minWidth: 500 }}>
              <thead>
                <tr>
                  {['Customer', 'Order ID', 'Items', 'Amount', 'Status', 'Time'].map(h => (
                    <th key={h} className="text-start text-[11px] font-semibold uppercase tracking-wide pb-3" style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orders.map(o => (
                  <tr key={o.id} className="transition-colors cursor-pointer group" style={{ borderBottom: '1px solid var(--border)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-hover)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                    <td className="py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[10px] font-bold shrink-0" style={{ background: o.color }}>{o.avatar}</div>
                        <span className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>{o.customer}</span>
                      </div>
                    </td>
                    <td className="py-3 text-[13px] font-medium tabular-nums" style={{ color: 'var(--text-secondary)' }}>{o.id}</td>
                    <td className="py-3 text-[13px] tabular-nums" style={{ color: 'var(--text-muted)' }}>{o.items}</td>
                    <td className="py-3 text-[13px] font-semibold tabular-nums" style={{ color: 'var(--text-primary)' }}>{o.amount} <span className="text-[11px] font-normal" style={{ color: 'var(--text-muted)' }}>SAR</span></td>
                    <td className="py-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-lg" style={{ background: statusStyle[o.status].bg, color: statusStyle[o.status].color }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: statusStyle[o.status].dot }} />
                        {statusStyle[o.status].label}
                      </span>
                    </td>
                    <td className="py-3 text-[12px]" style={{ color: 'var(--text-muted)' }}>{o.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Payment Methods */}
        <Card className="xl:col-span-5">
          <h3 className="text-[15px] font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Payment Methods</h3>

          <div className="flex items-center gap-6">
            {/* Donut */}
            <div className="shrink-0 relative">
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={48} outerRadius={72} dataKey="value" strokeWidth={3} stroke="var(--bg-card)">
                    {pieData.map(d => <Cell key={d.name} fill={d.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-[18px] font-extrabold tabular-nums" style={{ color: 'var(--text-primary)' }}>1,847</p>
                <p className="text-[10px] font-medium" style={{ color: 'var(--text-muted)' }}>Total</p>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 space-y-2.5">
              {pieData.map(d => (
                <div key={d.name} className="flex items-center gap-3 p-2.5 rounded-xl transition-colors" style={{ background: 'var(--bg-input)' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${d.color}15` }}>
                    <d.icon size={15} style={{ color: d.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-medium" style={{ color: 'var(--text-primary)' }}>{d.name}</p>
                  </div>
                  <div className="text-end">
                    <p className="text-[13px] font-bold tabular-nums" style={{ color: 'var(--text-primary)' }}>{d.value}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* ═══ Bottom Row ═══ */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">

        {/* Top Products */}
        <Card className="xl:col-span-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[15px] font-bold" style={{ color: 'var(--text-primary)' }}>Top Products</h3>
            <button className="cursor-pointer border-none p-1.5 rounded-lg transition-colors hover:bg-[var(--bg-input)]" style={{ background: 'transparent', color: 'var(--text-muted)' }}><MoreHorizontal size={16} /></button>
          </div>
          <div className="space-y-3">
            {topProducts.map((p, i) => {
              const colors = ['#2BE3B7', '#11ABE2', '#0086FF', '#7C3AED', '#EC4899']
              return (
                <div key={p.name} className="flex items-center gap-3 p-2.5 rounded-xl transition-colors hover:bg-[var(--bg-input)]" style={{ cursor: 'default' }}>
                  <span className="text-[18px] shrink-0 w-8 text-center">{p.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[13px] font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{p.name}</span>
                      <span className="text-[13px] font-bold tabular-nums shrink-0 ms-3" style={{ color: 'var(--text-primary)' }}>
                        {p.amount} <span className="text-[10px] font-normal" style={{ color: 'var(--text-muted)' }}>SAR</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg-input)' }}>
                        <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${p.pct}%`, background: `linear-gradient(90deg, ${colors[i]}, ${colors[i]}90)` }} />
                      </div>
                      <span className="text-[10px] font-semibold shrink-0 tabular-nums" style={{ color: 'var(--text-muted)' }}>{p.qty}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Weekly Revenue */}
        <Card className="xl:col-span-4">
          <h3 className="text-[15px] font-bold" style={{ color: 'var(--text-primary)' }}>Weekly Revenue</h3>
          <p className="text-[12px] mb-4" style={{ color: 'var(--text-muted)' }}>SAR per day this week</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={weeklyData} barCategoryGap="25%">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="d" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 10 }} axisLine={false} tickLine={false} width={28} />
              <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, fontSize: 12 }} formatter={(v) => [`${Number(v).toLocaleString()} SAR`]} />
              <defs><linearGradient id="gWeek" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0086FF" /><stop offset="100%" stopColor="#11ABE2" stopOpacity={0.5} /></linearGradient></defs>
              <Bar dataKey="v" fill="url(#gWeek)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Quick Actions */}
        <Card className="xl:col-span-3">
          <h3 className="text-[15px] font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Quick Actions</h3>
          <div className="space-y-2.5">
            {[
              { label: 'New Sale', desc: 'Open POS terminal', icon: Zap, color: '#2BE3B7', to: '/dashboard/pos' },
              { label: 'Add Product', desc: 'Create new item', icon: Package, color: '#11ABE2', to: '/dashboard/products' },
              { label: 'View Reports', desc: 'Sales analytics', icon: Target, color: '#0086FF', to: '/dashboard/reports' },
              { label: 'Manage Team', desc: 'Users & roles', icon: Users, color: '#7C3AED', to: '/dashboard/settings' },
            ].map(a => (
              <a key={a.label} href={a.to} className="flex items-center gap-3 p-3 rounded-xl no-underline transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ background: 'var(--bg-input)', border: '1px solid transparent' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${a.color}30`}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${a.color}12` }}>
                  <a.icon size={17} style={{ color: a.color }} />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-semibold" style={{ color: 'var(--text-primary)' }}>{a.label}</p>
                  <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{a.desc}</p>
                </div>
                <ChevronRight size={14} style={{ color: 'var(--text-muted)' }} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
