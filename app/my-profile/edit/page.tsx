"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UpdateProfileForm from "@/components/UpdateProfileForm";
import { getCurrentDemoUser, type DemoUser } from "@/lib/demo-auth";

export default function EditProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<DemoUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentDemoUser();
    if (!currentUser) {
      router.replace("/login?redirect=/my-profile/edit");
      return;
    }
    setUser(currentUser);
    setIsReady(true);
  }, [router]);

  if (!isReady || !user) {
    return (
      <section className="summer-container grid min-h-[60vh] place-items-center py-12">
        <span className="loading loading-spinner loading-lg text-orange-500" />
      </section>
    );
  }

  return (
    <section className="summer-container py-12 md:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <span className="section-kicker">Profile Update</span>
        <h1 className="section-title mt-3">Update Information</h1>
        <p className="mt-4 text-neutral/65">Change your display name or image URL.</p>
      </div>
      <UpdateProfileForm initialName={user.name || ""} initialImage={user.image || ""} />
    </section>
  );
}
