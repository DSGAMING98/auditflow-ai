"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  BarChart3,
  Building2,
  Rocket,
  Send,
  ClipboardCheck,
  Settings,
  Users,
  Bell,
  History,
  User,
  PlugZap,
  FolderOpen,
  Gauge,
  ReceiptText,
  Calculator,
  CheckCircle2,
  FileText,
  LayoutDashboard,
  Search,
  ShieldCheck,
  UploadCloud,
  WalletCards,
} from "lucide-react";

const stats = [
  {
    title: "Documents Audited",
    value: "1,248",
    change: "+18.4%",
    icon: FileText,
  },
  {
    title: "Errors Found",
    value: "312",
    change: "-7.2%",
    icon: AlertTriangle,
  },
  {
    title: "Duplicate Invoices",
    value: "47",
    change: "+4.1%",
    icon: WalletCards,
  },
  {
    title: "Compliance Score",
    value: "94%",
    change: "+11.8%",
    icon: ShieldCheck,
  },
];

const invoices = [
  {
    id: "INV-1024",
    vendor: "BrightEdge Supplies",
    type: "Tax Invoice",
    amount: "₹48,500",
    date: "04 Jun 2026",
    status: "Clean",
    risk: "Low",
  },
  {
    id: "INV-1025",
    vendor: "Metro Logistics",
    type: "Receipt",
    amount: "₹22,900",
    date: "03 Jun 2026",
    status: "Warning",
    risk: "Medium",
  },
  {
    id: "INV-1026",
    vendor: "Nova Tech Services",
    type: "GST Invoice",
    amount: "₹76,200",
    date: "02 Jun 2026",
    status: "High Risk",
    risk: "High",
  },
  {
    id: "INV-1027",
    vendor: "Apex Office Mart",
    type: "Purchase Bill",
    amount: "₹12,840",
    date: "01 Jun 2026",
    status: "Clean",
    risk: "Low",
  },
];

const alerts = [
  "GSTIN missing in INV-1026",
  "Possible duplicate found from Metro Logistics",
  "Vendor address missing in 2 documents",
  "Tax amount mismatch detected in one invoice",
];

