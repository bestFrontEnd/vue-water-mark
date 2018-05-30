import VueWaterMark from './VueWaterMark.vue'
const waterMark = {
  install (Vue, options) {
  	Vue.component(VueWaterMark.name, VueWaterMark)
  }
}
export default waterMark
if (typeof window != 'undefined' && window.Vue) {
  window.Vue.component('vue-water-mark', VueWaterMark)
}