// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vueuse/motion/nuxt', '@nuxthq/ui', 'nuxt-swiper', '@nuxtjs/supabase', '@vueuse/nuxt'],
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
          }
        }
      }
    }
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false
  },
  plugins: [
    {
      src: '@/plugins/myPlugin.client.ts', mode: 'client'
  }
]
})
