<template>
  <div class="sidetap-wrapper" ref="side">
    <div
      v-for="(item, i) in sideList"
      :key="item"
      :class="{ active: index === i }"
      @touchend="scrollTo(i, $event)"
      @touchstart="move = false"
      @touchmove="move = true"
    >
      {{ i === 0 ? "全部" : item }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import tools from '@/utils/tools';

export default {
  data() {
    return {
      index: 0,
      move: false,
    };
  },
  computed: {
    // 从vuex中state取值
    ...mapState({
      sideList: (state) => state.sideList,
    }),
  },
  methods: {
    ...mapMutations(['resetGoodsList']),
    ...mapActions(['getGoodsList']),
    scrollTo(i, e) {
      if (!this.move) {
        this.index = i;
      }
      const { side } = this.$refs;
      const sideHeight = e.target.offsetHeight;
      const sideTop = e.target.getBoundingClientRect().top;
      const sideTotalTop = side.getBoundingClientRect().top;
      const sideTotalHeight = side.offsetHeight;
      //   side.scrollTop += sideTop + sideHeight / 2 - sideTotalHeight / 2 - sideTotalTop;
      tools.moveTo(
        side.scrollTop,
        sideTop + sideHeight / 2 - sideTotalHeight / 2 - sideTotalTop,
        side,
        'scrollTop',
      );
      // 点击二级导航，从而获取数据【获取列表页】
      this.resetGoodsList();
      this.getGoodsList({ type: this.sideList[i], page: 1, sortType: 'all' });
    },
  },
  mounted() {
    this.resetGoodsList();
    // 挂载的时候，获取到是第一个的title
    this.getGoodsList({ type: this.sideList[0], page: 1, sortType: 'all' });
  },
};
</script>

<style lang="less">
.sidetap-wrapper {
  position: fixed;
  left: 0;
  top: 135px;
  bottom: 50px;
  width: 79px;
  overflow: auto;
  background: #f8f8f8;
  div {
    width: 79px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: relative;
  }
  .active {
    font-weight: bold;
    color: #ff1a90;
  }
  .active::before {
    position: absolute;
    background-color: #ff1a90;
    width: 6px;
    height: 18px;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    content: "";
  }
}
.sidetap-wrapper::-webkit-scrollbar {
  width: 0;
  background: none;
}
</style>
