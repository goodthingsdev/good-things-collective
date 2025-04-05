"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-collective-beige pt-24">
      <div className="px-6 text-center">
        <h1 className="mb-4 text-7xl font-bold md:text-9xl">404</h1>
        <div className="mb-8">
          <img
            src="/uploads/762fefac-5d79-4490-9917-579f60d97be4.png"
            alt="Page not found"
            className="mx-auto w-64"
          />
        </div>
        <p className="mb-8 text-xl text-collective-black/80 md:text-2xl">
          Oops! This page doesn't exist.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
