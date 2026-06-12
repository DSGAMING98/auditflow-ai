"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  FileText,
  RefreshCw,
  ShieldAlert,
} from "lucide-react";

type Severity = "High" | "Medium" | "Low";
type Status = "Pending" | "Resolved" | "Correction Requested";
type Filter = "All" | "High" | "Medium" | "Low" | "Resolved";

type ReviewItem = {
  id: string;
  invoice: string;
  vendor: string;
  amount: string;
  date: string;
  severity: Severity;
  status: Status;
  reason: string;
  recommendation: string;
};

const initialReviewItems: ReviewItem[] = [
  {
    id: "REV-501",
    invoice: "INV-2048",
    vendor: "Orion Business Supplies",
    amount: "₹61,360",
    date: "04 June 2026",
    severity: "High",
    status: "Pending",
    reason: "GSTIN / Tax ID missing from invoice.",
    recommendation:
      "Request corrected invoice with valid GSTIN and vendor address before payment approval.",
  },
  {
    id: "REV-502",
    invoice: "INV-1026",
    vendor: "Nova Tech Services",
    amount: "₹76,200",
    date: "03 June 2026",
    severity: "High",
    status: "Pending",
    reason: "Possible duplicate billing pattern detected.",
    recommendation:
      "Compare invoice number, amount, vendor, and previous payment history before processing.",
  },
  {
    id: "REV-503",
    invoice: "INV-1025",
    vendor: "Metro Logistics",
    amount: "₹22,900",
    date: "03 June 2026",
    severity: "Medium",
    status: "Correction Requested",
    reason: "Vendor address is missing from the document.",
    recommendation:
      "Ask vendor to resend invoice with complete registered address.",
  },
  {
    id: "REV-504",
    invoice: "INV-1027",
    vendor: "Apex Office Mart",
    amount: "₹12,840",
    date: "01 June 2026",
    severity: "Low",
    status: "Resolved",
    reason: "Payment terms were missing.",
    recommendation:
      "Payment terms were added manually after finance review.",
  },
];

function severityClass(severity: Severity) {
  if (severity === "High") return "border-red-400/20 bg-red-400/10 text-red-300";
  if (severity === "Medium")
    return "border-yellow-400/20 bg-yellow-400/10 text-yellow-300";
  return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
}

function statusClass(status: Status) {
  if (status === "Resolved")
    return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
  if (status === "Correction Requested")
    return "border-yellow-400/20 bg-yellow-400/10 text-yellow-300";
  return "border-red-400/20 bg-red-400/10 text-red-300";
}

export default function ReviewPage() {
  const [reviewItems, setReviewItems] = useState(initialReviewItems);
  const [filter, setFilter] = useState<Filter>("All");

  const filteredItems = reviewItems.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Resolved") return item.status === "Resolved";
    return item.severity === filter && item.status !== "Resolved";
  });

  const pendingCount = reviewItems.filter((item) => item.status === "Pending").length;
  const resolvedCount = reviewItems.filter((item) => item.status === "Resolved").length;
  const highRiskCount = reviewItems.filter(
    (item) => item.severity === "High" && item.status !== "Resolved"
  ).length;

  function updateStatus(id: string, status: Status) {
    setReviewItems((items) =>
      items.map((item) => (item.id === id ? { ...item, status } : item))
    );
  }

  const filters: Filter[] = ["All", "High", "Medium", "Low", "Resolved"];

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
            <p className="text-xs text-slate-400">Risk Review Queue</p>
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
              <div className="mb-6 inline-flex rounded-full border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm text-red-200">
                Manual review workflow
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
                Review risky invoices before they reach payment.
              </h1>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                High-risk invoices, duplicate billing patterns, missing tax
                fields, and correction requests appear here for finance review.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <ShieldAlert className="text-red-300" />
                <p className="mt-4 text-3xl font-black">{highRiskCount}</p>
                <p className="text-sm text-slate-400">High-risk items</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <Clock className="text-yellow-300" />
                <p className="mt-4 text-3xl font-black">{pendingCount}</p>
                <p className="text-sm text-slate-400">Pending review</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <CheckCircle2 className="text-emerald-300" />
                <p className="mt-4 text-3xl font-black">{resolvedCount}</p>
                <p className="text-sm text-slate-400">Resolved items</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-black">Review Queue</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Track invoice issues that need human approval or correction.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {filters.map((item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                      filter === item
                        ? "bg-cyan-400 text-slate-950"
                        : "border border-white/10 bg-white/[0.04] text-slate-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <div className="grid gap-5 xl:grid-cols-[1fr_auto] xl:items-center">
                    <div className="flex gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <FileText size={26} />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-black">{item.invoice}</h3>

                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-bold ${severityClass(
                              item.severity
                            )}`}
                          >
                            {item.severity}
                          </span>

                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-bold ${statusClass(
                              item.status
                            )}`}
                          >
                            {item.status}
                          </span>
                        </div>

                        <p className="mt-2 text-sm text-slate-400">
                          {item.vendor} · {item.amount} · {item.date}
                        </p>

                        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                          <div className="flex gap-3">
                            <AlertTriangle
                              size={18}
                              className="mt-1 shrink-0 text-yellow-300"
                            />
                            <div>
                              <p className="font-bold text-slate-200">
                                {item.reason}
                              </p>
                              <p className="mt-2 text-sm leading-6 text-slate-400">
                                {item.recommendation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                      <button
                        onClick={() => updateStatus(item.id, "Resolved")}
                        className="flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-emerald-300"
                      >
                        <CheckCircle2 size={17} />
                        Mark Resolved
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(item.id, "Correction Requested")
                        }
                        className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                      >
                        <RefreshCw size={17} />
                        Request Correction
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-10 text-center">
                <ClipboardCheck className="mx-auto text-emerald-300" size={48} />
                <h3 className="mt-4 text-2xl font-black">No items found</h3>
                <p className="mt-2 text-sm text-slate-400">
                  There are no review items matching this filter.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}