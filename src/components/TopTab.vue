<template>
  <!-- 顶层一级导航 -->
  <!-- 移动时，不触发点击 -->
  <!-- ref来获取父级的宽度 -->
  <div class="one-tab-wrapper" ref="oneTab">
    <div
      class="tab-item"
      v-for="(item, i) in menuList"
      :key="item.title"
      :class="{ active: index == i }"
      @touchend="scrollTo(i, $event)"
      @touchstart="move = false"
      @touchmove="move = true"
    >
      <div class="img-wrapper">
        <img :src="item.imgURL" />
      </div>
      <div class="tab-title">{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import tools from '@/utils/tools';

export default {
  data() {
    return {
      // 记录点击数据所在位置
      index: 0,
      move: false,
      menuList: [
        {
          title: '时令水果',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg',
        },
        {
          title: '酒水冲调',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg',
        },
        {
          title: '安心乳品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg',
        },
        {
          title: '休闲零食',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg',
        },
        {
          title: '肉蛋食材',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg',
        },
        {
          title: '新鲜蔬菜',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg',
        },
        {
          title: '熟食餐饮',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg',
        },
        {
          title: '海鲜水产',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg',
        },
        {
          title: '粮油调味',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg',
        },
        {
          title: '某手美食',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg',
        },
        {
          title: '纸杯清洁',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg',
        },
        {
          title: '个人护理',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg',
        },
        {
          title: '美妆护肤',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg',
        },
        {
          title: '家居收纳',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg',
        },
        {
          title: '家用电器',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg',
        },
        {
          title: '3C数码',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg',
        },
        {
          title: '母婴用品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg',
        },
        {
          title: '鲜花绿植',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg',
        },
        {
          title: '宠物用品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg',
        },
        {
          title: '图书玩具',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg',
        },
        {
          title: '手表配饰',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
      ],
    };
  },
  methods: {
    ...mapActions(['getSideList']),
    scrollTo(i, e) {
      if (this.move) {
        return;
      }
      this.index = i;
      const tabWidth = e.target.offsetWidth;
      const tabLeft = e.target.getBoundingClientRect().left;
      const { oneTab } = this.$refs;
      const wrapperWidth = oneTab.offsetWidth;
      //  使小块 滑动到中间
      //   oneTab.scrollLeft += tabLeft + tabWidth / 2 - wrapperWidth / 2;
      tools.moveTo(oneTab.scrollLeft, tabLeft + tabWidth / 2
                   - wrapperWidth / 2, oneTab, 'scrollLeft');
      // 滑到位置，搜索其二级菜单列表
      this.getSideList(this.menuList[i].title);
    },
    // moveTo(start, end) {
    //   let distance = 0;
    //   let speed = 3;
    //   if (end < 0) {
    //     speed *= -1;
    //   }
    //   const t = setInterval(() => {
    //     distance += speed;
    //     this.$refs.oneTab.scrollLeft = start + distance;
    //     if (Math.abs(distance) > Math.abs(end)) {
    //       this.$refs.oneTab.scrollLeft = start + end;
    //       clearInterval(t);
    //     }
    //   }, 2);
    // },
  },
  mounted() {
    this.getSideList(this.menuList[0].title);
  },
};
</script>

<style lang="less" scoped>
.one-tab-wrapper {
  width: 370px;
  height: 104px;
  display: flex;
  overflow: auto;
  .tab-item {
    width: 50px;
    height: 70px;
    padding: 10px 5px;
    .img-wrapper {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-content: center;
      border: 2px solid #fff;
      border-radius: 23px;
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        align-self: center;
      }
    }
    .tab-title {
      margin-top: 5px;
      text-align: center;
      font-size: 12px;
    }
  }
  .active {
    .img-wrapper {
      border-color: #d13193;
    }
    .tab-title {
      color: #fff;
      background-color: #d13193;
      border-radius: 30px;
      font-weight: bold;
    }
  }
}
.one-tab-wrapper::-webkit-scrollbar {
  width: 0;
  background: none;
}
</style>
