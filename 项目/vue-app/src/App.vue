<template>
  <div id="app">
    <!-- <VirtualList :listData="data" :itemSize="100" /> -->
    <!-- <VirtualList2 :listData="data" :estimatedItemSize="100" /> -->
    <!-- <Scroller /> -->
    <HalfPx />
    <!-- <Attrs /> -->
  </div>
</template>

<script>
import VirtualList1 from './components/virtualList/VirtualList.vue'
import VirtualList2 from './components/virtualList/VirtualList2.vue'
import Scroller from './components/isInViewPort/Scroller_3.vue'
import HalfPx from './components/half-px/HalfPx.vue'
import Attrs from './components/attrs-listeners/A.vue'
import { faker } from '@faker-js/faker'

// faker data virtualList
// let d = []
// for (let i = 0; i < 1000; i++) {
//   d.push({ id: i, value: Math.floor(Math.random() * 1000) })
// }
// faker data virtualList
let data = []
for (let id = 0; id < 10000; id++) {
  data.push({
    id,
    value: faker.lorem.sentences(), // 长文本
  })
}
export default {
  name: 'App',
  data() {
    return {
      data,
    }
  },
  components: {
    VirtualList1,
    VirtualList2,
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
