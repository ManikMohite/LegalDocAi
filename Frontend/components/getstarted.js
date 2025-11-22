


"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function GetStartedButton() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleClick = () => {
    if (status === "authenticated") {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="mt-8 bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition"
    >
      Get Started
    </button>
  );
}
