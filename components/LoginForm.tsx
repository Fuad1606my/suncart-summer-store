"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import toast from "react-hot-toast";
import { loginDemoUser } from "@/lib/demo-auth";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const form = new FormData(event.currentTarget);

    const result = loginDemoUser(
      String(form.get("email") || ""),
      String(form.get("password") || "")
    );

    setLoading(false);

    if (!result.ok) {
      toast.error(result.message || "Login failed. Please check your credentials.");
      return;
    }

    toast.success("Welcome back to SunCart");
    router.push(redirectTo);
    router.refresh();
  };

  const handleGoogle = () => {
    toast.error("Google login needs Google Client ID and Secret. Use email/password for local testing.");
  };

  return (
    <div className="w-full max-w-md rounded-[2rem] border border-orange-100 bg-white p-6 shadow-xl md:p-8">
      <div className="text-center">
        <span className="section-kicker">Login</span>
        <h1 className="text-3xl font-black tracking-tight text-neutral">Sign in to continue</h1>
        <p className="mt-3 text-sm leading-6 text-neutral/60">Protected product details and profile pages need authentication.</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <label className="form-control">
          <span className="label-text font-bold">Email</span>
          <div className="input input-bordered flex items-center gap-2 bg-orange-50/50">
            <Mail className="h-4 w-4 text-orange-500" />
            <input name="email" type="email" placeholder="you@example.com" className="grow bg-transparent" required />
          </div>
        </label>
        <label className="form-control">
          <span className="label-text font-bold">Password</span>
          <div className="input input-bordered flex items-center gap-2 bg-orange-50/50">
            <span className="text-orange-500">🔒</span>
            <input name="password" type="password" placeholder="minimum 8 characters" className="grow bg-transparent" minLength={8} required />
          </div>
        </label>
        <button className="btn btn-summer w-full" disabled={loading}>
          {loading ? <span className="loading loading-spinner loading-sm" /> : "Login"}
        </button>
      </form>

      <div className="divider text-xs uppercase tracking-[0.22em] text-neutral/40">or</div>
      <button type="button" onClick={handleGoogle} className="btn btn-outline w-full border-orange-200 bg-white hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-orange-500 text-xs font-black text-white">G</span>
        Continue with Google
      </button>

      <p className="mt-6 text-center text-sm text-neutral/65">
        New to SunCart? <Link href="/register" className="font-black text-orange-600 hover:underline">Create an account</Link>
      </p>
    </div>
  );
}
