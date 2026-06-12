"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Bell,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Mail,
  Save,
  Settings,
  ShieldCheck,
  User,
} from "lucide-react";

type ToggleKey =
  | "requireGstin"
  | "detectDuplicates"
  | "checkTotals"
  | "requireVendorAddress"
  | "emailAlerts"
  | "manualReview";

const initialToggles: Record<ToggleKey, boolean> = {
  requireGstin: true,
  detectDuplicates: true,
  checkTotals: true,
  requireVendorAddress: false,
  emailAlerts: true,
  manualReview: true,
};

const auditPreferences = [
  {
    key: "requireGstin" as ToggleKey,
    title: "Require GSTIN / Tax ID",
    description: "Flag invoices that do not contain a valid tax identifier.",
  },
  {
    key: "detectDuplicates" as ToggleKey,
    title: "Detect duplicate invoices",
    description: "Compare invoice numbers, vendors, dates, and amounts.",
  },
  {
    key: "checkTotals" as ToggleKey,
    title: "Validate invoice totals",
    description: "Check whether subtotal plus tax matches the final amount.",
  },
  {
    key: "requireVendorAddress" as ToggleKey,
    title: "Require vendor address",
    description: "Flag invoices where vendor address is missing.",
  },
  {
    key: "emailAlerts" as ToggleKey,
    title: "Email alerts",
    description: "Send alerts when high-risk invoices are detected.",
  },
  {
    key: "manualReview" as ToggleKey,
    title: "Manual review for high-risk invoices",
    description: "Move high-risk documents into the review queue.",
  },
];

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [toggles, setToggles] = useState(initialToggles);
  const [riskThreshold, setRiskThreshold] = useState(75);
  const [monthlyLimit, setMonthlyLimit] = useState(300);

  function togglePreference(key: ToggleKey) {
    setSaved(false);
    setToggles((current) => ({
      ...current,
      [key]: !current[key],
    }));
  }

  function saveSettings() {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-6 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),_transparent_35%)]" />

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
            <p className="text-xs text-slate-400">Company Settings</p>
          </div>

          <button
            onClick={saveSettings}
            className="flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300"
          >
            {saved ? <CheckCircle2 size={17} /> : <Save size={17} />}
            {saved ? "Saved" : "Save"}
          </button>
        </nav>

        <section className="pt-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr]">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                Business configuration
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
                Configure how invoice audits should work.
              </h1>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Manage business profile details, audit preferences, alert rules,
                and review thresholds from one place.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <ShieldCheck className="text-cyan-300" />
                <p className="mt-4 text-3xl font-black">
                  {Object.values(toggles).filter(Boolean).length}
                </p>
                <p className="text-sm text-slate-400">Active preferences</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <ClipboardCheck className="text-emerald-300" />
                <p className="mt-4 text-3xl font-black">{riskThreshold}%</p>
                <p className="text-sm text-slate-400">Review threshold</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <Building2 className="text-yellow-300" />
                <p className="mt-4 text-3xl font-black">{monthlyLimit}</p>
                <p className="text-sm text-slate-400">Monthly document limit</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Building2 size={28} />
                </div>

                <div>
                  <h2 className="text-2xl font-black">Business Profile</h2>
                  <p className="text-sm text-slate-400">
                    Basic company details for audit records.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-5">
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                    <Building2 size={16} />
                    Business name
                  </span>
                  <input
                    type="text"
                    defaultValue="Sample Business Pvt Ltd"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none focus:border-cyan-400"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                    <ShieldCheck size={16} />
                    GSTIN / Tax ID
                  </span>
                  <input
                    type="text"
                    defaultValue="29ABCDE1234F1Z5"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none focus:border-cyan-400"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                    <User size={16} />
                    Finance contact
                  </span>
                  <input
                    type="text"
                    defaultValue="Finance Manager"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none focus:border-cyan-400"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                    <Mail size={16} />
                    Alert email
                  </span>
                  <input
                    type="email"
                    defaultValue="finance@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none focus:border-cyan-400"
                  />
                </label>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Settings size={28} />
                </div>

                <div>
                  <h2 className="text-2xl font-black">Audit Preferences</h2>
                  <p className="text-sm text-slate-400">
                    Control which checks are active during invoice audits.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {auditPreferences.map((preference) => (
                  <div
                    key={preference.key}
                    className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-5 md:grid-cols-[1fr_auto] md:items-center"
                  >
                    <div>
                      <h3 className="text-lg font-black">{preference.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {preference.description}
                      </p>
                    </div>

                    <button
                      onClick={() => togglePreference(preference.key)}
                      className={`rounded-full px-6 py-3 text-sm font-black transition ${
                        toggles[preference.key]
                          ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                          : "border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      {toggles[preference.key] ? "Enabled" : "Disabled"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="text-cyan-300" size={28} />
                <h2 className="text-2xl font-black">Review Threshold</h2>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Documents with compliance scores below this value can be moved
                into manual review.
              </p>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-300">Compliance threshold</span>
                  <span className="font-bold text-cyan-300">
                    {riskThreshold}%
                  </span>
                </div>

                <input
                  type="range"
                  min="40"
                  max="95"
                  step="5"
                  value={riskThreshold}
                  onChange={(event) =>
                    setRiskThreshold(Number(event.target.value))
                  }
                  className="w-full"
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Bell className="text-emerald-300" size={28} />
                <h2 className="text-2xl font-black">Document Limit</h2>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Set the expected monthly document volume for tracking usage and
                workflow capacity.
              </p>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-300">Documents per month</span>
                  <span className="font-bold text-cyan-300">
                    {monthlyLimit}
                  </span>
                </div>

                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={monthlyLimit}
                  onChange={(event) =>
                    setMonthlyLimit(Number(event.target.value))
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
            <h3 className="font-black text-cyan-200">Settings Summary</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Current configuration uses {Object.values(toggles).filter(Boolean).length} active
              preferences, a {riskThreshold}% review threshold, and a monthly
              capacity of {monthlyLimit} documents.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}