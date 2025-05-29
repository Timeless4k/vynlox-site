import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
        '/temp/',
      ],
    },
    sitemap: 'https://www.vynlox.com/sitemap.xml',
    host: 'https://www.vynlox.com',
  }
}
