"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import { queryClient } from "@/lib/query-client";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

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