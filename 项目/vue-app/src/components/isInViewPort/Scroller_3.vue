<template>
  <div class="app">
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
  name: "scroller",
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const options = {
        threshold: 0.5,
        root: document.getElementsByClassName("app")[0],
      };
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          entry.time; // 触发的时间
          entry.rootBounds; // 根元素的位置矩形，这种情况下为视窗位置
          entry.boundingClientRect; // 被观察者的位置举行
          entry.intersectionRect; // 重叠区域的位置矩形
          entry.intersectionRatio; // 重叠区域占被观察者面积的比例（被观察者不是矩形时也按照矩形计算）
          entry.target; // 被观察者
          console.log("entry.time", entry.time);
        });
      };

      const observer = new IntersectionObserver(callback, options);
      this.observer = observer;
      const target = document.getElementsByClassName("target-box")[0];
      this.observer.observe(target);
    },
  },
};
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
