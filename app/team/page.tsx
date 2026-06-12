"use client";

import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Trash2,
  UserPlus,
  Users,
} from "lucide-react";

type Role = "Admin" | "Finance Manager" | "Reviewer" | "Auditor" | "Viewer";
type Status = "Active" | "Invited";

type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: Status;
};

const initialMembers: TeamMember[] = [
  {
    id: "TM-001",
    name: "Finance Manager",
    email: "finance@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "TM-002",
    name: "Accounts Reviewer",
    email: "reviewer@example.com",
    role: "Reviewer",
    status: "Active",
  },
  {
    id: "TM-003",
    name: "Audit Assistant",
    email: "audit@example.com",
    role: "Auditor",
    status: "Invited",
  },
];

const roles: Role[] = ["Admin", "Finance Manager", "Reviewer", "Auditor", "Viewer"];

function roleClass(role: Role) {
  if (role === "Admin") {
    return "border-cyan-400/20 bg-cyan-400/10 text-cyan-300";
  }

  if (role === "Finance Manager") {
    return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
  }

  if (role === "Reviewer") {
    return "border-yellow-400/20 bg-yellow-400/10 text-yellow-300";
  }

  if (role === "Auditor") {
    return "border-purple-400/20 bg-purple-400/10 text-purple-300";
  }

  return "border-slate-400/20 bg-slate-400/10 text-slate-300";
}

function statusClass(status: Status) {
  if (status === "Active") {
    return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
  }

  return "border-yellow-400/20 bg-yellow-400/10 text-yellow-300";
}

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>(initialMembers);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("Viewer");
  const [saved, setSaved] = useState(false);

  const activeCount = members.filter((member) => member.status === "Active").length;
  const invitedCount = members.filter((member) => member.status === "Invited").length;
  const adminCount = members.filter((member) => member.role === "Admin").length;

  function inviteMember(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newMember: TeamMember = {
      id: `TM-${String(members.length + 1).padStart(3, "0")}`,
      name,
      email,
      role,
      status: "Invited",
    };

    setMembers((currentMembers) => [newMember, ...currentMembers]);
    setName("");
    setEmail("");
    setRole("Viewer");
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 1800);
  }

  function updateRole(id: string, newRole: Role) {
    setMembers((currentMembers) =>
      currentMembers.map((member) =>
        member.id === id ? { ...member, role: newRole } : member
      )
    );
  }

  function removeMember(id: string) {
    setMembers((currentMembers) =>
      currentMembers.filter((member) => member.id !== id)
    );
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
            <p className="text-xs text-slate-400">Team Members</p>
          </div>

          <a
            href="/settings"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300"
          >
            Workspace Settings
          </a>
        </nav>

        <section className="pt-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr]">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                Access control workspace
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
                Manage who can access invoice audits.
              </h1>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Invite finance users, assign roles, control review permissions,
                and keep audit operations organized across the company.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <Users className="text-cyan-300" />
                <p className="mt-4 text-3xl font-black">{members.length}</p>
                <p className="text-sm text-slate-400">Total members</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <CheckCircle2 className="text-emerald-300" />
                <p className="mt-4 text-3xl font-black">{activeCount}</p>
                <p className="text-sm text-slate-400">Active users</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <ShieldCheck className="text-yellow-300" />
                <p className="mt-4 text-3xl font-black">{adminCount}</p>
                <p className="text-sm text-slate-400">Admins</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[0.75fr_1.25fr]">
            <form
              onSubmit={inviteMember}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <UserPlus size={30} />
                </div>

                <div>
                  <h2 className="text-2xl font-black">Invite Member</h2>
                  <p className="text-sm text-slate-400">
                    Add a user to this workspace.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-5">
                <label className="block">
                  <span className="mb-2 text-sm font-bold text-slate-300">
                    Full name
                  </span>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Example: Accounts Manager"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
                    <Mail size={16} />
                    Email address
                  </span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="member@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 text-sm font-bold text-slate-300">
                    Role
                  </span>
                  <select
                    value={role}
                    onChange={(event) => setRole(event.target.value as Role)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm outline-none focus:border-cyan-400"
                  >
                    {roles.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
              </div>

              <button className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-black text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300">
                <UserPlus size={20} />
                {saved ? "Invitation Added" : "Invite Member"}
              </button>

              <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                <h3 className="font-black text-cyan-200">Role Access</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Admins can manage settings and users. Reviewers can resolve
                  flagged invoices. Viewers can only inspect reports and records.
                </p>
              </div>
            </form>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h2 className="text-2xl font-black">Workspace Members</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {activeCount} active users, {invitedCount} invited users.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                  >
                    <div className="grid gap-5 xl:grid-cols-[1fr_auto] xl:items-center">
                      <div className="flex gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl font-black text-cyan-300">
                          {member.name.charAt(0)}
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-xl font-black">{member.name}</h3>

                            <span
                              className={`rounded-full border px-3 py-1 text-xs font-bold ${roleClass(
                                member.role
                              )}`}
                            >
                              {member.role}
                            </span>

                            <span
                              className={`rounded-full border px-3 py-1 text-xs font-bold ${statusClass(
                                member.status
                              )}`}
                            >
                              {member.status}
                            </span>
                          </div>

                          <p className="mt-2 text-sm text-slate-400">
                            {member.id} · {member.email}
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                        <select
                          value={member.role}
                          onChange={(event) =>
                            updateRole(member.id, event.target.value as Role)
                          }
                          className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm font-bold outline-none focus:border-cyan-400"
                        >
                          {roles.map((item) => (
                            <option key={item}>{item}</option>
                          ))}
                        </select>

                        <button
                          onClick={() => removeMember(member.id)}
                          className="flex items-center justify-center gap-2 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm font-bold text-red-300 hover:bg-red-400/20"
                        >
                          <Trash2 size={17} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {members.length === 0 && (
                <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-10 text-center">
                  <Users className="mx-auto text-cyan-300" size={48} />
                  <h3 className="mt-4 text-2xl font-black">No members found</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Invite a team member to begin building your workspace.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}