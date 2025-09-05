/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://woye.cc',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  
  // Default values
  priority: 0.7,
  changefreq: 'weekly',
  
  // Exclude paths
  exclude: ['/admin/*', '/api/*', '/_next/*', '/static/*'],
  
  // Custom transformations
  transform: async (config, path) => {
    // Set different priorities for different pages
    let priority = 0.7
    let changefreq = 'weekly'
    
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
  
  // Additional paths
  additionalPaths: async (config) => {
    return []
  },
  
  // Robots.txt options
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://woye.cc/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/static/'],
      },
    ],
  },
}