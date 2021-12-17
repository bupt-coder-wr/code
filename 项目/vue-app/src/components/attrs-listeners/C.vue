<template>
  <div class="border">
    <p>----------C-----------</p>
    <p>age: {{ age }}</p>
    <p>C: {{ $attrs }}</p>
    <D v-bind="$attrs"></D>
  </div>
</template>
<script>
const D = () => import('./D.vue')

export default {
  components: {
    D,
  },
  inheritAttrs: false,
  props: {
    age: String,
  },
  created() {
    console.log(this.$attrs)
    // { "gender": "女", "height": "158", "title": "程序员成长指北" }
  },
}
</script>
