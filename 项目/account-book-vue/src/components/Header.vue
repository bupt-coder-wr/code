<template>
  <div class="header-box">
    <span class="icon iconfont" v-if="goBack">&#58908;</span>
    <span class="title">{{ headerTitle }}</span>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
  props: {
    headerTitle: {
      type: String,
      required: true,
      default: '这是一个title',
    },
    goBack: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="less" scoped>
.iconfont {
  font-size: 0.02rem;
}
.header-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2.8rem;
  line-height: 2.8rem;
  border-bottom: 1px solid #dddddd;
  span {
    float: left;
    left: 0;
  }
  .title {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 0.2rem;
    font-weight: bolder;
  }
}
</style>
