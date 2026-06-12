"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Calculator,
  Clock,
  FileWarning,
  IndianRupee,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function RoiPage() {
  const [invoices, setInvoices] = useState(300);
  const [manualMinutes, setManualMinutes] = useState(8);
  const [hourlyCost, setHourlyCost] = useState(250);
  const [errorRate, setErrorRate] = useState(3);
  const [averageInvoiceValue, setAverageInvoiceValue] = useState(5000);

  const monthlyManualHours = (invoices * manualMinutes) / 60;
  const monthlyManualCost = monthlyManualHours * hourlyCost;

  const estimatedBadInvoices = Math.round((invoices * errorRate) / 100);
  const possibleErrorLoss = estimatedBadInvoices * averageInvoiceValue;

  const aiReviewTimeMinutes = 1.5;
  const aiMonthlyHours = (invoices * aiReviewTimeMinutes) / 60;
  const aiMonthlyCost = aiMonthlyHours * hourlyCost;

  const monthlySavings = Math.max(
    monthlyManualCost + possibleErrorLoss - aiMonthlyCost,
    0
  );

  const yearlySavings = monthlySavings * 12;

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
            <p className="text-xs text-slate-400">Savings Estimator</p>
          </div>

          <a
            href="/audit"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300"
          >
            New Audit
          </a>
        </nav>

        <section className="pt-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                Business value calculator
              </div>

              <h1 className="text-5xl font-black tracking-tight md:text-6xl">
                Show businesses exactly what invoice mistakes cost.
              </h1>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Estimate time saved, manual review cost reduced, and possible
                billing error losses prevented by using AI-assisted invoice
                auditing.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                  <Clock className="text-cyan-300" />
                  <p className="mt-4 text-3xl font-black">
                    {monthlyManualHours.toFixed(1)} hrs
                  </p>
                  <p className="text-sm text-slate-400">
                    Manual review time monthly
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                  <FileWarning className="text-yellow-300" />
                  <p className="mt-4 text-3xl font-black">
                    {estimatedBadInvoices}
                  </p>
                  <p className="text-sm text-slate-400">
                    Estimated risky invoices monthly
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                  <IndianRupee className="text-red-300" />
                  <p className="mt-4 text-3xl font-black">
                    ₹{possibleErrorLoss.toLocaleString("en-IN")}
                  </p>
                  <p className="text-sm text-slate-400">
                    Possible monthly error exposure
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                  <TrendingUp className="text-emerald-300" />
                  <p className="mt-4 text-3xl font-black">
                    ₹{yearlySavings.toLocaleString("en-IN")}
                  </p>
                  <p className="text-sm text-slate-400">
                    Estimated yearly savings
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Calculator size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-black">ROI Calculator</h2>
                  <p className="text-sm text-slate-400">
                    Adjust the numbers for any small business.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-300">Invoices per month</span>
                    <span className="font-bold text-cyan-300">{invoices}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={invoices}
                    onChange={(event) => setInvoices(Number(event.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-300">
                      Manual minutes per invoice
                    </span>
                    <span className="font-bold text-cyan-300">
                      {manualMinutes} min
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="1"
                    value={manualMinutes}
                    onChange={(event) =>
                      setManualMinutes(Number(event.target.value))
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-300">
                      Staff cost per hour
                    </span>
                    <span className="font-bold text-cyan-300">
                      ₹{hourlyCost}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={hourlyCost}
                    onChange={(event) =>
                      setHourlyCost(Number(event.target.value))
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-300">
                      Estimated invoice error rate
                    </span>
                    <span className="font-bold text-cyan-300">
                      {errorRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={errorRate}
                    onChange={(event) => setErrorRate(Number(event.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-300">
                      Average invoice value
                    </span>
                    <span className="font-bold text-cyan-300">
                      ₹{averageInvoiceValue.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={averageInvoiceValue}
                    onChange={(event) =>
                      setAverageInvoiceValue(Number(event.target.value))
                    }
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 text-emerald-300" size={24} />
                  <div>
                    <h3 className="text-xl font-black text-emerald-200">
                      Estimated Savings
                    </h3>
                    <p className="mt-2 text-5xl font-black">
                      ₹{monthlySavings.toLocaleString("en-IN")}
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Estimated monthly savings from reduced review time and
                      avoided invoice error exposure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className="font-black">Pitch-ready explanation</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  For this invoice volume, manual checking may cost around ₹
                  {monthlyManualCost.toLocaleString("en-IN")} per month in staff
                  time. AuditFlow AI can reduce review time and flag risky
                  invoices before payment or tax submission.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}