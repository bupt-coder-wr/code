<template>
  <div class="navbar-box">
    <div class="nar-item" id="record" @click="switchRouter('record')">
      <span class="icon iconfont">&#xe631;</span>
      <p class="nar-text">记账</p>
    </div>
    <div class="nar-item" id="asset" @click="switchRouter('asset')">
      <span class="icon iconfont">&#xe61b;</span>
      <p class="nar-text">资产</p>
    </div>
    <div class="nar-item" id="discover" @click="switchRouter('discover')">
      <span class="icon iconfont">&#xe621;</span>
      <p class="nar-text">发现</p>
    </div>
    <div class="nar-item" id="home" @click="switchRouter('home')">
      <span class="icon iconfont">&#xe603;</span>
      <p class="nar-text">我的</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  methods: {
    switchRouter(route) {
      this.$router.push({ path: route })
    },
  },
}
</script>
<style lang="less" scoped>
.iconfont {
  font-size: 24px;
}
.navbar-box {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ddd;
  .nar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0.05rem 0;
  }
  .nar-text {
    font-size: 0.15rem;
  }
}
</style>
