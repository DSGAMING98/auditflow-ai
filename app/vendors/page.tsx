"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  Building2,
  CheckCircle2,
  FileText,
  Search,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

const vendors = [
  {
    name: "Orion Business Supplies",
    gstin: "Missing",
    invoices: 18,
    totalBilled: "₹8,42,500",
    issues: 7,
    risk: "High Risk",
    lastAudit: "04 June 2026",
  },
  {
    name: "Metro Logistics",
    gstin: "29ABCDE1234F1Z5",
    invoices: 24,
    totalBilled: "₹12,18,900",
    issues: 4,
    risk: "Warning",
    lastAudit: "03 June 2026",
  },
  {
    name: "BrightEdge Supplies",
    gstin: "29BRTGE7788K1Z2",
    invoices: 11,
    totalBilled: "₹4,76,300",
    issues: 0,
    risk: "Clean",
    lastAudit: "02 June 2026",
  },
  {
    name: "Apex Office Mart",
    gstin: "29APEXM4412L1Z9",
    invoices: 9,
    totalBilled: "₹2,31,840",
    issues: 1,
    risk: "Clean",
    lastAudit: "01 June 2026",
  },
  {
    name: "Nova Tech Services",
    gstin: "29NOVAT9034P1Z7",
    invoices: 15,
    totalBilled: "₹9,88,200",
    issues: 5,
    risk: "Warning",
    lastAudit: "31 May 2026",
  },
];

function riskClass(risk: string) {
  if (risk === "High Risk") return "bg-red-400/10 text-red-300 border-red-400/20";
  if (risk === "Warning")
    return "bg-yellow-400/10 text-yellow-300 border-yellow-400/20";
  return "bg-emerald-400/10 text-emerald-300 border-emerald-400/20";
}

export default function VendorsPage() {
  const [search, setSearch] = useState("");

  const filteredVendors = vendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(search.toLowerCase())
  );

  const highRiskVendors = vendors.filter(
    (vendor) => vendor.risk === "High Risk"
  ).length;

  const warningVendors = vendors.filter(
    (vendor) => vendor.risk === "Warning"
  ).length;

  const cleanVendors = vendors.filter((vendor) => vendor.risk === "Clean").length;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-6 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(239,68,68,0.16),_transparent_35%)]" />

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
            <p className="text-xs text-slate-400">Vendor Risk Intelligence</p>
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
                Vendor compliance watchlist
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
                See which vendors are creating invoice risk.
              </h1>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Track vendor GSTIN status, repeated invoice issues, duplicate
                patterns, and billing risk before payments are approved.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <ShieldAlert className="text-red-300" />
                <p className="mt-4 text-3xl font-black">{highRiskVendors}</p>
                <p className="text-sm text-slate-400">High risk vendors</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <AlertTriangle className="text-yellow-300" />
                <p className="mt-4 text-3xl font-black">{warningVendors}</p>
                <p className="text-sm text-slate-400">Warning vendors</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <CheckCircle2 className="text-emerald-300" />
                <p className="mt-4 text-3xl font-black">{cleanVendors}</p>
                <p className="text-sm text-slate-400">Clean vendors</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-black">Vendor Directory</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Mock vendor records based on past invoice audits.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
                <Search size={18} className="text-slate-400" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search vendors..."
                  className="bg-transparent text-sm outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {filteredVendors.map((vendor) => (
                <div
                  key={vendor.name}
                  className="grid gap-5 rounded-3xl border border-white/10 bg-slate-900/70 p-5 xl:grid-cols-[1fr_auto] xl:items-center"
                >
                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Building2 size={26} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-black">{vendor.name}</h3>

                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-bold ${riskClass(
                            vendor.risk
                          )}`}
                        >
                          {vendor.risk}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-slate-400">
                        GSTIN / Tax ID:{" "}
                        <span
                          className={
                            vendor.gstin === "Missing"
                              ? "font-bold text-red-300"
                              : "font-bold text-slate-300"
                          }
                        >
                          {vendor.gstin}
                        </span>
                      </p>

                      <div className="mt-4 grid gap-3 sm:grid-cols-4">
                        <div>
                          <p className="text-xs text-slate-500">Invoices</p>
                          <p className="font-bold">{vendor.invoices}</p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-500">Total billed</p>
                          <p className="font-bold">{vendor.totalBilled}</p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-500">Issues</p>
                          <p className="font-bold">{vendor.issues}</p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-500">Last audit</p>
                          <p className="font-bold">{vendor.lastAudit}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                    <a
                      href="/reports"
                      className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                    >
                      <FileText size={17} />
                      View Reports
                    </a>

                    <a
                      href="/audit"
                      className="flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300"
                    >
                      <ShieldCheck size={17} />
                      Audit New Invoice
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-red-400/20 bg-red-400/10 p-5">
            <h3 className="font-black text-red-200">Vendor Risk Insight</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Orion Business Supplies has the highest issue count and missing
              GSTIN. In a real backend, this page would help finance teams block
              risky vendor payments until required fields are corrected.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}