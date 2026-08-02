export default function sitemap() {
  const baseUrl = 'https://cultmoney.com';
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/portfolio-login',
    '/quick-links',
    '/services',
    '/services/financial-services',
    '/services/mutual-fund-calculator',
    '/services/product-distribution',
    '/services/swp',
    '/services/wealth-management'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/services/') ? 0.8 : 0.5,
  }));
}
