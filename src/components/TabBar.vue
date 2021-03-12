<template>
  <van-tabbar fixed route>
    <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/home/classify">分类</van-tabbar-item>
    <!-- 获取购物车位置 -->
    <van-tabbar-item
      icon="cart-o"
      to="/home/shopping"
      :badge="badge"
      id="shop-cart"
    >购物车</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o" to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      counterMap: (state) => state.counterMap,
    }),
    badge() {
      // Object.value 获得所有对应的值，返回数组
      // 数组运算
      const count = Object.values(this.counterMap).reduce((prev, next) => prev + next, 0);
      if (count > 99) {
        return '99+';
      }
      return count;
    },
  },
};
</script>

<style>
</style>
