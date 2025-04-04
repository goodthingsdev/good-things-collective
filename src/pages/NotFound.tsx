"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-collective-beige pt-24">
      <div className="text-center px-6">
        <h1 className="text-7xl md:text-9xl font-bold mb-4">404</h1>
        <div className="mb-8">
          <img 
            src="/uploads/762fefac-5d79-4490-9917-579f60d97be4.png" 
            alt="Page not found" 
            className="w-64 mx-auto"
          />
        </div>
        <p className="text-xl md:text-2xl text-collective-black/80 mb-8">Oops! This page doesn't exist.</p>
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
