"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Camera, Mail, Pencil, ShieldCheck } from "lucide-react";
import { getCurrentDemoUser, type DemoUser } from "@/lib/demo-auth";

export default function MyProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<DemoUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentDemoUser();
    if (!currentUser) {
      router.replace("/login?redirect=/my-profile");
      return;
    }
    setUser(currentUser);
    setIsReady(true);
  }, [router]);

  if (!isReady || !user) {
    return (
      <section className="summer-container grid min-h-[60vh] place-items-center py-12">
        <span className="loading loading-spinner loading-lg text-orange-500" />
      </section>
    );
  }

  const avatar = user.image || "https://api.dicebear.com/9.x/thumbs/svg?seed=suncart-user";

  return (
    <section className="summer-container py-12 md:py-16">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-xl">
        <div className="bg-gradient-to-r from-orange-500 via-amber-400 to-teal-400 p-10 text-white">
          <span className="inline-flex rounded-full bg-white/20 px-4 py-1 text-sm font-bold">Protected Profile</span>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">My Profile</h1>
          <p className="mt-3 max-w-xl text-white/85">Logged-in account information for the registered SunCart user.</p>
        </div>
        <div className="grid gap-8 p-6 md:grid-cols-[260px_1fr] md:p-10">
          <div className="text-center">
            <div className="avatar">
              <div className="h-52 w-52 rounded-[2rem] ring-4 ring-orange-100 ring-offset-4">
                <img src={avatar} alt={user.name || "User photo"} className="h-full w-full object-cover" />
              </div>
            </div>
            <Link href="/my-profile/edit" className="btn btn-summer mt-8 w-full">
              <Pencil className="h-4 w-4" /> Update Profile
            </Link>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl bg-orange-50 p-6">
              <div className="flex items-center gap-3 text-orange-600"><span>👤</span><span className="font-black">Name</span></div>
              <p className="mt-3 text-2xl font-black text-neutral">{user.name || "No name provided"}</p>
            </div>
            <div className="rounded-3xl bg-teal-50 p-6">
              <div className="flex items-center gap-3 text-teal-700"><Mail className="h-5 w-5" /><span className="font-black">Email</span></div>
              <p className="mt-3 break-all text-2xl font-black text-neutral">{user.email}</p>
            </div>
            <div className="rounded-3xl bg-amber-50 p-6">
              <div className="flex items-center gap-3 text-amber-700"><Camera className="h-5 w-5" /><span className="font-black">Photo</span></div>
              <p className="mt-3 break-all text-sm leading-6 text-neutral/70">A default avatar is generated automatically. You can update it from the profile edit page.</p>
            </div>
            <div className="rounded-3xl bg-base-100 p-6">
              <div className="flex items-center gap-3 text-orange-600"><ShieldCheck className="h-5 w-5" /><span className="font-black">Session Status</span></div>
              <p className="mt-3 text-neutral/70">Authenticated and allowed to view protected pages.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
