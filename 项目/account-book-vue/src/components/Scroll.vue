<template>
  <div class="scroll-box">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Scroll',
  mounted() {
    this.$el.style.overflowY = 'scroll'
  },
}
</script>
