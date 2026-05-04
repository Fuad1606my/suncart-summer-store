import RegisterForm from "@/components/RegisterForm";

export const metadata = {
  title: "Register | SunCart"
};

export default function RegisterPage() {
  return (
    <section className="summer-container grid min-h-[calc(100vh-18rem)] place-items-center py-12">
      <RegisterForm />
    </section>
  );
}
