<template>
  <div class="home">
    <Scroll>
      <div class="background">
        <div class="header-bgc"></div>
        <div class="setting-1">
          <div class="item">云同步</div>
          <div class="item">签到</div>
          <div class="bar"></div>
        </div>
        <div class="ad-banner">
          广告位...
        </div>
        <div class="setting-2">
          <div class="item">
            <span class="icon iconfont">&#xe63a;</span>&nbsp;数据导入导出
          </div>
          <div class="item">
            <span class="icon iconfont">&#xec5c;</span>&nbsp;高级数据设置
          </div>
          <div class="item">
            <span class="icon iconfont">&#xe62a;</span>&nbsp;爱的鼓励
          </div>
        </div>
      </div>
    </Scroll>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Scroll from '@/components/Scroll.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Scroll,
  },
}
</script>
<style lang="less" scoped>
.user-info-box {
  position: relative;
  width: 100%;
  height: 5rem;
  background-color: lightpink;
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 1.6rem;
  }
}
.background {
  min-height: 100vh;
  background-color: #f5f5f5;
}
.header-bgc {
  background-image: linear-gradient(to bottom, #ffccd5, #f28482);
  height: 3.6rem;
}
.setting-1,
.setting-2,
.ad-banner {
  margin: 0.2rem;
  background-color: #fff;
  border-radius: 0.1rem;
}
.ad-banner {
  font-size: 0.5rem;
  background-color: #faddb9;
  height: 1.6rem;
  line-height: 1.6rem;
  text-align: center;
}
.setting-1 {
  position: relative;
  display: flex;
  font-size: 0.3rem;
  .item {
    flex: 1;
    text-align: center;
    height: 0.6rem;
    line-height: 0.6rem;
  }
  .bar {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.4, 1);
    width: 1px;
    height: 0.4rem;
    background-color: #ccc;
  }
}
.setting-2 {
  display: flex;
  flex-direction: column;
  .item {
    font-size: 0.32rem;
    padding-left: 0.3rem;
    height: 0.9rem;
    line-height: 0.9rem;
    border-bottom: 1px solid #eee;
    .iconfont {
      font-size: 0.32rem;
    }
  }
  .item:nth-of-type(3) {
    border-bottom: none;
  }
}
</style>
