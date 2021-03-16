export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: "Jon's Portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' }
    ],
    script: [
      {
        async: true,
        defer: true,
        src: 'https://scripts.withcabin.com/hello.js'
      }
    ]
  },
  generate: {
    exclude: ['/collector', '/e-coin', '/dreamhacker-presentation']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#c67b47' },
  /*
   ** Global CSS
   */
  css: ['~assets/global.scss', '~assets/dark.scss', '~assets/icons.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  styleResources: {
    scss: ['./assets/vars.scss', './assets/colors.scss']
  }
}
