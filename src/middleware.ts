import { withAuth } from "next-auth/middleware"
import type { NextRequest } from "next/server"
import customLogger from "./utils/logger/customLogger"
import CSPHeaders from "./utils/CSPHeaders"

export default withAuth((request: NextRequest) => {
  customLogger.debug(request.url)
  customLogger.debug("entra middleware.ts")
  customLogger.debug("node env", process.env.NODE_ENV)

  // se agregan los headers de CSP
  const response = CSPHeaders(request)

  return response
})

export const config = {
  matcher: [
    "/",
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
}
