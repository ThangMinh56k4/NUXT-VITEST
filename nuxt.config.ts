// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['nuxt-vitest', '@element-plus/nuxt', '@unocss/nuxt'],

  css: ['~/assets/sass/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/sass/element/index.scss" as element;',
        },
      },
    },
  },

  elementPlus: {
    importStyle: 'scss',
    icon: false,
    themes: ['dark'],
  },
})
