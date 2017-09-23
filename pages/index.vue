<template lang="pug">
section.container
  header
    img.logo(src="~assets/images/logo.png")
    img.sublogo(src="~assets/images/sub-logo.png")
  .banner
    .left
    .right
    img.banner-img(src="~assets/images/header.png")
  .body
    img.body-img(src="~assets/images/body.jpg")
  //- no-ssr
  foot
</template>

<script>
import Foot from '@/components/Footer.vue'

export default {
  // asyncData(ctx) {
  //   console.log(ctx)
  //   return { haha: 123 }
  // },
  components: {
    Foot
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
}

header {
  max-width: 1500px;
  width: 100%; // min-width: 1200px;
  position: absolute;
  padding: 0 20px;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  .logo {
    float: left;
  }
  .sublogo {
    float: right;
  }
}

.banner {
  height: 515px;
  .banner-img {
    max-width: 90%; // min-width: 1200px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 125px;
  }
  .left {
    height: 100%;
    width: 50%;
    background: #e389b9;
    float: left;
  }
  .right {
    float: left;
    height: 100%;
    width: 50%;
    background: #233d8f;
  }
}

.body {
  height: 850px;
  background: white;
  .body-img {
    margin: 66px auto 0;
    display: block;
    max-width: 90%;
  }
}

footer {
  background: #e6e6e6;
  text-align: center;
  padding: 40px 0;
  font-size: 14px;
  &.is-mobile {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  p {
    line-height: 2.5em;
  }
}
</style>
