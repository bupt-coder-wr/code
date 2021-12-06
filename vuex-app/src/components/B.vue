<template>
  <div>
    <p>我是B组件</p>
    <p>我是vuex中的count --- {{ count }}</p>
  </div>
</template>
<script>
import store from '../store'
export default {
  computed: {
    count() {
      return store.state.count
    },
  },
}
</script>
<style lang="less" scoped></style>
