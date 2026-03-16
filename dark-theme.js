const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  // Section bg
  ['background:#F8FAFB;padding:96px 24px;', 'background:#111827;padding:96px 24px;'],
  // Heading
  ['color:#0D1420;transition-delay:.08s;', 'color:#fff;transition-delay:.08s;'],
  // Sub text
  ['color:#6B7280;font-size:16px;max-width:500px;margin:0 auto;line-height:1.6;transition-delay:.16s;', 'color:rgba(255,255,255,.45);font-size:16px;max-width:500px;margin:0 auto;line-height:1.6;transition-delay:.16s;'],
  // White large cards -> dark
  ['background:#fff;border-radius:20px;border:1px solid #E5E7EB;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.06);display:flex;flex-direction:column;',
   'background:#172030;border-radius:20px;border:1px solid rgba(255,255,255,.07);overflow:hidden;display:flex;flex-direction:column;'],
  // Mockup bg
  ['background:#F3F6FA;padding:28px 28px 0;flex-shrink:0;', 'background:#0D1724;padding:28px 28px 0;flex-shrink:0;'],
  ['background:#F3F6FA;padding:28px;flex-shrink:0;', 'background:#0D1724;padding:28px;flex-shrink:0;'],
  ['background:#F3F6FA;padding:20px;flex-shrink:0;', 'background:#0D1724;padding:20px;flex-shrink:0;'],
  // Inner chart card
  ['background:#fff;border-radius:14px;border:1px solid #E8EDF3;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,.05);',
   'background:#131D2E;border-radius:14px;border:1px solid rgba(255,255,255,.08);padding:18px;'],
  // Stat text
  ['color:#9CA3AF;margin-bottom:2px;">Total Sales', 'color:rgba(255,255,255,.35);margin-bottom:2px;">Total Sales'],
  ['color:#9CA3AF;margin-bottom:2px;">Total Cost', 'color:rgba(255,255,255,.35);margin-bottom:2px;">Total Cost'],
  // Numbers
  ['font-size:17px;font-weight:800;color:#111827;">372', 'font-size:17px;font-weight:800;color:#fff;">372'],
  ['font-size:17px;font-weight:800;color:#111827;">477', 'font-size:17px;font-weight:800;color:#fff;">477'],
  // SAR spans
  ['font-size:10px;color:#9CA3AF;font-weight:400;">SAR</span></div>', 'font-size:10px;color:rgba(255,255,255,.3);font-weight:400;">SAR</span></div>'],
  // vs text
  ['font-size:10px;color:#9CA3AF;">vs Last', 'font-size:10px;color:rgba(255,255,255,.3);">vs Last'],
  // Chart header label
  ['font-size:12px;font-weight:700;color:#111827;">Sales and Cost', 'font-size:12px;font-weight:700;color:rgba(255,255,255,.85);">Sales and Cost'],
  ['font-size:10px;color:#6B7280;background:#F3F4F6;padding:4px 10px;border-radius:6px;border:1px solid #E5E7EB;',
   'font-size:10px;color:rgba(255,255,255,.4);background:rgba(255,255,255,.06);padding:4px 10px;border-radius:6px;border:1px solid rgba(255,255,255,.1);'],
  // SVG grid lines
  ["stroke=\"#F3F4F6\"", 'stroke="rgba(255,255,255,.06)"'],
  // X axis labels
  ['font-size:9px;color:#D1D5DB;">', 'font-size:9px;color:rgba(255,255,255,.25);">'],
  ['font-size:9px;color:#6B7280;font-weight:600;">Oct', 'font-size:9px;color:rgba(255,255,255,.5);font-weight:600;">Oct'],
  ['font-size:8px;color:#D1D5DB;">', 'font-size:8px;color:rgba(255,255,255,.2);">'],
  // Legend
  ['font-size:9px;color:#374151;display:flex;align-items:center;', 'font-size:9px;color:rgba(255,255,255,.6);display:flex;align-items:center;'],
  // Invoice outer card
  ['background:#fff;border-radius:14px;border:1px solid #E8EDF3;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.05);',
   'background:#131D2E;border-radius:14px;border:1px solid rgba(255,255,255,.07);overflow:hidden;'],
  // Invoice grid header row
  ['border-bottom:1px solid #F3F4F6;padding:12px 16px;gap:8px;', 'border-bottom:1px solid rgba(255,255,255,.06);padding:12px 16px;gap:8px;'],
  // Table head bg
  ['background:#FAFAFA;border-bottom:1px solid #F3F4F6;', 'background:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.05);'],
  // Invoice text
  ['color:#9CA3AF;margin-bottom:2px;">Customer', 'color:rgba(255,255,255,.35);margin-bottom:2px;">Customer'],
  ['font-weight:600;color:#111827;">Esther Howard', 'font-weight:600;color:#fff;">Esther Howard'],
  ['color:#9CA3AF;margin-top:1px;">Invoice:', 'color:rgba(255,255,255,.3);margin-top:1px;">Invoice:'],
  ['color:#9CA3AF;margin-bottom:2px;">Total', 'color:rgba(255,255,255,.35);margin-bottom:2px;">Total'],
  ['font-weight:700;color:#111827;">213,19 SAR', 'font-weight:700;color:#fff;">213,19 SAR'],
  ['color:#9CA3AF;font-weight:500;">Item', 'color:rgba(255,255,255,.3);font-weight:500;">Item'],
  ['color:#9CA3AF;font-weight:500;text-align:center;">Unit Price', 'color:rgba(255,255,255,.3);font-weight:500;text-align:center;">Unit Price'],
  ['color:#9CA3AF;font-weight:500;text-align:right;">Subtotal', 'color:rgba(255,255,255,.3);font-weight:500;text-align:right;">Subtotal'],
  ['color:#374151;">Brown Box', 'color:rgba(255,255,255,.75);">Brown Box'],
  ['font-weight:700;color:#111827;text-align:center;">$ 213,19', 'font-weight:700;color:#fff;text-align:center;">$ 213,19'],
  ['font-weight:700;color:#111827;text-align:right;">$ 3,863,800', 'font-weight:700;color:#fff;text-align:right;">$ 3,863,800'],
  // Item icon bg
  ['background:linear-gradient(135deg,#E8F5FF,#D1F0FF)', 'background:rgba(17,171,226,.15)'],
  // Customer 2x2 cards
  ['background:#fff;border-radius:10px;border:1px solid #E8EDF3;padding:10px 12px;',
   'background:rgba(255,255,255,.05);border-radius:10px;border:1px solid rgba(255,255,255,.07);padding:10px 12px;'],
  // Customer bg icons
  ['background:#E8F5F0;display:flex;align-items:center;justify-content:center;">',
   'background:rgba(43,227,183,.15);display:flex;align-items:center;justify-content:center;">'],
  ['background:#F0F3FF;display:flex;align-items:center;justify-content:center;">',
   'background:rgba(0,134,255,.15);display:flex;align-items:center;justify-content:center;">'],
  // Customer names
  ['font-size:9px;font-weight:600;color:#111827;">Cameron W.', 'font-size:9px;font-weight:600;color:rgba(255,255,255,.85);">Cameron W.'],
  ['font-size:9px;font-weight:600;color:#111827;">Howard Pots', 'font-size:9px;font-weight:600;color:rgba(255,255,255,.85);">Howard Pots'],
  ['font-size:9px;font-weight:600;color:#111827;">Leslie A.', 'font-size:9px;font-weight:600;color:rgba(255,255,255,.85);">Leslie A.'],
  ['font-size:9px;font-weight:600;color:#111827;">Bessie C.', 'font-size:9px;font-weight:600;color:rgba(255,255,255,.85);">Bessie C.'],
  // Customer pts
  ['font-size:9px;color:#6B7280;">558,612 pts', 'font-size:9px;color:rgba(255,255,255,.4);">558,612 pts'],
  ['font-size:9px;color:#6B7280;">45,12 M SAR', 'font-size:9px;color:rgba(255,255,255,.4);">45,12 M SAR'],
  ['font-size:9px;color:#6B7280;">558 pts', 'font-size:9px;color:rgba(255,255,255,.4);">558 pts'],
  // Reporting card
  ['background:#fff;border-radius:12px;border:1px solid #E8EDF3;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.04);',
   'background:#131D2E;border-radius:12px;border:1px solid rgba(255,255,255,.07);overflow:hidden;'],
  ['border-bottom:1px solid #F3F4F6;padding:12px 14px;', 'border-bottom:1px solid rgba(255,255,255,.06);padding:12px 14px;'],
  ['font-weight:700;color:#111827;">Monthly Purchase Reports', 'font-weight:700;color:rgba(255,255,255,.9);">Monthly Purchase Reports'],
  ['border-bottom:1px solid #F9FAFB;', 'border-bottom:1px solid rgba(255,255,255,.04);'],
  ['color:#374151;font-weight:500;">Amount', 'color:rgba(255,255,255,.65);font-weight:500;">Amount'],
  ['font-weight:700;color:#111827;">2,658.04', 'font-weight:700;color:#fff;">2,658.04'],
  ['color:#9CA3AF;">Adjustment (SAR)', 'color:rgba(255,255,255,.3);">Adjustment (SAR)'],
  ['font-weight:600;color:#6B7280;">0', 'font-weight:600;color:rgba(255,255,255,.45);">0'],
  ['color:#9CA3AF;">VAT Amount (SAR)', 'color:rgba(255,255,255,.3);">VAT Amount (SAR)'],
  ['font-weight:600;color:#6B7280;">398.71', 'font-weight:600;color:rgba(255,255,255,.45);">398.71'],
  // Payments card
  ['background:#fff;border-radius:12px;border:1px solid #E8EDF3;padding:12px 14px;margin-bottom:10px;box-shadow:0 1px 4px rgba(0,0,0,.04);',
   'background:#131D2E;border-radius:12px;border:1px solid rgba(255,255,255,.07);padding:12px 14px;margin-bottom:10px;'],
  ['font-weight:700;color:#111827;">Master Card', 'font-weight:700;color:rgba(255,255,255,.9);">Master Card'],
  ['color:#9CA3AF;margin-bottom:2px;">Fee Percentage', 'color:rgba(255,255,255,.35);margin-bottom:2px;">Fee Percentage'],
  ['font-weight:800;color:#111827;">80%', 'font-weight:800;color:#fff;">80%'],
  ['color:#9CA3AF;margin-bottom:2px;">Amount Deducted', 'color:rgba(255,255,255,.35);margin-bottom:2px;">Amount Deducted'],
  ['font-weight:700;color:#111827;">20,000 SAR', 'font-weight:700;color:#fff;">20,000 SAR'],
  ['background:#F9FAFB;border-radius:8px;padding:8px 10px;', 'background:rgba(255,255,255,.05);border-radius:8px;padding:8px 10px;'],
  // Promo row
  ['background:#fff;border-radius:10px;border:1px solid #E8EDF3;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;',
   'background:rgba(255,255,255,.04);border-radius:10px;border:1px solid rgba(255,255,255,.07);padding:10px 14px;display:flex;justify-content:space-between;align-items:center;'],
  ['font-weight:700;color:#111827;">Bombastic', 'font-weight:700;color:rgba(255,255,255,.85);">Bombastic'],
  ['color:#9CA3AF;margin-left:6px;">-30,00', 'color:rgba(255,255,255,.35);margin-left:6px;">-30,00'],
  ['color:#9CA3AF;">(50%off)', 'color:rgba(255,255,255,.35);">(50%off)'],
  ['border:1.5px solid #D1D5DB;', 'border:1.5px solid rgba(255,255,255,.15);'],
  ['stroke="#9CA3AF"', 'stroke="rgba(255,255,255,.3)"'],
  // Bottom text in cards
  ['font-size:16px;font-weight:700;color:#111827;margin-bottom:6px;', 'font-size:16px;font-weight:700;color:#fff;margin-bottom:6px;'],
  ['font-size:14px;line-height:1.6;">Essential', 'font-size:14px;line-height:1.6;color:rgba(255,255,255,.45);">Essential'],
  ['font-size:14px;line-height:1.6;">Streamline', 'font-size:14px;line-height:1.6;color:rgba(255,255,255,.45);">Streamline'],
  ['font-size:15px;font-weight:700;color:#111827;margin-bottom:5px;', 'font-size:15px;font-weight:700;color:#fff;margin-bottom:5px;'],
  ['font-size:13px;line-height:1.6;">Maintain', 'font-size:13px;line-height:1.6;color:rgba(255,255,255,.45);">Maintain'],
  ['font-size:13px;line-height:1.6;">Empower', 'font-size:13px;line-height:1.6;color:rgba(255,255,255,.45);">Empower'],
  ['font-size:13px;line-height:1.6;">Boost', 'font-size:13px;line-height:1.6;color:rgba(255,255,255,.45);">Boost'],
];

let count = 0;
for (const [from, to] of replacements) {
  if (html.includes(from)) { html = html.split(from).join(to); count++; }
  else { console.log('MISS:', from.substring(0, 60)); }
}
console.log('Applied:', count, 'of', replacements.length);
fs.writeFileSync('index.html', html, 'utf8');
