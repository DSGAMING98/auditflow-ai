"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  FileText,
  Save,
  Settings,
  ShieldCheck,
} from "lucide-react";

type Rule = {
  id: number;
  title: string;
  description: string;
  category: string;
  severity: "Low" | "Medium" | "High";
  active: boolean;
};

const initialRules: Rule[] = [
  {
    id: 1,
    title: "GSTIN / Tax ID required",
    description:
      "Flag invoices that do not contain a valid GSTIN or tax identification number.",
    category: "Tax Compliance",
    severity: "High",
    active: true,
  },
  {
    id: 2,
    title: "Invoice number required",
    description:
      "Flag documents where the invoice number is missing or unreadable.",
    category: "Mandatory Fields",
    severity: "High",
    active: true,
  },
  {
    id: 3,
    title: "Duplicate invoice detection",
    description:
      "Compare invoice numbers, vendors, and amounts to detect possible duplicate billing.",
    category: "Fraud Prevention",
    severity: "Medium",
    active: true,
  },
  {
    id: 4,
    title: "Subtotal + tax must match total",
    description:
      "Check whether subtotal plus tax amount matches the final invoice total.",
    category: "Calculation Check",
    severity: "High",
    active: true,
  },
  {
    id: 5,
    title: "Vendor address required",
    description:
      "Flag invoices where the vendor address is missing from the document.",
    category: "Mandatory Fields",
    severity: "Low",
    active: false,
  },
  {
    id: 6,
    title: "Payment terms required",
    description:
      "Check whether the invoice includes payment terms such as Net 15, Net 30, or due date.",
    category: "Business Policy",
    severity: "Medium",
    active: false,
  },
];

function severityClass(severity: Rule["severity"]) {
  if (severity === "High") return "bg-red-400/10 text-red-300 border-red-400/20";
  if (severity === "Medium")
    return "bg-yellow-400/10 text-yellow-300 border-yellow-400/20";
  return "bg-emerald-400/10 text-emerald-300 border-emerald-400/20";
}

export default function RulesPage() {
  const [rules, setRules] = useState(initialRules);
  const [saved, setSaved] = useState(false);

  const activeRules = rules.filter((rule) => rule.active).length;
  const highRiskRules = rules.filter(
    (rule) => rule.severity === "High" && rule.active
  ).length;

  function toggleRule(id: number) {
    setSaved(false);
    setRules((currentRules) =>
      currentRules.map((rule) =>
        rule.id === id ? { ...rule, active: !rule.active } : rule
      )
    );
  }

  function saveRules() {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  }

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
            <p className="text-xs text-slate-400">Compliance Rule Engine</p>
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
                Custom audit policies
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
                Build the rules your invoices must obey.
              </h1>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Enable or disable compliance checks based on your company policy.
                In Version 2, these rules will control the real AI audit engine.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <ShieldCheck className="text-cyan-300" />
                <p className="mt-4 text-3xl font-black">{activeRules}</p>
                <p className="text-sm text-slate-400">Active rules</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <AlertTriangle className="text-red-300" />
                <p className="mt-4 text-3xl font-black">{highRiskRules}</p>
                <p className="text-sm text-slate-400">High severity rules</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <FileText className="text-emerald-300" />
                <p className="mt-4 text-3xl font-black">{rules.length}</p>
                <p className="text-sm text-slate-400">Total policies</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-black">Audit Rules</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Toggle rules that should be checked during invoice audits.
                </p>
              </div>

              <button
                onClick={saveRules}
                className="flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-slate-950 hover:bg-cyan-300"
              >
                {saved ? <CheckCircle2 size={18} /> : <Save size={18} />}
                {saved ? "Rules Saved" : "Save Rules"}
              </button>
            </div>

            <div className="mt-6 grid gap-4">
              {rules.map((rule) => (
                <div
                  key={rule.id}
                  className="grid gap-5 rounded-3xl border border-white/10 bg-slate-900/70 p-5 md:grid-cols-[1fr_auto] md:items-center"
                >
                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Settings size={26} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-black">{rule.title}</h3>

                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-bold ${severityClass(
                            rule.severity
                          )}`}
                        >
                          {rule.severity}
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-slate-300">
                          {rule.category}
                        </span>
                      </div>

                      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                        {rule.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleRule(rule.id)}
                    className={`rounded-full px-6 py-3 text-sm font-black transition ${
                      rule.active
                        ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                        : "border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {rule.active ? "Enabled" : "Disabled"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
            <h3 className="font-black text-cyan-200">Version 2 Upgrade</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Later, these rules will be saved in a database and passed to the
              AI auditor. That means different companies can create their own
              invoice policies without changing the code.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}