"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, PackageCheck, ShieldCheck, Star, Truck } from "lucide-react";
import { use, useEffect, useState } from "react";
import { formatPrice, getProductById } from "@/lib/products";
import { getCurrentDemoUser } from "@/lib/demo-auth";

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const product = getProductById(id);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentDemoUser();
    if (!currentUser) {
      router.replace(`/login?redirect=/products/${id}`);
      return;
    }
    setIsAllowed(true);
  }, [id, router]);

  if (!product) {
    return (
      <section className="summer-container py-16 text-center">
        <h1 className="text-3xl font-black text-neutral">Product not found</h1>
        <Link href="/products" className="btn btn-summer mt-6">Back to products</Link>
      </section>
    );
  }

  if (!isAllowed) {
    return (
      <section className="summer-container grid min-h-[60vh] place-items-center py-12">
        <span className="loading loading-spinner loading-lg text-orange-500" />
      </section>
    );
  }

  return (
    <section className="summer-container py-12 md:py-16">
      <Link href="/products" className="btn btn-ghost mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to products
      </Link>

      <div className="grid gap-10 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-xl md:grid-cols-2 md:p-10">
        <div className="rounded-[2rem] bg-orange-50 p-5">
          <Image src={product.image} alt={product.name} width={720} height={540} className="h-full w-full rounded-[1.5rem] object-cover" priority />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-warning font-bold">{product.badge}</span>
            <span className="badge badge-outline border-teal-200 bg-teal-50 text-teal-700">{product.category}</span>
          </div>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.28em] text-teal-600">{product.brand}</p>
          <h1 className="mt-2 text-balance text-4xl font-black tracking-tight text-neutral md:text-5xl">{product.name}</h1>
          <p className="mt-5 text-lg leading-8 text-neutral/70">{product.description}</p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 rounded-2xl bg-amber-50 px-4 py-3 font-black text-amber-600">
              <Star className="h-5 w-5 fill-current" /> {product.rating} Rating
            </div>
            <div className="rounded-2xl bg-orange-50 px-4 py-3 text-3xl font-black text-orange-600">{formatPrice(product.price)}</div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-base-100 p-4"><PackageCheck className="mb-2 h-5 w-5 text-orange-500" /><b>{product.stock}</b><p className="text-sm text-neutral/60">Items in stock</p></div>
            <div className="rounded-2xl bg-base-100 p-4"><Truck className="mb-2 h-5 w-5 text-orange-500" /><b>Fast</b><p className="text-sm text-neutral/60">Delivery ready</p></div>
            <div className="rounded-2xl bg-base-100 p-4"><ShieldCheck className="mb-2 h-5 w-5 text-orange-500" /><b>Secure</b><p className="text-sm text-neutral/60">Auth protected</p></div>
          </div>
          <button className="btn btn-summer btn-lg mt-8">Place Order</button>
        </div>
      </div>
    </section>
  );
}
