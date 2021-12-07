<template>
  <div class="record-header">
    <div class="title-box">
      <div class="title-item title-box-record" @click="switchRoute('record')">
        记账
      </div>
      <div class="title-item title-box-report" @click="switchRoute('report')">
        报表
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'record-header',
  methods: {
    switchRoute(route) {
      this.$router.push({ path: route })
    },
  },
}
</script>
<style lang="less" scoped>
.title-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #eee;
  .title-item {
    flex: 1;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.4rem;
    text-align: center;
  }
}
</style>
