<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  // 获取counterMap的值,此为存储在本地的值为goods（JSON格式）
  created() {
    const counterMap = JSON.parse(localStorage.getItem('goods')) || {};
    this.$store.commit('setCounterMap', counterMap);
  },
};
</script>

<style lang="less">
</style>
