import Head from "next/head"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogType?: "website" | "article"
  twitterCard?: "summary" | "summary_large_image"
  noIndex?: boolean
}

export default function SEO({
  title,
  description = "Smart, builder-led AI consulting studio helping founders scale their businesses with cutting-edge automation and AI solutions.",
  keywords = ["AI consulting", "automation", "founder tools", "business scaling", "AI solutions"],
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
}: SEOProps) {
  const siteTitle = title ? `${title} | Vynlox` : "Vynlox | AI-Powered Consulting Studio"
  const siteUrl = "https://vynlox.com"

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}/images/Logo/Logo 600x200.png`} />
      <meta property="og:site_name" content="Vynlox" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/images/Logo/Logo 600x200.png`} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Favicon */}
      <link rel="icon" href="/images/Logo/Fabicon 512x512.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/Logo/Fabicon 512x512.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/Logo/Fabicon 512x512.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/Logo/Fabicon 512x512.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileImage" content="/images/Logo/Fabicon 512x512.png" />
      <meta name="msapplication-TileColor" content="#7C3AED" />
    </Head>
  )
} 