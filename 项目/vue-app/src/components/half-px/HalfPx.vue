<template>
  <div>
    <div class="px"></div>
    <div class="half-px-1"></div>
    <div class="px"></div>
    <div class="half-px-2"></div>
    <div class="type3"></div>
    <div class="type4"></div>
  </div>
</template>
<script>
export default {
  // 实现移动端 0.5px
  // ios表现， half-px-1,half-px-2 相同
  // Android 小米， 粗细程度： px > half-px-2 > half-px-1
};
</script>
<style scoped>
.px {
  width: 100%;
  height: 1px;
  background-color: red;
  margin-top: 20px;
  margin-bottom: 20px;
}
.half-px-1 {
  width: 100%;
  /* height: 20px; */
  border: 0.5px;
  background-color: red;
  border-color: red;
  margin-top: 20px;
  margin-bottom: 20px;
}
.half-px-2 {
  width: 100%;
  height: 1px;
  transform: scale(1, 0.5);
  background-color: red;
  margin-top: 20px;
  margin-bottom: 20px;
}
.type3 {
  width: 100px;
  height: 100px;
  position: relative;
  margin: auto;
}
.type3::after {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  top: 0;
  left: 0;
  border: 1px solid red;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  box-sizing: border-box;
}
.type4 {
  width: 100%;
  height: 1px;
  background-image: linear-gradient(to bottom, red, white);
}
</style>
