"use client";

import {
  QueryClient,
  QueryClientProvider as TanStackProvider,
} from "@tanstack/react-query";
import { useState } from "react";

export default function ReactQueryProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return <TanStackProvider client={queryClient}>{children}</TanStackProvider>;
}
