<template>
  <div class="app" @scroll="isInViewPortOfOne">
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
  mounted() {
    this.isInViewPortOfOne()
  },
  methods: {
    isInViewPortOfOne() {
      const el = document.getElementsByClassName('target-box')[0]
      const parent = document.getElementsByClassName('app')[0]
      const viewPortHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
      const offsetTop = el.offsetTop
      const scrollTop = parent.scrollTop
      const top = offsetTop - scrollTop
      console.log(
        'offsetTop',
        offsetTop,
        'scrollTop',
        scrollTop,
        'viewPortHeight',
        viewPortHeight
      )
      console.log(top <= viewPortHeight)
      return top <= viewPortHeight
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
