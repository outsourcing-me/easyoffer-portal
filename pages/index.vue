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
    img.body-img(src="~assets/images/body.png")
  footer
    p EasyOffer 职来求你 服务的最终解释权归北京博然超越教育咨询有限公司所有
    p 北京博然超越教育咨询有限公司    北京市海淀区东北旺西路8号院4号楼四层421-68号
    p 版权所有 北京博然超越教育咨询有限公司 京ICP备10011865号-1  京公网安备11010502022735号
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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
  // max-width: 1400px;
  width: 100%;
  min-width: 1200px;
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
    max-width: 1100px; // min-width: 1200px;
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
  }
}

footer {
  background: #e6e6e6;
  text-align: center;
  padding: 40px 0;
  font-size: 14px;
  p {
    line-height: 2.5em;
  }
}
</style>
