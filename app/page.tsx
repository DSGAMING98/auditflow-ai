"use client";

import { useState } from "react";

const stats = [
  { label: "Documents Audited", value: "1,248" },
  { label: "Errors Found", value: "312" },
  { label: "Duplicate Bills", value: "47" },
  { label: "Compliance Score", value: "94%" },
];

const features = [
  {
    title: "Duplicate Detection",
    text: "Find repeated invoice numbers, reused vendor bills, and accidental double payments.",
  },
  {
    title: "Tax Compliance Checks",
    text: "Flag missing GSTIN, invalid tax amounts, and suspicious tax calculations.",
  },
  {
    title: "Missing Field Alerts",
    text: "Detect absent invoice numbers, dates, vendor details, addresses, and totals.",
  },
  {
    title: "Smart Risk Score",
    text: "Give every document a clear risk level before it reaches accounts or tax filing.",
  },
];

const invoices = [
  {
    id: "INV-1024",
    vendor: "BrightEdge Supplies",
    amount: "₹48,500",
    status: "Clean",
  },
  {
    id: "INV-1025",
    vendor: "Metro Logistics",
    amount: "₹22,900",
    status: "Warning",
  },
  {
    id: "INV-1026",
    vendor: "Nova Tech Services",
    amount: "₹76,200",
    status: "High Risk",
  },
];

const extractedData = [
  ["Invoice Number", "INV-1026"],
  ["Vendor Name", "Nova Tech Services"],
  ["Date", "04 June 2026"],
  ["GSTIN / Tax ID", "Missing"],
  ["Subtotal", "₹64,000"],
  ["Tax Amount", "₹11,520"],
  ["Total Amount", "₹76,200"],
];

const issues = [
  {
    title: "Missing GSTIN / Tax ID",
    severity: "High",
    text: "The invoice does not contain a valid GSTIN or tax identification number.",
  },
  {
    title: "Possible duplicate invoice",
    severity: "Medium",
    text: "Invoice number and vendor pattern look similar to a previously uploaded document.",
  },
  {
    title: "Vendor address missing",
    severity: "Low",
    text: "Vendor address is not visible in the extracted document fields.",
  },
];

export default function Home() {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  function handleAudit() {
    setLoading(true);
    setShowResults(false);

    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 1400);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative px-6 py-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.25),_transparent_35%)]" />
        <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-xl font-black text-slate-950">
              A
            </div>
            <div>
              <p className="text-lg font-bold">AuditFlow AI</p>
              <p className="text-xs text-slate-400">
                Invoice Intelligence Platform
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#dashboard" className="hover:text-white">
              Dashboard
            </a>
            <a href="#audit" className="hover:text-white">
              Audit
            </a>
          </div>

          <a
            href="#audit"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Start Audit
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pt-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              AI-powered audit checks for small businesses
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
              Audit invoices before they become expensive mistakes.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Upload invoices, receipts, and tax documents. AuditFlow AI flags
              duplicate billing, missing fields, tax issues, and suspicious
              totals before submission.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#audit"
                className="rounded-full bg-cyan-400 px-8 py-4 text-center font-bold text-slate-950 shadow-2xl shadow-cyan-500/20 transition hover:scale-105 hover:bg-cyan-300"
              >
                Start Audit
              </a>
              <a
                href="#dashboard"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center font-bold text-white backdrop-blur-xl transition hover:scale-105 hover:bg-white/10"
              >
                View Demo
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <p className="text-2xl font-black text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="dashboard"
            className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl"
          >
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Live Audit Console</p>
                  <h2 className="text-2xl font-bold">Document Risk Overview</h2>
                </div>
                <div className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                  System Active
                </div>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-xl font-black">{stat.value}</p>
                    <p className="text-xs text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {invoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div>
                      <p className="font-semibold">{invoice.id}</p>
                      <p className="text-sm text-slate-400">
                        {invoice.vendor}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-bold">{invoice.amount}</p>
                      <p
                        className={`text-sm font-semibold ${
                          invoice.status === "Clean"
                            ? "text-emerald-300"
                            : invoice.status === "Warning"
                            ? "text-yellow-300"
                            : "text-red-300"
                        }`}
                      >
                        {invoice.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          id="features"
          className="relative z-10 mx-auto mt-24 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-2xl">
                ✦
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div
          id="audit"
          className="relative z-10 mx-auto mt-24 grid max-w-7xl gap-8 pb-24 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Upload
            </p>
            <h2 className="mt-4 text-4xl font-black">Run AI invoice audit</h2>
            <p className="mt-4 text-slate-400">
              Upload a PDF, PNG, or JPG. This MVP uses mock AI results for now.
              OCR, Gemini, and database support will come in Version 2.
            </p>

            <label className="mt-8 flex cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-cyan-400/40 bg-cyan-400/5 p-10 text-center transition hover:bg-cyan-400/10">
              <input
                type="file"
                accept=".pdf,.png,.jpg,.jpeg"
                className="hidden"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) setFileName(file.name);
                }}
              />
              <div className="text-5xl">📄</div>
              <p className="mt-4 text-xl font-bold">
                {fileName || "Drop invoice here"}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                PDF, PNG, and JPG supported
              </p>
            </label>

            <button
              onClick={handleAudit}
              disabled={loading}
              className="mt-6 w-full rounded-full bg-cyan-400 px-8 py-4 font-black text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Auditing document..." : "Run AI Audit"}
            </button>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            {!showResults && !loading && (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="text-6xl">🤖</div>
                <h3 className="mt-5 text-3xl font-black">
                  Audit results will appear here
                </h3>
                <p className="mt-3 max-w-md text-slate-400">
                  Upload any sample file and click Run AI Audit to preview the
                  compliance report.
                </p>
              </div>
            )}

            {loading && (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />
                <h3 className="mt-6 text-3xl font-black">
                  Scanning document...
                </h3>
                <p className="mt-3 text-slate-400">
                  Extracting invoice fields and checking compliance rules.
                </p>
              </div>
            )}

            {showResults && (
              <div>
                <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center">
                  <div>
                    <p className="text-sm text-slate-400">
                      Overall Compliance Score
                    </p>
                    <h3 className="text-5xl font-black text-cyan-300">72%</h3>
                  </div>
                  <div className="rounded-full bg-red-400/10 px-5 py-3 text-sm font-bold text-red-300">
                    High Risk
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {extractedData.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <p className="text-xs text-slate-500">{label}</p>
                      <p className="mt-1 font-bold">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-black">Issues Detected</h4>
                  <div className="mt-4 space-y-3">
                    {issues.map((issue) => (
                      <div
                        key={issue.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-bold">{issue.title}</p>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${
                              issue.severity === "High"
                                ? "bg-red-400/10 text-red-300"
                                : issue.severity === "Medium"
                                ? "bg-yellow-400/10 text-yellow-300"
                                : "bg-emerald-400/10 text-emerald-300"
                            }`}
                          >
                            {issue.severity}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {issue.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                  <h4 className="font-black text-cyan-200">Recommendation</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Ask the vendor to resend the invoice with GSTIN, full vendor
                    address, and confirmation that this invoice has not already
                    been submitted or paid.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}