import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const hostname = request.headers.get("host") || ""

  // ✅ Skip middleware for localhost and Vercel preview deploys
  const isLocal = hostname.includes("localhost")
  const isPreview = hostname.includes("vercel.app") && !hostname.includes("vynlox.com")

  if (isLocal || isPreview) {
    return NextResponse.next()
  }

  // 🔒 Lock all routes except /coming-soon in production
  if (path !== '/coming-soon') {
    return NextResponse.redirect(new URL('/coming-soon', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|public|images|images/Logo/Fabicon 512x512.png).*)',
  ],
}
