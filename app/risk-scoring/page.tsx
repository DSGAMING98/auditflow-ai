"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  BrainCircuit,
  Calculator,
  CheckCircle2,
  FileWarning,
  Gauge,
  Scale,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

type Factor = {
  id: string;
  title: string;
  description: string;
  weight: number;
  score: number;
  severity: "Low" | "Medium" | "High";
};

const initialFactors: Factor[] = [
  {
    id: "tax-id",
    title: "Tax ID / GSTIN Presence",
    description: "Checks whether the invoice includes a valid GSTIN or tax identification number.",
    weight: 25,
    score: 35,
    severity: "High",
  },
  {
    id: "duplicate",
    title: "Duplicate Invoice Pattern",
    description: "Compares invoice number, vendor, amount, and date against previous records.",
    weight: 20,
    score: 60,
    severity: "Medium",
  },
  {
    id: "calculation",
    title: "Amount Calculation Accuracy",
    description: "Verifies whether subtotal, tax amount, and final total are mathematically consistent.",
    weight: 20,
    score: 88,
    severity: "Low",
  },
  {
    id: "vendor",
    title: "Vendor Risk History",
    description: "Reviews past vendor issues such as missing details, repeated corrections, or risky invoices.",
    weight: 20,
    score: 58,
    severity: "Medium",
  },
  {
    id: "mandatory-fields",
    title: "Mandatory Field Completion",
    description: "Checks invoice number, date, vendor name, address, tax fields, and total amount.",
    weight: 15,
    score: 72,
    severity: "Medium",
  },
];

function severityClass(severity: Factor["severity"]) {
  if (severity === "High") {
    return "border-red-400/20 bg-red-400/10 text-red-300";
  }

  if (severity === "Medium") {
    return "border-yellow-400/20 bg-yellow-400/10 text-yellow-300";
  }

  return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
}

function scoreColor(score: number) {
  if (score < 60) return "text-red-300";
  if (score < 80) return "text-yellow-300";
  return "text-emerald-300";
}

function riskLabel(score: number) {
  if (score < 60) return "High Risk";
  if (score < 80) return "Review Required";
  return "Low Risk";
}

export default function RiskScoringPage() {
  const [factors, setFactors] = useState<Factor[]>(initialFactors);

  const totalWeight = factors.reduce((sum, factor) => sum + factor.weight, 0);

  const weightedScore = Math.round(
    factors.reduce((sum, factor) => {
      return sum + factor.score * (factor.weight / totalWeight);
    }, 0)
  );

  const highRiskCount = factors.filter((factor) => factor.severity === "High").length;
  const mediumRiskCount = factors.filter((factor) => factor.severity === "Medium").length;
  const lowRiskCount = factors.filter((factor) => factor.severity === "Low").length;

  function updateFactorScore(id: string, score: number) {
    setFactors((currentFactors) =>
      currentFactors.map((factor) =>
        factor.id === id ? { ...factor, score } : factor
      )
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-6 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(239,68,68,0.15),_transparent_35%)]" />

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
            <p className="text-xs text-slate-400">Risk Scoring Engine</p>
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
                Transparent invoice risk scoring
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
                Explain why every invoice gets its risk score.
              </h1>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Break down invoice risk using tax fields, duplicate patterns,
                calculation accuracy, vendor history, and mandatory document
                details.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Gauge size={32} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Current invoice score</p>
                  <h2 className={`text-5xl font-black ${scoreColor(weightedScore)}`}>
                    {weightedScore}%
                  </h2>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">Risk Classification</p>
                <p className={`mt-2 text-3xl font-black ${scoreColor(weightedScore)}`}>
                  {riskLabel(weightedScore)}
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-3xl border border-red-400/20 bg-red-400/10 p-5">
                  <ShieldAlert className="text-red-300" />
                  <p className="mt-4 text-3xl font-black">{highRiskCount}</p>
                  <p className="text-sm text-slate-400">High-risk factor</p>
                </div>

                <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                  <AlertTriangle className="text-yellow-300" />
                  <p className="mt-4 text-3xl font-black">{mediumRiskCount}</p>
                  <p className="text-sm text-slate-400">Review factors</p>
                </div>

                <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                  <CheckCircle2 className="text-emerald-300" />
                  <p className="mt-4 text-3xl font-black">{lowRiskCount}</p>
                  <p className="text-sm text-slate-400">Stable factors</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <SlidersHorizontal className="text-cyan-300" size={28} />
                <div>
                  <h2 className="text-2xl font-black">Risk Factors</h2>
                  <p className="text-sm text-slate-400">
                    Adjust factor scores to simulate how risk classification changes.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-5">
                {factors.map((factor) => (
                  <div
                    key={factor.id}
                    className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                  >
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-black">{factor.title}</h3>

                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-bold ${severityClass(
                              factor.severity
                            )}`}
                          >
                            {factor.severity}
                          </span>

                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-slate-300">
                            Weight {factor.weight}%
                          </span>
                        </div>

                        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                          {factor.description}
                        </p>
                      </div>

                      <p className={`text-3xl font-black ${scoreColor(factor.score)}`}>
                        {factor.score}%
                      </p>
                    </div>

                    <div className="mt-5">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={factor.score}
                        onChange={(event) =>
                          updateFactorScore(factor.id, Number(event.target.value))
                        }
                        className="w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <BrainCircuit className="text-cyan-300" size={28} />
                  <h2 className="text-2xl font-black">Score Explanation</h2>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                    <div className="flex gap-3">
                      <FileWarning className="mt-1 shrink-0 text-red-300" size={22} />
                      <div>
                        <h3 className="font-black">Primary risk reason</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          Missing tax identity information creates the largest
                          risk impact in the current scoring model.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                    <div className="flex gap-3">
                      <Scale className="mt-1 shrink-0 text-yellow-300" size={22} />
                      <div>
                        <h3 className="font-black">Weighted calculation</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          Each factor contributes based on its weight. Higher
                          weights have a stronger effect on the final score.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                    <div className="flex gap-3">
                      <Calculator className="mt-1 shrink-0 text-cyan-300" size={22} />
                      <div>
                        <h3 className="font-black">Current formula</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          Final Score = sum of each factor score multiplied by
                          its configured audit weight.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 shrink-0 text-cyan-300" size={24} />
                  <div>
                    <h3 className="text-xl font-black text-cyan-200">
                      Audit Decision
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      This invoice should be routed based on the final score.
                      Low scores move to manual review. Strong scores can proceed
                      toward approval if all mandatory fields are present.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
                <h2 className="text-2xl font-black">Routing Rules</h2>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-red-200">
                    Below 60%: High-risk review required
                  </div>

                  <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-yellow-200">
                    60% to 79%: Finance review recommended
                  </div>

                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-200">
                    80% and above: Eligible for approval workflow
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}