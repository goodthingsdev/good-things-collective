"use client";

import { QueryClientProvider } from "@tanstack/react-query";

import Layout from "@/components/Layout";
import { queryClient } from "@/lib/query-client";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>{children}</Layout>
    </QueryClientProvider>
  );
};

export default ClientLayout;
