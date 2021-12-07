<template>
  <div class="report">
    <Header></Header>
    <NavBar></NavBar>
  </div>
</template>
<script>
import Header from '@/views/record/Header.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'report',
  components: {
    Header,
    NavBar,
  },
}
</script>
<style lang="less" scoped></style>
