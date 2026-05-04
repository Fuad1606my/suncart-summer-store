import { Droplets, Leaf, Sun } from "lucide-react";

const tips = [
  { icon: Droplets, title: "Hydrate before thirst", text: "Carry a cold bottle and take small sips throughout the day." },
  { icon: "spf", title: "Use SPF daily", text: "Apply sun protection before outdoor classes, work or travel." },
  { icon: Leaf, title: "Choose breathable outfits", text: "Linen and cotton pieces keep airflow comfortable in humid weather." },
  { icon: Sun, title: "Avoid peak heat", text: "Plan outdoor errands in the morning or late afternoon when possible." }
];

const brands = ["SunShade", "AquaCool", "BreezeFit", "GlowCare"];

export function SummerCareTips() {
  return (
    <section className="summer-container py-14">
      <div className="text-center">
        <span className="section-kicker">Stay fresh</span>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral md:text-5xl">Summer Care Tips</h2>
        <p className="mx-auto mt-4 max-w-2xl text-neutral/65">Small habits that make sunny weather healthier and more comfortable.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {tips.map((tip) => {
          const Icon = typeof tip.icon === "string" ? null : tip.icon;
          return (
            <div key={tip.title} className="card-lift rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-100 text-orange-600">
                {Icon ? <Icon className="h-6 w-6" /> : <span className="text-xs font-black">SPF</span>}
              </div>
              <h3 className="mt-5 text-xl font-black text-neutral">{tip.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral/65">{tip.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function TopBrands() {
  return (
    <section className="summer-container py-14">
      <div className="rounded-[2rem] bg-gradient-to-br from-neutral via-neutral to-orange-950 p-6 text-white md:p-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-bold text-orange-200">Top Brands</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Trusted summer picks</h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-white/65">Static brand cards designed to make the ecommerce homepage feel complete and professional.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand, index) => (
            <div key={brand} className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur">
              <p className="text-sm font-semibold text-orange-200">Brand 0{index + 1}</p>
              <h3 className="mt-3 text-2xl font-black">{brand}</h3>
              <p className="mt-4 text-sm text-white/60">Curated seasonal products for warm days.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
