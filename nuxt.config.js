module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'EasyOffer职来求你',
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'easyoffer offial portal' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /**
   * style
   */
  css: [
    // Load a node module directly (here it's a SASS file)
    // 'bulma',
    // // CSS file in the project
    // '@/assets/css/main.css',
    // // SCSS file in the project
    // '@/assets/css/main.scss'
  ],
  // router: { base: '/easyoffer-portal/' },
  generate: {
    dir: 'docs'
  },

  // plugins: [{ src: '~/plugins/utils.js', ssr: false }],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    postcss: [
      require('autoprefixer')({
        browsers: [
          '> 1%',
          'last 2 versions',
          'not ie <= 8'
        ]
      })
    ],

    extend(config, ctx) {
      config.devtool = false
      // config.output.publicPath = ''
      // console.log(ctx)
      if (ctx.dev && ctx.isClient) {
        config.devtool = 'eval-source-map'
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
