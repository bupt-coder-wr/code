<template>
  <div class="record">
    <Header></Header>
    <Scroll class="container">
      <div>记录</div>
    </Scroll>
    <NavBar></NavBar>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Scroll from '@/components/Scroll.vue'
import Header from '@/views/record/Header.vue'

export default {
  name: 'record',
  components: {
    NavBar,
    Scroll,
    Header,
  },
}
</script>
<style lang="less" scoped></style>
