import {
  AlertTriangle,
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  FileText,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const monthlyAudits = [
  { month: "Jan", audits: 180, issues: 42, score: 82 },
  { month: "Feb", audits: 220, issues: 51, score: 85 },
  { month: "Mar", audits: 260, issues: 62, score: 87 },
  { month: "Apr", audits: 310, issues: 70, score: 89 },
  { month: "May", audits: 390, issues: 84, score: 92 },
  { month: "Jun", audits: 420, issues: 76, score: 94 },
];

const issueCategories = [
  { name: "Missing GSTIN", count: 38, percent: 82, severity: "High" },
  { name: "Duplicate invoices", count: 24, percent: 64, severity: "Medium" },
  { name: "Total mismatch", count: 19, percent: 51, severity: "High" },
  { name: "Missing vendor address", count: 31, percent: 70, severity: "Low" },
  { name: "Payment terms missing", count: 16, percent: 44, severity: "Medium" },
];

const topInsights = [
  {
    title: "Compliance score improved",
    value: "+12%",
    text: "Average compliance score increased from 82% to 94% across six months.",
    icon: TrendingUp,
  },
  {
    title: "Duplicate billing reduced",
    value: "-18%",
    text: "Repeated invoice patterns dropped after vendor review checks were added.",
    icon: ShieldCheck,
  },
  {
    title: "High-risk documents",
    value: "47",
    text: "Documents still require manual review due to tax and identity issues.",
    icon: ShieldAlert,
  },
];

function severityClass(severity: string) {
  if (severity === "High") return "bg-red-400/10 text-red-300 border-red-400/20";
  if (severity === "Medium")
    return "bg-yellow-400/10 text-yellow-300 border-yellow-400/20";
  return "bg-emerald-400/10 text-emerald-300 border-emerald-400/20";
}

export default function AnalyticsPage() {
  const maxAudits = Math.max(...monthlyAudits.map((item) => item.audits));

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-6 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <nav className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
          <a
            href="/dashboard"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
          >
            <ArrowLeft size={16} />
            Dashboard
          </a>

          <div className="text-center">
            <p className="text-lg font-black">AuditFlow AI</p>
            <p className="text-xs text-slate-400">Compliance Analytics</p>
          </div>

          <a
            href="/audit"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300"
          >
            New Audit
          </a>
        </nav>

        <section className="pt-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr]">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                Finance intelligence dashboard
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
                Turn invoice audits into business insight.
              </h1>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Track audit volume, compliance score, issue categories, and
                risk trends across your invoice workflow.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <FileText className="text-cyan-300" />
                <p className="mt-4 text-3xl font-black">1,780</p>
                <p className="text-sm text-slate-400">Total audits</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <AlertTriangle className="text-yellow-300" />
                <p className="mt-4 text-3xl font-black">385</p>
                <p className="text-sm text-slate-400">Issues detected</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <CheckCircle2 className="text-emerald-300" />
                <p className="mt-4 text-3xl font-black">94%</p>
                <p className="text-sm text-slate-400">Avg compliance</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black">Monthly Audit Volume</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Mock audit activity across the last six months.
                  </p>
                </div>

                <BarChart3 className="text-cyan-300" size={28} />
              </div>

              <div className="mt-8 space-y-5">
                {monthlyAudits.map((item) => {
                  const width = Math.round((item.audits / maxAudits) * 100);

                  return (
                    <div key={item.month}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-bold text-slate-300">
                          {item.month}
                        </span>
                        <span className="text-slate-400">
                          {item.audits} audits · {item.score}% score
                        </span>
                      </div>

                      <div className="h-4 overflow-hidden rounded-full bg-slate-900">
                        <div
                          className="h-full rounded-full bg-cyan-400"
                          style={{ width: `${width}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
              <h2 className="text-2xl font-black">Top Insights</h2>
              <p className="mt-1 text-sm text-slate-400">
                Snapshot of audit performance.
              </p>

              <div className="mt-6 space-y-4">
                {topInsights.map((insight) => {
                  const Icon = insight.icon;

                  return (
                    <div
                      key={insight.title}
                      className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                          <Icon size={24} />
                        </div>

                        <div>
                          <p className="text-3xl font-black text-cyan-300">
                            {insight.value}
                          </p>
                          <h3 className="mt-1 font-black">{insight.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {insight.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black">Issue Category Breakdown</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Most common audit problems found in uploaded documents.
                </p>
              </div>

              <ShieldAlert className="text-red-300" size={28} />
            </div>

            <div className="mt-6 grid gap-4">
              {issueCategories.map((issue) => (
                <div
                  key={issue.name}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-lg font-black">{issue.name}</h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {issue.count} documents affected
                      </p>
                    </div>

                    <span
                      className={`w-fit rounded-full border px-3 py-1 text-xs font-bold ${severityClass(
                        issue.severity
                      )}`}
                    >
                      {issue.severity}
                    </span>
                  </div>

                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-950">
                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: `${issue.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
            <h3 className="font-black text-cyan-200">Analytics Upgrade Path</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              In Version 2, these charts will use real invoice audit data from
              PostgreSQL. You can later add filters by vendor, month, risk
              level, and document type.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}