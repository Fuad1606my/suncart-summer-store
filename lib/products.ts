import products from "@/data/products.json";

export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  stock: number;
  description: string;
  image: string;
  category: string;
  badge: string;
};

export const allProducts = products as Product[];

export function getPopularProducts() {
  return allProducts.slice(0, 3);
}

export function getProductById(id: string | number) {
  return allProducts.find((product) => product.id === Number(id));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
}
