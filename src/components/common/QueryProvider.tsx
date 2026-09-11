import { useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * Scoped react-query provider. Mounted only inside subtrees that actually
 * run queries/mutations (footer enquiry strip, contact pages) so the
 * query chunk stays out of the landing critical path.
 */
export default function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
