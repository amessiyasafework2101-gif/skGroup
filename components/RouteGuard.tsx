
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../stores/auth-store";

import { WanderingEyes } from "@/components/loading-ui/wandering-eyes";


export default function RouteGuard({
  children,
  mode,
}: {
  children: React.ReactNode;
  mode: "protected" | "guest" | "verification";
}) {
  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);

  useEffect(() => {
    if (loading) return;

    if (mode === "protected") {
      if (!user) {
        router.replace("/login");
      } else if (!user.emailVerified) {
        router.replace("/verification");
      }
    }

    if (mode === "guest" && user) {
      router.replace(
        user.emailVerified
          ? "/dashboard"
          : "/verification"
      );
    }

    if (mode === "verification") {
      if (!user) {
        router.replace("/login");
      } else if (user.emailVerified) {
        router.replace("/dashboard");
      }
    }
  }, [user, loading, mode, router]);

  if (loading) {
    return <div className="h-[100vh] w-full flex justify-center items-center">
     <WanderingEyes className="h-18 w-[180px]" />
    </div>;
  }

  if (mode === "protected") {
    if (!user || !user.emailVerified) {
      return <p>Redirecting...</p>;
    }
  }

  if (mode === "guest" && user) {
    return <p>Redirecting...</p>;
  }

  if (mode === "verification") {
    if (!user || user.emailVerified) {
      return <p>Redirecting...</p>;
    }
  }

  return children;
}
