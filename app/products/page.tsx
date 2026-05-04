import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/lib/products";

export const metadata = {
  title: "Products | SunCart"
};

export default function ProductsPage() {
  const categories = Array.from(new Set(allProducts.map((product) => product.category)));

  return (
    <section className="summer-container py-12 md:py-16">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 to-amber-400 p-8 text-white shadow-glow md:p-12">
        <span className="inline-flex rounded-full bg-white/20 px-4 py-1 text-sm font-bold">Products</span>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Summer essentials collection</h1>
        <p className="mt-4 max-w-2xl text-white/85">Browse all static JSON products. Product details are protected, so users must log in before viewing each full item page.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => <span key={category} className="badge border-0 bg-white text-orange-600">{category}</span>)}
        </div>
      </div>
      <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {allProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
