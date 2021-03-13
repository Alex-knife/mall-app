<template>
  <div class="classify-wrapper">
    <router-link class="search-btn" tag="div" to="/search">
      <van-icon name="search" />
      <div>Search content</div>
    </router-link>
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
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    // 获取state的值
    ...mapState({
      showContent: (state) => state.showContent,
      sideList: (state) => state.sideList,
    }),
  },
  methods: {
    ...mapMutations(['resetGoodsList']),
    ...mapActions(['getGoodsList']),
  },
  components: {
    TopTab,
    SideTab,
    GoodsList,
  },
  // 监听 是否多次请求数据
  watch: {
    showContent() {
      if (this.showContent) {
        this.resetGoodsList();
        this.getGoodsList({ type: this.sideList[0], page: 1, sortType: 'all' });
      }
    },
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
