<template>
  <div class="search-wrapper">
    <!-- 头部框架 -->
    <div class="search-head">
      <van-icon name="arrow-left" class="arrow-left" />
      <van-search
        class="search-content"
        v-model="value"
        :placeholder="word"
        show-action
        @search="onSearch"
        @input="input"
        @focus="focus"
        autofocus
      >
        <template #action v-if="showList">
          <div @touchend="onSearch(value)">搜索</div>
        </template>
        <template #action v-else>
          <div @touchend="onSearch(value)">
            <van-icon
              name="cart-o"
              id="shop-cart"
              class="shop-cart"
              :badge="badge"
            />
          </div>
        </template>
      </van-search>
    </div>
    <!-- 搜索显示 模糊搜索结果 -->
    <div class="like-search" v-if="likeList.length && showList">
      <van-list>
        <van-cell v-for="item in likeList" :key="item" @click="onSearch(item)">
          <template>
            <span class="custom-title" v-html="formatHTML(item)"></span>
          </template>
        </van-cell>
      </van-list>
    </div>
    <div class="goods-list" v-if="!showList">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <!-- 获取对应商品信息 state中goodsList -->
        <goods-card
          v-for="item in goodsList"
          :key="item.id"
          v-bind="item"
          :num="counterMap[item.id]"
        ></goods-card>
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      </van-list>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import GoodsCard from '@/components/GoodsCard.vue';

export default {
  components: {
    GoodsCard,
  },
  data() {
    return {
      value: this.word,
      word: 'Apple',
      likeList: [],
      // 防抖：操作完成后执行 在一定时间内
      timer: null,
      loading: false,
      finished: false,
      page: 1,
      size: 5,
      // 商品信息  goodsCard
      goodsList: [],
      // 显示搜索结果 | 两种情况，模糊搜索结果，商品卡片信息
      showList: true,
      total: 0,
    };
  },
  computed: {
    ...mapState({
      counterMap: (state) => state.counterMap,
    }),
    badge() {
      // Object.value 获得所有对应的值，返回数组
      // 数组运算
      const count = Object.values(this.counterMap).reduce(
        (prev, next) => prev + next,
        0,
      );
      if (count > 99) {
        return '99+';
      }
      return count;
    },
  },
  methods: {
    async onLoad() {
      this.loading = false;
      const value = await this.$api.search(this.value, this.page, this.size);
      this.goodsList = [...this.goodsList, ...value.list];
      // console.log(this.goodsList);
      this.total = value.total;
      // console.log(this.total);
      if (this.goodsList.length >= this.total) {
        this.finished = true;
      } else {
        this.page += 1;
      }
    },
    onSearch(value) {
      if (value) {
        this.value = value;
      } else {
        this.value = this.word;
      }
      this.likeList = [];
      this.goodsList = [];
      this.page = 1;
      this.finished = false;
      this.onLoad();
      this.showList = false;
    },
    // 返回为 Promise , 搜索出来的模糊数据
    async input() {
      if (this.value === '') {
        this.likeList = [];
        return;
      }
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      } else {
        this.timer = setTimeout(async () => {
          const value = await this.$api.likeSearch(this.value);
          this.likeList = value.result;
          clearTimeout(this.timer);
          this.timer = null;
        }, 300);
      }
    },
    focus() {
      this.showList = true;
    },
    formatHTML(item) {
      const reg = new RegExp(this.value, 'g');
      return item.replace(reg, this.value.fontcolor('red'));
    },
  },
};
</script>

<style lang="less" scoped>
.search-wrapper {
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: #fff;
  .search-head {
    width: 345px;
    background: #fff;
    display: flex;
    align-items: center;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 13px;
    z-index: 22;
    .arrow-left {
      font-size: 22px;
    }
    .search-content {
      flex: 1;
      .shop-cart {
        font-size: 15px;
      }
    }
  }
  .like-search {
    position: relative;
    top: 50px;
    width: 100%;
    padding-left: 30px;
    box-sizing: border-box;
  }
  .goods-list {
    position: relative;
    width: 345px;
    margin: 48px auto 0;
    z-index: 10;
    background: #fff;
  }
}
</style>
