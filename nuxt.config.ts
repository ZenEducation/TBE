export default defineNuxtConfig({
  // srcDir: "./",
  css: [
    "@/assets/css/main.css",
  "@/assets/css/font-awesome-pro.min.css",
  "@/assets/css/vue-multiselect.css",
  "@/assets/css/v-calendar.css",
  '@fortawesome/fontawesome-free/css/all.css'],

  // components: [
  //   {
  //     path: '~/components',
  //     pathPrefix: false,
  //   },
  // ],

  modules: [
    // ...
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  //buildModules: ["@pinia/nuxt"],
  alias: {
    "./runtimeConfig": "./runtimeConfig.browser",
  },

  // vue: {  
  //   compilerOptions: {
  //     isCustomElement: (tag) => ['HomeTopSection', 'HomeAboutSection', 'HomeBrandsSection', 'HomeFeatureSection', 'HomeCourseSection', 'HomePlatformSection', 'HomeCtaSection', 'HomeTopicsSection', 'HomeTestimonails', 'HomeTeamSection'].includes(tag),
  //   },
  // },

  //
  plugins: [{ src: "@/plugins/amplify.ts", mode: "client" }],
  vite: {
    // temp-fix for dev, it breaks build for now (see: https://github.com/nuxt/framework/issues/4916)
    define: {
      // global: {}
      "window.global": {},
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {},
});
