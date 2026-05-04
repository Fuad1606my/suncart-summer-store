import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "animate.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "SunCart | Summer Essentials Store",
  description: "A fresh summer ecommerce store for sunglasses, skincare, outfits and beach essentials.",
  keywords: ["summer ecommerce", "Next.js", "BetterAuth", "SunCart"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="suncart">
      <body className={`${poppins.variable} font-display antialiased`}>
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
        <div className="min-h-screen bg-summer-radial text-neutral">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
