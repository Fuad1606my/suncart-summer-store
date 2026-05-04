import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { SummerCareTips, TopBrands } from "@/components/Sections";
import { getPopularProducts } from "@/lib/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const popularProducts = getPopularProducts();

  return (
    <>
      <Hero />
      <section className="summer-container py-16">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="section-kicker">Popular Products</span>
            <h2 className="section-title">Hot picks from the summer shelf</h2>
            <p className="mt-4 max-w-2xl text-neutral/65">
              Three popular products are loaded from the static JSON product file as required.
            </p>
          </div>
          <Link href="/products" className="btn btn-summer-outline">
            See all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {popularProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
      <SummerCareTips />
      <TopBrands />
    </>
  );
}
