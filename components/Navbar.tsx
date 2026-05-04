"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Menu, ShoppingBag, Sparkles } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { clearCurrentDemoUser, getCurrentDemoUser, type DemoUser } from "@/lib/demo-auth";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" }
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<DemoUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const syncUser = () => {
      setUser(getCurrentDemoUser());
      setIsReady(true);
    };

    syncUser();
    window.addEventListener("storage", syncUser);
    window.addEventListener("suncart-auth-change", syncUser);

    return () => {
      window.removeEventListener("storage", syncUser);
      window.removeEventListener("suncart-auth-change", syncUser);
    };
  }, []);

  const handleLogout = () => {
    clearCurrentDemoUser();
    toast.success("Logged out successfully");
    router.push("/");
    router.refresh();
  };

  const avatar = user?.image || "https://api.dicebear.com/9.x/thumbs/svg?seed=suncart-user";

  return (
    <div className="sticky top-0 z-50 border-b border-orange-100/80 bg-white/85 backdrop-blur-xl">
      <div className="summer-container navbar min-h-20 px-0">
        <div className="navbar-start gap-2">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <Menu className="h-5 w-5" />
            </div>
            <ul tabIndex={0} className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-2xl border border-orange-100 bg-white p-3 shadow-xl">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link className={pathname === link.href ? "font-bold text-orange-600" : ""} href={link.href}>{link.label}</Link>
                </li>
              ))}
              {user && (
                <li>
                  <Link className={pathname.startsWith("/my-profile") ? "font-bold text-orange-600" : ""} href="/my-profile">My Profile</Link>
                </li>
              )}
            </ul>
          </div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-orange-400 via-amber-300 to-teal-300 shadow-glow">
              <ShoppingBag className="h-6 w-6 text-white" />
            </span>
            <span>
              <span className="block text-2xl font-black tracking-tight text-neutral">SunCart</span>
              <span className="hidden text-xs font-semibold uppercase tracking-[0.28em] text-orange-500 sm:block">Summer Shop</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 rounded-full bg-orange-50/80 px-2 py-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className={`rounded-full px-5 font-semibold ${pathname === link.href ? "bg-white text-orange-600 shadow-sm" : "text-neutral/75"}`} href={link.href}>{link.label}</Link>
              </li>
            ))}
            {user && (
              <li>
                <Link className={`rounded-full px-5 font-semibold ${pathname.startsWith("/my-profile") ? "bg-white text-orange-600 shadow-sm" : "text-neutral/75"}`} href="/my-profile">My Profile</Link>
              </li>
            )}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {!isReady ? (
            <span className="loading loading-spinner loading-sm text-orange-500" />
          ) : user ? (
            <>
              <Link href="/my-profile" className="tooltip tooltip-bottom" data-tip={user.name || "Profile"}>
                <div className="avatar">
                  <div className="h-11 w-11 overflow-hidden rounded-full ring-2 ring-orange-200 ring-offset-2">
                    <img src={avatar} alt={user.name || "User avatar"} className="h-full w-full object-cover" />
                  </div>
                </div>
              </Link>
              <button onClick={handleLogout} className="btn btn-summer-outline hidden sm:inline-flex">
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost hidden sm:inline-flex">
                <span>👤</span> Login
              </Link>
              <Link href="/register" className="btn btn-summer">
                <Sparkles className="h-4 w-4" /> Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
