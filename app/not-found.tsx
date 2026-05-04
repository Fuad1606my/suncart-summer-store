import Link from "next/link";

export default function NotFound() {
  return (
    <section className="summer-container grid min-h-[calc(100vh-18rem)] place-items-center py-12 text-center">
      <div className="max-w-xl rounded-[2rem] bg-white p-10 shadow-xl">
        <p className="text-7xl font-black text-orange-500">404</p>
        <h1 className="mt-4 text-3xl font-black text-neutral">Page not found</h1>
        <p className="mt-3 text-neutral/65">The page or product you are looking for does not exist.</p>
        <Link href="/" className="btn btn-summer mt-6">Go Home</Link>
      </div>
    </section>
  );
}
