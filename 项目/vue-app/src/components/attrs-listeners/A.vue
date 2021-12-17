<template>
  <div>
    <B
      :name="name"
      :age="age"
      :gender="gender"
      :height="height"
      title="程序员成长指北"
    ></B>
  </div>
</template>
<script>
const B = () => import('./B.vue')
export default {
  components: { B },
  data() {
    return {
      name: 'zhang',
      age: '18',
      gender: '女',
      height: '158',
    }
  },
}
</script>
