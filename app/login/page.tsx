import { Suspense } from "react";
import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Login | SunCart"
};

export default function LoginPage() {
  return (
    <section className="summer-container grid min-h-[calc(100vh-18rem)] place-items-center py-12">
      <Suspense fallback={<span className="loading loading-spinner text-orange-500" />}>
        <LoginForm />
      </Suspense>
    </section>
  );
}
