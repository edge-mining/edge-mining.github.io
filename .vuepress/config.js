import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  // Site configuration
  lang: 'en-US',
  title: 'Edge Mining',
  description: 'Mine your energy - A research-driven, open-source project turning surplus energy into Bitcoin-powered digital value',
  
  // Bundler configuration
  bundler: viteBundler(),
  
  // Theme configuration
  theme: defaultTheme({
    // Logo - Using the official Edge Mining organization logo
    logo: '/images/logo.png',
    
    // Repository
    repo: 'https://github.com/edge-mining',
    repoLabel: 'GitHub',
    
    // Navbar configuration
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Docs',
        link: '/docs/intro.html',
      },
      {
        text: 'Discord',
        link: 'https://discord.com/invite/VQa9UY5SsS',
        target: '_blank',
      },
    ],
    
    // Sidebar configuration
    sidebar: {
      '/docs/': [
        {
          text: 'Documentation',
          children: [
            '/docs/intro.md',
            '/docs/about-us.md',
            {
              text: 'Product',
              children: [
                '/docs/product/product-cycle.md',
              ],
            },
            {
              text: 'Modelling',
              children: [
                '/docs/modelling/domain-driven-architecture-overview.md',
                '/docs/modelling/glossary.md',
              ],
            },
            '/docs/contribution.md',
            '/docs/faq.md',
          ],
        },
      ],
    },
    
    // Footer configuration
    editLink: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: true,
    lastUpdatedText: 'Last Updated',
    
    // Page configuration
    docsDir: 'docs',
  }),
  
  // Additional configuration
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/logo.png' }],
    ['meta', { name: 'theme-color', content: '#667eea' }],
    ['meta', { name: 'description', content: 'Edge Mining - Mine your energy. A research-driven, open-source project turning surplus energy into Bitcoin-powered digital value.' }],
    ['meta', { property: 'og:title', content: 'Edge Mining' }],
    ['meta', { property: 'og:description', content: 'Mine your energy - A research-driven, open-source project turning surplus energy into Bitcoin-powered digital value' }],
    ['meta', { property: 'og:url', content: 'https://edgemining.energy' }],
    ['meta', { property: 'og:image', content: '/images/logo.png' }],
    // DaisyUI theme
    ['script', {}, 'document.documentElement.setAttribute("data-theme", "edge-mining")'],
  ],
  
  // Development configuration
  port: 8080,
  open: true,
}) 