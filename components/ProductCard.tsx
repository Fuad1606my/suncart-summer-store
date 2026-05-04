import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { formatPrice, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card card-lift overflow-hidden border border-orange-100 bg-white shadow-sm">
      <figure className="relative bg-orange-50 p-4">
        <span className="badge badge-warning absolute left-4 top-4 z-10 font-bold text-neutral">{product.badge}</span>
        <Image src={product.image} alt={product.name} width={720} height={540} className="h-56 w-full rounded-2xl object-cover" priority={product.id <= 3} />
      </figure>
      <div className="card-body gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">{product.brand}</p>
            <h3 className="mt-1 text-xl font-black text-neutral">{product.name}</h3>
          </div>
          <div className="badge badge-outline border-orange-200 bg-orange-50 text-orange-600">{product.category}</div>
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-neutral/65">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 font-bold text-amber-500"><Star className="h-4 w-4 fill-current" /> {product.rating}</div>
          <div className="text-2xl font-black text-orange-600">{formatPrice(product.price)}</div>
        </div>
        <div className="card-actions items-center justify-between">
          <span className="text-sm font-semibold text-neutral/60">Stock: {product.stock}</span>
          <Link href={`/products/${product.id}`} className="btn btn-summer btn-sm">
            <ShoppingCart className="h-4 w-4" /> View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
