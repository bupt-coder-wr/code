<template>
  <div id="app">
    <VirtualList :listData="data" :itemSize="100" />
    <!-- <Scroller /> -->
    <!-- <HalfPx /> -->
    <!-- <Attrs /> -->
  </div>
</template>

<script>
import VirtualList from './components/virtualList/VirtualList.vue'
import Scroller from './components/isInViewPort/Scroller_3.vue'
import HalfPx from './components/half-px/HalfPx.vue'
import Attrs from './components/attrs-listeners/A.vue'
let d = []
for (let i = 0; i < 1000; i++) {
  d.push({ id: i, value: Math.floor(Math.random() * 1000) })
}
export default {
  name: 'App',
  data() {
    return {
      data: d,
    }
  },
  components: {
    VirtualList,
    Scroller,
    HalfPx,
    Attrs,
  },
}
</script>
<style>
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
}
</style>
