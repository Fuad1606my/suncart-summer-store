import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgePercent, ShieldCheck, Sparkles, Truck } from "lucide-react";

const highlights = [
  { icon: BadgePercent, label: "Summer Sale 50% OFF" },
  { icon: Truck, label: "Fast City Delivery" },
  { icon: ShieldCheck, label: "Protected Checkout" }
];

export default function Hero() {
  return (
    <section className="summer-container pt-10 md:pt-16">
      <div className="hero overflow-hidden rounded-[2.5rem] border border-orange-100 bg-white shadow-glow">
        <div className="hero-content grid gap-10 p-6 md:grid-cols-2 md:p-12 lg:p-16">
          <div className="max-w-xl animate__animated animate__fadeInLeft">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-extrabold text-orange-600">
              <Sparkles className="h-4 w-4" /> Hot Deals are live
            </div>
            <h1 className="text-balance text-5xl font-black leading-tight tracking-tight text-neutral md:text-6xl">
              Refresh your summer with bright essentials.
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral/70">
              Browse sunglasses, skincare, beach accessories, hydration gear and outfits made for sunshine-ready days.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="btn btn-summer btn-lg">
                Shop Products <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="#care-tips" className="btn btn-summer-outline btn-lg">Summer Tips</a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl bg-orange-50 p-4 text-sm font-bold text-neutral">
                  <item.icon className="mb-2 h-5 w-5 text-orange-500" /> {item.label}
                </div>
              ))}
            </div>
          </div>
          <div className="animate__animated animate__fadeInRight">
            <div className="relative min-h-[420px] rounded-[2rem] bg-gradient-to-br from-amber-200 via-orange-100 to-teal-100 p-6">
              <div className="absolute right-6 top-6 rounded-3xl bg-white/80 px-5 py-3 text-center shadow-xl backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-500">Offer</p>
                <p className="text-3xl font-black text-neutral">50% OFF</p>
              </div>
              <div className="absolute bottom-8 left-6 max-w-xs rounded-3xl bg-neutral p-5 text-white shadow-2xl">
                <p className="text-sm font-semibold text-orange-200">Limited stock</p>
                <p className="mt-1 text-xl font-black">Beach-ready bundle under $59</p>
              </div>
              <Image src="/products/fan.svg" alt="Summer essentials hero product" width={720} height={540} className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
