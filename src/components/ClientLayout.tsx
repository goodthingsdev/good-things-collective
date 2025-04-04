"use client";

import { QueryClientProvider } from "@tanstack/react-query";

import Layout from "@/components/Layout";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { queryClient } from "@/lib/query-client";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default ClientLayout;
