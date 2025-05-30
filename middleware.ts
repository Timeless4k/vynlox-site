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

  // 🔒 Block specific footer links
  const blockedFooterLinks = [
    '/workshop',
    '/audit',
    '/solutions',
    '/about'
  ]

  if (blockedFooterLinks.some(blockedPath => path.startsWith(blockedPath))) {
    return NextResponse.redirect(new URL('/coming-soon', request.url))
  }

  // 🔒 Lock all routes except /coming-soon, robots.txt, and analytics-related paths in production
  const allowedPaths = [
    '/coming-soon',
    '/privacy',
    '/terms',
    '/robots.txt',
    '/sitemap.xml',
    '/_next/static',
    '/_next/image',
    '/favicon.ico',
    '/images',
    '/images/logo',
    '/images/logo/Logo 320 x 132.png',
    '/images/logo/Logo 600x200.png',
    '/images/logo/Fabicon 512x512.png'
  ]

  if (!allowedPaths.some(allowedPath => path.startsWith(allowedPath))) {
    return NextResponse.redirect(new URL('/coming-soon', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|public|images|images/Logo/Fabicon 512x512.png|sitemap.xml).*)',
  ],
}
