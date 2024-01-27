// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/main.scss";'
        }
      },
    }
  },
  imports: {
    autoImport: true
  },
  modules: ['@nuxt/image','@pinia/nuxt'],
  image: {
    inject: true,
    quality: 80,
    format: ['jpg','jpeg','img'],
    screens: {
      'xs':320
    }
  },
})