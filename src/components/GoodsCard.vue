<template>
  <div class="card-wrapper van-hairline--bottom">
    <div class="card-img">
      <img :src="images[0]" ref="img"/>
    </div>
    <div class="card-content">
      <div class="title overflow-hidden">{{ title }}</div>
      <div class="desc overflow-hidden">{{ desc }}</div>
      <!-- 标签 -->
      <div class="tags">
        <div v-for="i in tags" :key="i">{{ i }}</div>
      </div>
      <div class="price">￥{{ price }}</div>
      <!-- 计算数据的变化，并存储在本地的localStorage中 -->
      <div class="counter">
        <div @touchend="counter(id, -1)" v-if="num">
          <img
            src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png"
          />
        </div>
        <div class="price_num" v-if="num">{{ num }}</div>
        <div @touchend="counter(id, 1)">
          <img
            src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Animate from '@/tools/animate';

export default {
  // 每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值
  //   num 存放在本地
  props: ['images', 'title', 'desc', 'tags', 'price', 'id', 'num', 'nofly'],
  methods: {
    ...mapMutations(['storageChange']),
    counter(id, num) {
      // 获得本地存储
      this.storageChange({ id, value: num });
      if (num === -1) {
        return;
      }
      if (this.nofly) {
        return;
      }
      // 图片 和 购物车 位置
      const { top, left } = this.$refs.img.getBoundingClientRect();
      const shopCart = document.getElementById('shop-cart');
      const { top: cartY, left: cartX } = shopCart.getBoundingClientRect();
      // 图片 和 购物车 宽高
      const { offsetWidth: imgWidth, offsetHeight: imgHeight } = this.$refs.img;
      const { offsetWidth: cartWidth, offsetHeight: cartHeight } = shopCart;
      // 结束 位置
      const endX = cartX + cartWidth / 2;
      const endY = cartY + cartHeight / 2;
      Animate({
        startX: left,
        startY: top,
        endX,
        endY,
        src: this.$refs.img.src,
        width: imgWidth,
        height: imgHeight,
      });
    },
  },
};
</script>

<style lang="less">
.card-wrapper {
  width: 100%;
  display: flex;
  height: 100px;
  .card-img {
    width: 90px;
    margin-right: 20px;
    img {
      width: 90px;
      height: 90px;
    }
  }
  .card-content {
    // 相当于 flex-grow ??? 占剩下面积所有的flex 1
    flex: 1;
    position: relative;
    > div {
      width: 170px;
    }
    .title {
      font-size: 13px;
      color: #1a1a1a;
      margin-top: 5px;
    }
    .desc {
      color: #aaa;
      font-size: 11px;
      margin-top: 5px;
    }
    .tags {
      display: flex;
      margin-top: 4px;
      > div {
        font-size: 10px;
        padding: 2px;
        color: #aaa;
        border-radius: 3px;
        border: 1px solid #aaa;
        margin-right: 5px;
      }
    }
    .price {
      font-size: 14px;
      font-weight: 600;
      color: #ff1a90;
      margin-top: 4px;
    }
    .counter {
      position: absolute;
      bottom: 12px;
      right: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      // 两个按钮样式
      > div:not(.price_num) {
        width: 16px;
        height: 16px;
        img {
          width: 100%;
        }
      }
      .price_num {
        padding: 0px 5px;
        height: 22px;
        line-height: 22px;
      }
    }
  }
}
.overflow-hidden {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
