"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Lock,
  LogOut,
  Mail,
  Save,
  ShieldCheck,
  User,
} from "lucide-react";

type UserProfile = {
  name: string;
  email: string;
  company: string;
  role: string;
  monthlyVolume: string;
};

const roleOptions = ["Admin", "Finance Manager", "Reviewer", "Auditor", "Viewer"];

const volumeOptions = [
  "Less than 100",
  "100 - 300",
  "300 - 1,000",
  "1,000 - 5,000",
  "More than 5,000",
];

function normalizeProfile(data: Partial<UserProfile>): UserProfile {
  const safeRole =
    data.role && roleOptions.includes(data.role) ? data.role : "Admin";

  return {
    name: data.name || "Finance Manager",
    email: data.email || "finance@example.com",
    company: data.company || "Sample Business Pvt Ltd",
    role: safeRole,
    monthlyVolume: data.monthlyVolume || "100 - 300",
  };
}

export default function ProfilePage() {
  const router = useRouter();

  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    email: "",
    company: "",
    role: "Admin",
    monthlyVolume: "100 - 300",
  });

  const [saved, setSaved] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedUser = window.localStorage.getItem("auditflow-user");

    if (!savedUser) {
      router.push("/login");
      return;
    }

    try {
      const parsedUser = JSON.parse(savedUser) as Partial<UserProfile>;
      const normalizedUser = normalizeProfile(parsedUser);

      setProfile(normalizedUser);
      window.localStorage.setItem(
        "auditflow-user",
        JSON.stringify(normalizedUser)
      );
    } catch {
      window.localStorage.removeItem("auditflow-user");
      router.push("/login");
      return;
    }

    setLoaded(true);
  }, [router]);

  function updateProfile(field: keyof UserProfile, value: string) {
    setSaved(false);

    setProfile((currentProfile) => ({
      ...currentProfile,
      [field]: value,
    }));
  }

  function saveProfile() {
    window.localStorage.setItem("auditflow-user", JSON.stringify(profile));
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 1800);
  }

  function logout() {
    window.localStorage.removeItem("auditflow-user");
    router.push("/login");
  }

  if (!loaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
            <User size={32} />
          </div>

          <h1 className="mt-5 text-2xl font-black">Loading Profile</h1>
          <p className="mt-2 text-sm text-slate-400">
            Preparing your workspace account.
          </p>
        </div>
      </main>
    );
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
            <p className="text-xs text-slate-400">My Profile</p>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-5 py-2 text-sm font-bold text-red-300 hover:bg-red-400/20"
          >
            <LogOut size={17} />
            Logout
          </button>
        </nav>

        <section className="pt-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr]">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                Individual workspace profile
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
                Manage your personal account details.
              </h1>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Update your name, email, company workspace, role, and monthly
                invoice volume used across the AuditFlow AI dashboard.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <User className="text-cyan-300" />
                <p className="mt-4 text-2xl font-black">{profile.name}</p>
                <p className="text-sm text-slate-400">Profile name</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <Building2 className="text-emerald-300" />
                <p className="mt-4 text-2xl font-black">{profile.company}</p>
                <p className="text-sm text-slate-400">Company workspace</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <ShieldCheck className="text-yellow-300" />
                <p className="mt-4 text-2xl font-black">{profile.role}</p>
                <p className="text-sm text-slate-400">Access role</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-400 text-4xl font-black text-slate-950">
                  {profile.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h2 className="text-3xl font-black">{profile.name}</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {profile.email}
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                <div className="flex gap-3">
                  <Lock className="mt-1 shrink-0 text-cyan-300" size={22} />
                  <div>
                    <h3 className="font-black text-cyan-200">
                      Demo Profile Storage
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Profile information is currently saved in browser local
                      storage for the frontend MVP. Real user accounts can be
                      connected during backend integration.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="/team"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
              >
                <User size={17} />
                Open Team Members
              </a>

              <a
                href="/settings"
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
              >
                <Building2 size={17} />
                Workspace Settings
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <ClipboardCheck size={30} />
                </div>

                <div>
                  <h2 className="text-2xl font-black">Profile Details</h2>
                  <p className="text-sm text-slate-400">
                    Edit personal and workspace information.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-5">
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                    <User size={16} />
                    Full name
                  </span>

                  <input
                    value={profile.name}
                    onChange={(event) =>
                      updateProfile("name", event.target.value)
                    }
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none focus:border-cyan-400"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                    <Mail size={16} />
                    Email address
                  </span>

                  <input
                    type="email"
                    value={profile.email}
                    onChange={(event) =>
                      updateProfile("email", event.target.value)
                    }
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none focus:border-cyan-400"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                    <Building2 size={16} />
                    Company workspace
                  </span>

                  <input
                    value={profile.company}
                    onChange={(event) =>
                      updateProfile("company", event.target.value)
                    }
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none focus:border-cyan-400"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                    <ShieldCheck size={16} />
                    Role
                  </span>

                  <select
                    value={profile.role}
                    onChange={(event) =>
                      updateProfile("role", event.target.value)
                    }
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none focus:border-cyan-400"
                  >
                    {roleOptions.map((role) => (
                      <option key={role}>{role}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                    <ClipboardCheck size={16} />
                    Monthly invoice volume
                  </span>

                  <select
                    value={profile.monthlyVolume}
                    onChange={(event) =>
                      updateProfile("monthlyVolume", event.target.value)
                    }
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none focus:border-cyan-400"
                  >
                    {volumeOptions.map((volume) => (
                      <option key={volume}>{volume}</option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                onClick={saveProfile}
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-black text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300"
              >
                {saved ? <CheckCircle2 size={20} /> : <Save size={20} />}
                {saved ? "Profile Saved" : "Save Profile"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}