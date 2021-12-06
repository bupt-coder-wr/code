<template>
  <div>
    <p>我是A组件</p>
    <p>我是vuex中的count --- {{ count }}</p>
    <p>mutations 同步改变 commit触发</p>
    <button @click="addCountOne">Count+1</button>&nbsp;
    <p>action 异步改变 dispatch触发</p>
    <button @click="addCountAsync">CountAsync</button>
    <!-- vuex getters -->
    <div>
      <ul>
        <li v-for="item in doneTodos" :key="item.id">{{ item.id }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import store from '../store'
export default {
  computed: {
    count() {
      return store.state.count
    },
    doneTodos() {
      return store.getters.doneTodos
    },
  },
  methods: {
    addCountOne() {
      store.commit('addCountOne')
    },
    addCountAsync() {
      store.dispatch('incrementAsync')
    },
  },
}
</script>
<style lang="less" scoped></style>
