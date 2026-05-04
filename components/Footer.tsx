import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-orange-100 bg-neutral text-neutral-content">
      <div className="summer-container grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black text-white">SunCart</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
            Your curated summer essentials store for sunny trips, beach days, outdoor care and daily comfort.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="btn btn-circle btn-sm bg-white/10 text-white hover:bg-orange-500" aria-label="Facebook" href="#"><span className="text-sm font-black">f</span></a>
            <a className="btn btn-circle btn-sm bg-white/10 text-white hover:bg-orange-500" aria-label="Instagram" href="#"><span className="text-xs font-black">ig</span></a>
            <a className="btn btn-circle btn-sm bg-white/10 text-white hover:bg-orange-500" aria-label="X" href="#"><span className="text-sm font-black">x</span></a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><Link className="hover:text-orange-300" href="/">Home</Link></li>
            <li><Link className="hover:text-orange-300" href="/products">Products</Link></li>
            <li><Link className="hover:text-orange-300" href="/my-profile">My Profile</Link></li>
            <li><a className="hover:text-orange-300" href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><Phone className="h-4 w-4 text-orange-300" /> +880 1700-000000</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-orange-300" /> support@suncart.example</li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-orange-300" /> Dhaka, Bangladesh</li>
            <li className="flex gap-3"><span className="text-orange-300">✓</span> Secure checkout demo</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        © {new Date().getFullYear()} SunCart. Built for a summer ecommerce assignment.
      </div>
    </footer>
  );
}
