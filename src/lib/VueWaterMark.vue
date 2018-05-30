<template>
  <div>
    <div v-for="(item, k) in waterMarkList" :key="k" :style="item"
         style="position:absolute;
                display:block;
                overflow:hidden;
                z-index:999;
                pointer-events:none;
                text-align:center;">
      {{ text }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vue-water-mark',
    props: {
      targetName: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: 'Water Mark'
      },
      row: {
        type: Number,
        default: 20,
        validator: value => value > 0
      },
      column: {
        type: Number,
        default: 2,
        validator: value => value > 0
      },
      xStart: {
        type: Number,
        default: -10
      },
      yStart: {
        type: Number,
        default: 50
      },
      xSpace: {
        type: Number,
        default: 0,
        validator: value => value >= 0
      },
      ySpace: {
        type: Number,
        default: 0,
        validator: value => value >= 0
      },
      color: {
        type: String,
        default: '#000000',
        validator: value => /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)
      },
      alpha: {
        type: Number,
        default: 0.3,
        validator: value => value >= 0 && value <= 1
      },
      fontSize: {
        type: String,
        default: '20px'
      },
      font: {
        type: String,
        default: '微软雅黑'
      },
      width: {
        type: Number,
        default: 120
      },
      height: {
        type: Number,
        default: 80
      },
      angle: {
        type: Number,
        default: -15
      },
    },
    data() {
      return {
        waterMarkList: []
      }
    },
    mounted() {
      let vm = this
      vm.row = Math.ceil(vm.row)
      vm.column = Math.ceil(vm.column)
      const xTotal = vm.xSpace + vm.width
      const yTotal = vm.ySpace + vm.height
      let x
      let y
      for (let i = 0; i < vm.row; i++) {
        y = vm.yStart + yTotal * i
        for (let j = 0; j < vm.column; j++) {
          x = vm.xStart + xTotal * j
          const style = `
            width: ${vm.width}px;
            height: ${vm.height}px;
            left: ${x}px;
            top: ${y}px;
            transform: rotate(${vm.angle}deg);
            opacity: ${vm.alpha};
            fontSize: ${vm.fontSize};
            fontFamily: ${vm.font};
            color: ${vm.color};
          `.replace(/\s+/g, '')
          vm.waterMarkList.push(style)
        }
      }
    }
  }
</script>

<style scoped>

</style>
