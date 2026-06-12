import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Rocket,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  Users,
} from "lucide-react";

const pilotSteps = [
  {
    title: "Business onboarding",
    description:
      "Understand invoice volume, vendor workflow, document types, and current review process.",
    icon: Users,
  },
  {
    title: "Sample invoice audit",
    description:
      "Upload sample invoices and review missing fields, duplicate risks, and compliance warnings.",
    icon: UploadCloud,
  },
  {
    title: "Custom rules setup",
    description:
      "Enable checks such as GSTIN required, duplicate invoice alerts, vendor address validation, and total mismatch detection.",
    icon: ClipboardCheck,
  },
  {
    title: "ROI review",
    description:
      "Estimate time saved, manual review cost reduced, and invoice error exposure prevented.",
    icon: ShieldCheck,
  },
];

const benefits = [
  "Test with real invoice workflows",
  "Identify duplicate billing risks",
  "Find missing GSTIN and vendor details",
  "Review downloadable audit reports",
  "Track vendor risk patterns",
  "Estimate savings before full rollout",
];

const timeline = [
  {
    day: "Day 1",
    title: "Setup and workflow review",
    text: "Review the business invoice process and define the main audit requirements.",
  },
  {
    day: "Days 2-7",
    title: "Sample audit testing",
    text: "Run invoice samples through the platform and review detected issues.",
  },
  {
    day: "Week 2",
    title: "Report and vendor review",
    text: "Review saved reports, vendor risk patterns, and compliance analytics.",
  },
  {
    day: "Final Review",
    title: "ROI and adoption review",
    text: "Evaluate time savings, risk reduction, and whether the platform fits the business workflow.",
  },
];

export default function PilotPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-6 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.15),_transparent_35%)]" />

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
            <p className="text-xs text-slate-400">Pilot Program</p>
          </div>

          <a
            href="/audit"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300"
          >
            Try Demo
          </a>
        </nav>

        <section className="pt-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                Pilot evaluation program
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
                Test invoice auditing before full business rollout.
              </h1>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Run a structured pilot to evaluate invoice audit accuracy,
                vendor risk tracking, compliance reports, and estimated savings
                using sample business documents.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/audit"
                  className="rounded-full bg-cyan-400 px-8 py-4 text-center font-black text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300"
                >
                  Start Sample Audit
                </a>

                <a
                  href="/roi"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-center font-black text-white transition hover:scale-[1.02] hover:bg-white/10"
                >
                  Calculate ROI
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Rocket size={30} />
                </div>

                <div>
                  <h2 className="text-2xl font-black">Pilot Overview</h2>
                  <p className="text-sm text-slate-400">
                    Evaluate the platform using real business conditions.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <p className="text-sm font-bold text-emerald-200">
                  Suggested pilot scope
                </p>
                <p className="mt-2 text-3xl font-black">30-Day Evaluation</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Review sample invoices, test compliance rules, inspect vendor
                  risks, and evaluate savings before wider adoption.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <FileText className="text-cyan-300" />
                  <p className="mt-4 text-3xl font-black">300</p>
                  <p className="text-sm text-slate-400">
                    Suggested sample invoices
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <CalendarDays className="text-emerald-300" />
                  <p className="mt-4 text-3xl font-black">30</p>
                  <p className="text-sm text-slate-400">Evaluation days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pilotSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Sparkles className="text-cyan-300" size={28} />
                <h2 className="text-2xl font-black">Pilot Benefits</h2>
              </div>

              <div className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-emerald-300"
                    />
                    <p className="text-sm leading-6 text-slate-300">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <CalendarDays className="text-emerald-300" size={28} />
                <h2 className="text-2xl font-black">Pilot Timeline</h2>
              </div>

              <div className="mt-6 grid gap-4">
                {timeline.map((item) => (
                  <div
                    key={item.day}
                    className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-black">{item.title}</h3>
                      <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-200">
                        {item.day}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
            <h3 className="text-xl font-black text-cyan-200">
              Evaluation Outcome
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              At the end of the pilot, the business can review audit accuracy,
              time savings, vendor risk patterns, compliance improvements, and
              overall workflow fit.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}