export default defineNuxtConfig({
  app: {
    head: {
      title: 'Our Journey',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Nunito:wght@400;700&display=swap' }
      ],
    }
  },
  compatibilityDate: '2025-01-22',
  devtools: { enabled: true },
  ssr: true,
})