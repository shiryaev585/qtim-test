// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    app: {
        head: {
            htmlAttrs: { lang: 'ru' },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ]
        },
    },
    css: ['~/assets/style/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                    additionalData: '@use "~/assets/style/global" as *;',
                },
            },
        },
    },
    modules: ['@nuxt/image', '@nuxt/icon', '@pinia/nuxt'],
    icon: {
        customCollections: [
            {
                prefix: 'site-icon',
                dir: './assets/icons'
            }
        ]
    },
    runtimeConfig: {
        public: {
            apiUrl: process.env.API_URL,
        }
    },
})