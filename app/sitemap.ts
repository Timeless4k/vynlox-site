import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://vynlox.com'

// Function to get all valid routes from the app directory
function getRoutes(): string[] {
  const routes: string[] = ['/'] // Start with home page
  const appDir = path.join(process.cwd(), 'app')

  function scanDirectory(dir: string, basePath: string = '') {
    const items = fs.readdirSync(dir)

    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // Skip directories that start with underscore or dot
        if (!item.startsWith('_') && !item.startsWith('.')) {
          const routePath = path.join(basePath, item)
          routes.push(`/${routePath}`)
          scanDirectory(fullPath, routePath)
        }
      }
    }
  }

  scanDirectory(appDir)
  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getRoutes()
  
  return routes.map(route => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'daily' as const : 'weekly' as const,
    priority: route === '/' ? 1 : 0.8,
  }))
} 