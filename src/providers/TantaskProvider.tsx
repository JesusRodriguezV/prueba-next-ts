"use client"
import { BASE_PATH } from "@src/constants/enviroments"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { SessionProvider } from "next-auth/react"
import * as React from "react"
// import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"

export function TanstackProvider(props: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 1000,
      },
    },
  })

  return (
    <SessionProvider basePath={`${BASE_PATH}/api/auth`}>
      <QueryClientProvider client={queryClient}>
        {props.children}
        {<ReactQueryDevtools initialIsOpen={false} position="right" />}
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default TanstackProvider
