<template class="border">
  <div>
    <p>-----------D------------</p>
    <p>gender: {{ gender }}</p>
    <p>D的$attrs: {{ $attrs }}</p>
  </div>
</template>
<script>
export default {
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
  props: {
    gender: String, // name作为props属性绑定
  },
  created() {
    console.log(this.$attrs)
    // { "age": "18", "gender": "女", "height": "158", "title": "程序员成长指北" }
  },
}
</script>
