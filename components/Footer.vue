<template lang="pug">
  footer(:class="{'is-mobile': isMobile()}")
    p EasyOffer 职来求你 服务的最终解释权归北京博然超越教育咨询有限公司所有
    p 北京博然超越教育咨询有限公司    北京市海淀区东北旺西路8号院4号楼四层421-68号
    p 版权所有 北京博然超越教育咨询有限公司 京ICP备10011865号-1  京公网安备11010502022735号
</template>

<script>
export default {
  methods: {
    isMobile() {
      const ua = navigator.userAgent
      if (ua.match(/Android/i) || ua.match(/webOS/i) || ua.match(/iPhone/i) || ua.match(/iPad/i) ||
        ua.match(/iPod/i) || ua.match(/BlackBerry/i) || ua.match(/Windows Phone/i)) {
        return true
      }
      return false
    }
  }
}
</script>
