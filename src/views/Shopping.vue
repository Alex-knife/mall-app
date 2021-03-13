<template>
  <div class="shopping">
    <div class="top-nav">
      <van-nav-bar title="购物车" right-text="删除" @click-right="del" />
    </div>
    <div class="card-list">
      <!-- result 存放的是 checkbox的name对应的item.id -->
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <div class="card-box" v-for="item in list" :key="item.id">
          <!-- :name="item.id"作用 -->
          <van-checkbox class="check" :name="item.id"></van-checkbox>
          <goods-card
            v-bind="item"
            :num="counterMap[item.id]"
            :nofly="true"
          ></goods-card>
        </div>
      </van-checkbox-group>
    </div>
    <van-submit-bar
      :price="allMoney"
      :button-text="`结算(￥${totalNum})`"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import GoodsCard from '@/components/GoodsCard.vue';
import { mapMutations, mapState } from 'vuex';
import { Dialog, Toast } from 'vant';

export default {
  components: {
    GoodsCard,
  },
  data() {
    return {
      // 勾选购物车后的商品信息
      result: [],
      // 返回的值，选中打勾的内容时
      list: [],
      checked: false,
    };
  },
  methods: {
    ...mapMutations(['storageChange']),
    async del() {
      if (this.result.length === 0) {
        Toast('请选择想要删除的商品');
      }
      try {
        await Dialog.confirm({ message: '是否删除选中商品' });
        this.result.forEach((id) => {
          // 删除全部
          this.storageChange({ id, value: -Infinity });
          // 保留不在result的值
          this.list = this.list.filter((item) => !this.result.includes(item.id));
        });
      } catch (error) {
        Toast('取消删除');
      }
    },
    checkAll() {
      if (this.checked) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll(false);
      }
    },
    // 从id中获取商品信息
    async getAllData() {
      const result = Object.keys(this.counterMap);
      // 获得的  id  用来进行商品列表的  搜索
      const res = await this.$api.getGoodsByIds(result.join());
      this.list = res.list;
    },
    onSubmit() {},
  },
  created() {
    this.getAllData();
  },
  watch: {
    // 监听不全选时去勾
    result() {
      if (this.result.length === this.list.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
  },
  computed: {
    ...mapState({
      counterMap: (state) => state.counterMap,
    }),
    allMoney() {
      // 从所有列表中 过滤选中的内容
      const resArr = this.list.filter((item) => this.result.includes(item.id));
      return resArr.reduce((prev, next) => {
        const num = this.counterMap[next.id] || 0;
        return prev + Math.round(num * next.price * 100);
      }, 0);
    },
    totalNum() {
      // 被选中的数组
      const resArr = this.list.filter((item) => this.result.includes(item.id));
      // 多个数组选中进行相加
      const res = resArr.reduce(
        (prev, next) => prev + (this.counterMap[next.id] || 0),
        0,
      );
      return res;
    },
  },
};
</script>

<style lang="less" scoped>
.shopping {
  background: #eee;
  min-height: 100vh;
  .top-nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
  .card-list {
    width: 100%;
    position: absolute;
    top: 46px;
    z-index: 0;
    box-sizing: border-box;
    padding: 10px 10px 100px;
    background: #fff;
    .card-box {
      display: flex;
      justify-content: center;
      .check {
        margin-right: 10px;
        flex-shrink: 0;
      }
    }
  }
  .van-submit-bar {
    bottom: 50px;
  }
}
</style>
