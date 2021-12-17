<template class="border">
  <div>
    <p>-----------B------------</p>
    <p>name: {{ name }}</p>
    <p>B的$attrs: {{ $attrs }}</p>
    <C v-bind="$attrs"></C>
  </div>
</template>
<script>
const C = () => import('./C.vue')
export default {
  components: {
    C,
  },
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
  props: {
    name: String, // name作为props属性绑定
  },
  created() {
    console.log(this.$attrs)
    // { "age": "18", "gender": "女", "height": "158", "title": "程序员成长指北" }
  },
}
</script>
