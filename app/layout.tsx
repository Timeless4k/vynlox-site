import '@fontsource/space-grotesk';
import '@fontsource/inter';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vynlox.com'),
  title: {
    default: 'Vynlox - AI Automation for Solo Founders | AI Agent Solutions That Actually Work',
    template: '%s | Vynlox - AI Automation for Entrepreneurs'
  },
  description: 'Transform your business with AI automation that works. Vynlox helps solo founders save 20+ hours/week using proven AI agent solutions. Free workshop + strategy audit available.',
  keywords: [
    // Primary keywords
    'AI automation for entrepreneurs',
    'AI agent solutions',
    'business process automation',
    'AI chatbot for business',
    'workflow automation tools',
    
    // Long-tail keywords
    'AI automation for solo founders',
    'AI business automation',
    'AI lead generation system',
    'automated customer support',
    'business AI consulting',
    'AI workflow optimization',
    
    // Location-based (if applicable)
    'AI automation consultant',
    'business automation expert',
    
    // Problem-focused keywords
    'save time with AI automation',
    'automate repetitive business tasks',
    'AI for small business owners',
    'automated lead qualification',
    'AI email marketing automation',
    
    // Solution-focused keywords
    'done-for-you AI systems',
    'custom AI automation',
    'AI implementation services',
    'business intelligence automation'
  ],
  authors: [{ name: 'Gurudeep Singh', url: 'https://linkedin.com/in/gurudeep' }],
  creator: 'Vynlox',
  publisher: 'Vynlox',
  category: 'Technology',
  classification: 'Business Automation Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vynlox.com',
    title: 'Vynlox - AI Automation for Solo Founders | Save 20+ Hours/Week',
    description: 'Transform your business with AI automation that actually works. Join 500+ founders who saved 20+ hours/week with our proven AI agent solutions. Free workshop available.',
    siteName: 'Vynlox',
    images: [
      {
        url: 'https://vynlox.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vynlox - AI Automation for Solo Founders',
        type: 'image/jpeg',
      },
      {
        url: 'https://vynlox.com/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Vynlox - AI Agent Solutions',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vynlox',
    creator: '@gurudeep_ai',
    title: 'AI Automation That Actually Works for Solo Founders',
    description: 'Save 20+ hours/week with proven AI automation. Join 500+ successful founders. Free workshop + strategy audit available.',
    images: ['https://vynlox.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code-here',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    }
  },
  alternates: {
    canonical: 'https://vynlox.com',
    languages: {
      'en-US': 'https://vynlox.com',
      'en-GB': 'https://vynlox.com/en-gb',
    },
  },
  other: {
    'google-site-verification': 'your-google-site-verification-code-here',
    'facebook-domain-verification': 'your-facebook-domain-verification',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Enhanced meta tags */}
        <meta name="theme-color" content="#7C3AED" />
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Performance and caching */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
        <meta name="preload" content="/fonts/space-grotesk.woff2" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/images/Logo/Fabicon 512x512.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/Logo/Fabicon 512x512.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/Logo/Fabicon 512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/Logo/Fabicon 512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileImage" content="/images/Logo/Fabicon 512x512.png" />
        <meta name="msapplication-TileColor" content="#7C3AED" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/space-grotesk-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Enhanced structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://vynlox.com/#organization',
                  name: 'Vynlox',
                  url: 'https://vynlox.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://vynlox.com/logo.png',
                    width: 512,
                    height: 512
                  },
                  description: 'AI automation consulting for solo founders. We help entrepreneurs save 20+ hours per week using proven no-code AI solutions.',
                  foundingDate: '2023',
                  founder: {
                    '@type': 'Person',
                    name: 'Gurudeep Singh',
                    url: 'https://linkedin.com/in/gurudeep'
                  },
                  sameAs: [
                    'https://twitter.com/vynlox',
                    'https://linkedin.com/company/vynlox',
                    'https://youtube.com/@vynlox',
                    'https://github.com/vynlox'
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'customer service',
                    email: 'hello@vynlox.com',
                    availableLanguage: 'English'
                  },
                  address: {
                    '@type': 'PostalAddress',
                    addressCountry: 'US'
                  }
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://vynlox.com/#website',
                  url: 'https://vynlox.com',
                  name: 'Vynlox - AI Automation for Solo Founders',
                  description: 'Transform your business with AI automation that works. Save 20+ hours/week with proven no-code solutions.',
                  publisher: {
                    '@id': 'https://vynlox.com/#organization'
                  },
                  potentialAction: [
                    {
                      '@type': 'SearchAction',
                      target: {
                        '@type': 'EntryPoint',
                        urlTemplate: 'https://vynlox.com/search?q={search_term_string}'
                      },
                      'query-input': 'required name=search_term_string'
                    }
                  ]
                },
                {
                  '@type': 'Service',
                  '@id': 'https://vynlox.com/#service',
                  name: 'AI Business Automation Consulting',
                  description: 'Complete AI automation solutions for solo founders and entrepreneurs',
                  provider: {
                    '@id': 'https://vynlox.com/#organization'
                  },
                  serviceType: 'Business Consulting',
                  areaServed: 'Worldwide',
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'AI Automation Services',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Free AI Workshop',
                          description: '60-minute workshop on AI automation for businesses'
                        }
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'AI Strategy Audit',
                          description: '90-minute deep dive analysis of automation opportunities'
                        }
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Done-for-You AI Implementation',
                          description: 'Complete AI system setup and management'
                        }
                      }
                    ]
                  }
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://vynlox.com/#faq',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'How much time can AI automation save my business?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Our clients typically save 20+ hours per week by automating repetitive tasks like lead qualification, customer support, and follow-up sequences.'
                      }
                    },
                    {
                      '@type': 'Question',
                      name: 'Do I need technical skills to use your AI solutions?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'No technical skills required. We use no-code tools and provide complete setup and training for all our AI automation systems.'
                      }
                    },
                    {
                      '@type': 'Question',
                      name: 'How long does it take to implement AI automation?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Most AI automation systems are implemented within 2-4 weeks, with immediate results visible within the first week of deployment.'
                      }
                    }
                  ]
                }
              ]
            }),
          }}
        />

        {/* Additional SEO enhancements */}
        <meta property="business:contact_data:street_address" content="Remote" />
        <meta property="business:contact_data:locality" content="Global" />
        <meta property="business:contact_data:website" content="https://vynlox.com" />
        <meta property="business:contact_data:email" content="hello@vynlox.com" />
        
        {/* Rich snippets for reviews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AggregateRating',
              itemReviewed: {
                '@type': 'Organization',
                name: 'Vynlox'
              },
              ratingValue: '4.9',
              bestRating: '5',
              worstRating: '1',
              ratingCount: '127'
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#0F172A] text-white antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-[72px]" role="main">
          {children}
        </main>
        
        {/* Analytics and tracking scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics 4
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
        
        {/* Hotjar or other heat mapping tools */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Hotjar Tracking Code
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:1234567,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </body>
    </html>
  );
}