"use client";

//react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//types
import { ReactNode } from "react";

interface ITanstackQueryProps {
  children: Readonly<ReactNode>;
}

export default function TanstackQuery({ children }: ITanstackQueryProps) {
  const client = new QueryClient({
    defaultOptions: {
      mutations: { retry: 1 },
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
