<template>
  <div class="app" @scroll="isInViewPort">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box target-box"></div>
  </div>
</template>
<script>
export default {
  name: 'scroller',
  methods: {
    isInViewPort() {
      const el = document.getElementsByClassName('target-box')[0]
      const parent = document.getElementsByClassName('app')[0]
      const viewWidth = window.innerWidth || parent.clientWidth
      const viewHeight = window.innerHeight || parent.clientHeight
      const { top, right, bottom, left } = el.getBoundingClientRect()
      console.log(
        top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight
      )
      return top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight
    },
  },
}
</script>
<style scoped>
.app {
  height: 100vh;
  overflow: scroll;
}
.box {
  width: 200px;
  height: 200px;
  background-color: gray;
  margin-bottom: 10px;
}
.target-box {
  background-color: red;
}
</style>
