"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, Save } from "lucide-react";
import toast from "react-hot-toast";
import { updateDemoUserProfile } from "@/lib/demo-auth";

type Props = {
  initialName: string;
  initialImage: string;
};

export default function UpdateProfileForm({ initialName, initialImage }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const form = new FormData(event.currentTarget);

    const result = updateDemoUserProfile(
      String(form.get("name") || ""),
      String(form.get("image") || "")
    );

    setLoading(false);

    if (!result.ok) {
      toast.error(result.message || "Profile update failed.");
      return;
    }

    toast.success("Profile updated successfully");
    router.push("/my-profile");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl space-y-4 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-xl md:p-8">
      <label className="form-control">
        <span className="label-text font-bold">Name</span>
        <div className="input input-bordered flex items-center gap-2 bg-orange-50/50">
          <span className="text-orange-500">👤</span>
          <input name="name" defaultValue={initialName} className="grow bg-transparent" required />
        </div>
      </label>
      <label className="form-control">
        <span className="label-text font-bold">Image URL</span>
        <div className="input input-bordered flex items-center gap-2 bg-orange-50/50">
          <Camera className="h-4 w-4 text-orange-500" />
          <input name="image" type="url" defaultValue={initialImage} placeholder="https://example.com/photo.jpg" className="grow bg-transparent" />
        </div>
      </label>
      <button className="btn btn-summer w-full" disabled={loading}>
        {loading ? <span className="loading loading-spinner loading-sm" /> : <><Save className="h-4 w-4" /> Update Information</>}
      </button>
    </form>
  );
}
