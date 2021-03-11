<template>
  <div class="classify-wrapper">
    <div class="search-btn">
      <van-icon name="search" />
      <div>Search content</div>
    </div>
    <top-tab></top-tab>
    <!-- 点击一级导航，会有加载圈 -->
    <template v-if="showContent">
      <side-tab></side-tab>
      <goods-list></goods-list>
    </template>
    <van-loading v-else size="2rem" vertical />
  </div>
</template>

<script>
import TopTab from '@/components/TopTab.vue';
import SideTab from '@/components/SideTab.vue';
import GoodsList from '@/components/GoodsList.vue';
import { mapState } from 'vuex';

export default {
  computed: {
    // 获取state的值
    ...mapState({
      showContent: (state) => state.showContent,
    }),
  },
  components: {
    TopTab,
    SideTab,
    GoodsList,
  },
};
</script>

<style lang="less" scoped>
.classify-wrapper {
  width: 375px;
  .search-btn {
    width: 355px;
    height: 33px;
    line-height: 33px;
    color: #a1a1a1;
    background-color: #eee;
    margin: 11px auto 0;
    border-radius: 10px;
    font-size: 14px;
    text-align: center;
    > * {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
