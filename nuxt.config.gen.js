const nuxtConfig = require('./nuxt.config.js')
module.exports = Object.assign({}, nuxtConfig, {
  router: { base: '/easyoffer-portal/' }
})
