"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignupPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home - signup modal will handle authentication
    router.replace("/");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-slate-600">Redirecting...</p>
    </div>
  );
}
