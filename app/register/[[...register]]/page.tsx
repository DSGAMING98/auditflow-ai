import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md">
        <SignUp />
      </div>
    </main>
  );
}