function getStatusClass(status: string) {
  if (status === "Clean") return "bg-emerald-400/10 text-emerald-300";
  if (status === "Warning") return "bg-yellow-400/10 text-yellow-300";
  return "bg-red-400/10 text-red-300";
}

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<{
  name: string;
  email: string;
  company: string;
  role: string;
  monthlyVolume: string;
} | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("auditflow-user");

    if (!savedUser) {
      router.push("/login");
      return;
    }

    setUser(JSON.parse(savedUser));
  }, [router]);

  function logout() {
    localStorage.removeItem("auditflow-user");
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 border-r border-white/10 bg-white/[0.03] p-6 lg:block">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 font-black text-slate-950">
              A
            </div>
            <div>
              <p className="text-lg font-black">AuditFlow AI</p>
              <p className="text-xs text-slate-400">Compliance Console</p>
            </div>
          </div>

          <nav className="mt-10 space-y-2">
            <a
              href="/dashboard"
              className="flex items-center gap-3 rounded-2xl bg-cyan-400/10 px-4 py-3 text-cyan-200"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </a>
            <a
              href="/audit"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
            >
              <UploadCloud size={18} />
              Upload Audit
            </a>
            <a
  href="/reports"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <FileText size={18} />
  Reports
</a>

<a
  href="/pdf-reports"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <ReceiptText size={18} />
  PDF Reports
</a>

<a
  href="/rules"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <ShieldCheck size={18} />
  Rules
</a>

<a
  href="/vendors"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <Building2 size={18} />
  Vendors
</a>

<a
  href="/analytics"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <BarChart3 size={18} />
  Analytics
</a>

<a
  href="/roi"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <Calculator size={18} />
  ROI Calculator
</a>

<a
  href="/pilot"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <Rocket size={18} />
  Pilot Program
</a>

<a
  href="/request"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <Send size={18} />
  Pilot Request
</a>

<a
  href="/review"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <ClipboardCheck size={18} />
  Review Queue
</a>

<a
  href="/documents"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <FolderOpen size={18} />
  Documents
</a>

<a
  href="/settings"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <Settings size={18} />
  Settings
</a>

<a
  href="/team"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <Users size={18} />
  Team Members
</a>

<a
  href="/profile"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <User size={18} />
  My Profile
</a>

<a
  href="/integrations"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <PlugZap size={18} />
  Integrations
</a>

<a
  href="/audit-trail"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <History size={18} />
  Audit Trail
</a>

<a
  href="/notifications"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <Bell size={18} />
  Notifications
</a>

<a
  href="/batch-audit"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <UploadCloud size={18} />
  Batch Audit
</a>

<a
  href="/approvals"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <CheckCircle2 size={18} />
  Approvals
</a>

<a
  href="/risk-scoring"
  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
>
  <Gauge size={18} />
  Risk Scoring
</a>
            <a
              href="/"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-400 hover:bg-white/5 hover:text-white"
            >
              <ShieldCheck size={18} />
              Landing Page
            </a>
          </nav>
        </aside>

        <section className="flex-1 p-6 lg:p-8">
          <header className="flex flex-col justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:flex-row md:items-center">
            <div>
              <p className="text-sm text-cyan-300">
  {user ? user.company : "Loading workspace..."}
</p>
<h1 className="mt-1 text-3xl font-black">
  Invoice Audit Dashboard
</h1>
<p className="mt-2 text-sm text-slate-400">
  {user ? `${user.name} · ${user.role} · ${user.email}` : "Preparing dashboard..."}
</p>

              <p className="mt-2 text-sm text-slate-400">
                Monitor invoice risk, compliance issues, and duplicate billing.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
              <Search size={18} className="text-slate-400" />
              <input
                placeholder="Search invoices..."
                className="bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </div>
            <button
  onClick={logout}
  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
>
  Logout
</button>
          </header>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                      {stat.change}
                    </span>
                  </div>
                  <p className="mt-5 text-sm text-slate-400">{stat.title}</p>
                  <h2 className="mt-1 text-3xl font-black">{stat.value}</h2>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black">Recent Documents</h2>
                  <p className="text-sm text-slate-400">
                    Latest invoices scanned by AuditFlow AI.
                  </p>
                </div>

                <a
                  href="/audit"
                  className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300"
                >
                  Upload
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] border-separate border-spacing-y-3 text-left">
                  <thead className="text-sm text-slate-500">
                    <tr>
                      <th className="px-4">Invoice</th>
                      <th className="px-4">Vendor</th>
                      <th className="px-4">Type</th>
                      <th className="px-4">Amount</th>
                      <th className="px-4">Date</th>
                      <th className="px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice) => (
                      <tr
                        key={invoice.id}
                        className="rounded-2xl bg-slate-900/80 text-sm"
                      >
                        <td className="rounded-l-2xl px-4 py-4 font-bold">
                          {invoice.id}
                        </td>
                        <td className="px-4 py-4 text-slate-300">
                          {invoice.vendor}
                        </td>
                        <td className="px-4 py-4 text-slate-400">
                          {invoice.type}
                        </td>
                        <td className="px-4 py-4 font-bold">
                          {invoice.amount}
                        </td>
                        <td className="px-4 py-4 text-slate-400">
                          {invoice.date}
                        </td>
                        <td className="rounded-r-2xl px-4 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusClass(
                              invoice.status
                            )}`}
                          >
                            {invoice.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
              <h2 className="text-xl font-black">AI Alerts</h2>
              <p className="mt-1 text-sm text-slate-400">
                Important issues requiring review.
              </p>

              <div className="mt-5 space-y-3">
                {alerts.map((alert, index) => (
                  <div
                    key={alert}
                    className="rounded-2xl border border-white/10 bg-slate-900/80 p-4"
                  >
                    <div className="flex gap-3">
                      {index === 0 ? (
                        <AlertTriangle className="mt-1 text-red-300" size={18} />
                      ) : (
                        <CheckCircle2 className="mt-1 text-cyan-300" size={18} />
                      )}
                      <p className="text-sm leading-6 text-slate-300">
                        {alert}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                <p className="text-sm font-bold text-cyan-200">
                  AI Recommendation
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Review high-risk invoices first. Missing tax identifiers and
                  repeated vendor patterns should be corrected before submission.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}