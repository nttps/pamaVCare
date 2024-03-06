// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxt/fonts", "nuxt-swiper"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/css/_variable.scss" as *;',
                },
            },
        },
    },
    css: [`assets/css/style.scss`],
});