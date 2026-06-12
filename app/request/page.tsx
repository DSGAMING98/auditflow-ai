"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileText,
  Mail,
  Phone,
  Send,
  User,
} from "lucide-react";

export default function RequestPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-6 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.15),_transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <nav className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
          <a
            href="/pilot"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
          >
            <ArrowLeft size={16} />
            Pilot
          </a>

          <div className="text-center">
            <p className="text-lg font-black">AuditFlow AI</p>
            <p className="text-xs text-slate-400">Pilot Request</p>
          </div>

          <a
            href="/audit"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300"
          >
            Try Demo
          </a>
        </nav>

        <section className="grid gap-8 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
              Pilot access request
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
              Request a structured invoice audit pilot.
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-slate-400">
              Submit business details to evaluate invoice audit needs, document
              volume, compliance checks, vendor risk tracking, and potential
              workflow improvements.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <FileText className="text-cyan-300" />
                <p className="mt-4 text-3xl font-black">Invoices</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Evaluate monthly document volume and manual review process.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <ClipboardList className="text-emerald-300" />
                <p className="mt-4 text-3xl font-black">Rules</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Identify required checks such as GSTIN, duplicates, totals,
                  and vendor information.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <Building2 className="text-yellow-300" />
                <p className="mt-4 text-3xl font-black">Vendors</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Review vendor risk patterns and repeated invoice issues.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <CheckCircle2 className="text-emerald-300" />
                <p className="mt-4 text-3xl font-black">Reports</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Generate audit reports for review and internal follow-up.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div>
                  <h2 className="text-3xl font-black">Business Details</h2>
                  <p className="mt-2 text-sm text-slate-400">
                    Fill in the details needed to prepare a pilot evaluation.
                  </p>
                </div>

                <div className="mt-8 grid gap-5">
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                      <Building2 size={16} />
                      Business name
                    </span>
                    <input
                      required
                      type="text"
                      placeholder="Example: ABC Traders"
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                      <User size={16} />
                      Contact person
                    </span>
                    <input
                      required
                      type="text"
                      placeholder="Name of finance/admin contact"
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400"
                    />
                  </label>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                        <Mail size={16} />
                        Email
                      </span>
                      <input
                        required
                        type="email"
                        placeholder="business@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                        <Phone size={16} />
                        Phone
                      </span>
                      <input
                        required
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                        <FileText size={16} />
                        Monthly invoice volume
                      </span>
                      <select className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none focus:border-cyan-400">
                        <option>Less than 100</option>
                        <option>100 - 300</option>
                        <option>300 - 1,000</option>
                        <option>1,000 - 5,000</option>
                        <option>More than 5,000</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                        <ClipboardList size={16} />
                        Primary need
                      </span>
                      <select className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none focus:border-cyan-400">
                        <option>Duplicate invoice detection</option>
                        <option>GSTIN and tax compliance</option>
                        <option>Missing field detection</option>
                        <option>Vendor risk tracking</option>
                        <option>Complete invoice audit workflow</option>
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                      <ClipboardList size={16} />
                      Current invoice review process
                    </span>
                    <textarea
                      rows={5}
                      placeholder="Describe how invoices are currently checked before payment or tax submission."
                      className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400"
                    />
                  </label>
                </div>

                <button className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-black text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300">
                  <Send size={20} />
                  Submit Pilot Request
                </button>
              </form>
            ) : (
              <div className="flex min-h-[640px] flex-col items-center justify-center text-center">
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 p-8">
                  <CheckCircle2 size={72} className="text-emerald-300" />
                </div>

                <h2 className="mt-6 text-4xl font-black">
                  Pilot request submitted
                </h2>

                <p className="mt-4 max-w-md leading-7 text-slate-400">
                  The request has been recorded for review. The next step is to
                  evaluate invoice samples, define audit rules, and review
                  potential savings.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/audit"
                    className="rounded-full bg-cyan-400 px-7 py-4 font-black text-slate-950 hover:bg-cyan-300"
                  >
                    Try Sample Audit
                  </a>

                  <a
                    href="/dashboard"
                    className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 font-black text-white hover:bg-white/10"
                  >
                    Go to Dashboard
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}