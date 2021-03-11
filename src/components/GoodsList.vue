<template>
  <div class="list-wrapper">
    <div class="list-header van-hairline--top-bottom">
      <div :class="{ active: type == 'all' }" @click="changeType('all')">
        综合
      </div>
      <div :class="{ active: type == 'sale' }" @click="changeType('sale')">
        销量
      </div>
      <!-- 价格带有 高到低 & 低到高 -->
      <div
        class="price"
        :class="{
          'price-up': type == 'price-up',
          'price-down': type == 'price-down',
        }"
        @click="changeType('price')"
      >
        价格
      </div>
    </div>
    <!-- 右边每个信息显示内容 -->
    <!-- immediate-check  防止多加载一次 -->
    <div class="list-content">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
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
          ></goods-card>
          <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import GoodsCard from '@/components/GoodsCard.vue';

export default {
  components: {
    GoodsCard,
  },
  data() {
    return {
      type: 'price-up',
      isLoading: false,
      loading: false,
      finished: false,
    };
  },
  methods: {
    ...mapMutations(['resetGoodsList']),
    ...mapActions(['getGoodsList']),
    changeType(type) {
      if (type === 'all') {
        this.type = 'all';
      } else if (type === 'sale') {
        this.type = 'sale';
      } else if (this.type === 'price-up') {
        this.type = 'price-down';
      } else {
        this.type = 'price-up';
      }
    },
    // 重新获取goodList
    onRefresh() {
      this.loading = true;
      this.isLoading = false;
      this.finished = false;
      this.page = 1;
      this.resetGoodsList();
      this.getGoodsList({ page: 1, sortType: this.type });
      this.loading = false;
    },
    // 页面加载
    async onLoad() {
      this.loading = true;
      this.page += 1;
      const result = await this.getGoodsList({
        page: this.page,
        sortType: this.type,
      });
      // 判断是否加载完成
      if (result) {
        this.loading = false;
      } else {
        this.finished = true;
      }
    },
  },
  computed: {
    ...mapState({
      goodsList: (state) => state.goodsList,
    }),
  },
};
</script>

<style lang="less">
.list-header {
  position: relative;
  box-sizing: border-box;
  width: 296px;
  top: 0;
  left: 79px;
  padding: 0 8px;
  display: flex;
  // 位于容器结尾
  justify-content: flex-end;
  > div {
    width: 50px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: #cecece;
    position: relative;
  }
  .active,
  .price-up,
  .price-down {
    color: #ff1a90;
    font-weight: bold;
  }
  .price::after {
    content: "";
    border: 4px solid transparent;
    border-top-color: #aaa;
    position: absolute;
    bottom: 4px;
    right: 0;
  }
  .price::before {
    content: "";
    border: 4px solid transparent;
    border-bottom-color: #aaa;
    position: absolute;
    top: 4px;
    right: 0;
  }
  .price-up::before {
    border-bottom-color: #ff1a90;
  }
  .price-down::after {
    border-top-color: #ff1a90;
  }
}
.list-content {
  width: 296px;
  position: fixed;
  top: 170px;
  right: 0;
  bottom: 50px;
  overflow: auto;
  .van-pull-refresh {
    overflow: unset;
  }
}
</style>
