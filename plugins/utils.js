import Vue from 'vue'
Vue.mixin({
  methods: {
    haha() {
      const ua = navigator.userAgent
      if (ua.match(/Android/i) || ua.match(/webOS/i) || ua.match(/iPhone/i) || ua.match(/iPad/i) ||
        ua.match(/iPod/i) || ua.match(/BlackBerry/i) || ua.match(/Windows Phone/i)) {
        return true
      }
      return false
    }
  }
})
// export default (ctx) => {
//   // Set i18n instance on app
//   // This way we can use it in middleware and pages asyncData & fetch
//   // console.log(ctx)
//   ctx.isMobile = () => {
//     const ua = navigator.userAgent
//     if (ua.match(/Android/i) || ua.match(/webOS/i) || ua.match(/iPhone/i) || ua.match(/iPad/i) ||
//       ua.match(/iPod/i) || ua.match(/BlackBerry/i) || ua.match(/Windows Phone/i)) {
//       return true
//     }
//     return false
//   }
// }
