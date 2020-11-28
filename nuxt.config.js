require('dotenv').config()

export default {
  mode: 'universal',

  components: true,

  env: {
    siteUrl: process.env.SITE_URL
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Iconica House',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Iconica House'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Iconica House'
      },
      {
        vmid: 'og:image',
        hid: 'og:image',
        property: 'og:image',
        content: ''
      },
      {
        vmid: 'twitter:image',
        hid: 'twitter:image',
        name: 'twitter:image',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon'
        // href: `${process.env.SITE_URL || ''}/favicon.ico`
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#b12a52' },
  /*
   ** Global CSS
   */
  css: [
    // '@/assets/styles/custom-bootstrap.scss',
    '@/assets/styles/index.scss',
    '~static/fonts/fonts.css',
    'swiper/css/swiper.css',
    // 'swiper/swiper-bundle.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  styleResources: {
    scss: ['assets/vars/*.scss']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '~/plugins/vue-awesome-icons',
    '~/plugins/vue-lazysizes.client.js',
    '~/plugins/vue-fontawesome.js',
    // { src: '~/plugins/vue-epic-spinner', mode: 'client' },
    { src: '~/plugins/vue-youtube', mode: 'client' },
    { src: '~/plugins/vue-smooth-scroll', mode: 'client' },
    { src: '~/plugins/nuxt-swiper-plugin', mode: 'client' },
    { src: '~/plugins/vue-google-maps', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    'vue-scrollto/nuxt',
    '@nuxtjs/gtm',
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_BASE_URL
  },
  // boostrap config
  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin',
      'FormPlugin',
      'FormRadioPlugin',
      'ModalPlugin'
    ],
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  gtm: {
    id: '',
    pageTracking: false
  },

  router: {
    base: process.env.BASE_URL
  },

  pwa: {
    manifest: {
      name: 'Iconica House',
      short_name: 'Iconica House',
      lang: 'es',
      display: 'fullscreen',
      background_color: '#FFFFFF',
      theme_color: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'white'
    },
    icon: {
      purpose: 'maskable'
    }
  },
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    analyze: false,
    transpile: [/^gmap-vue($|\/)/],

    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    }
  }
}
