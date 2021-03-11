<template>
  <div class="card-wrapper van-hairline--bottom">
    <div class="card-img">
      <img :src="images[0]" />
    </div>
    <div class="card-content">
      <div class="title overflow-hidden">{{ title }}</div>
      <div class="desc overflow-hidden">{{ desc }}</div>
      <!-- 标签 -->
      <div class="tags">
        <div v-for="i in tags" :key="i">{{ i }}</div>
      </div>
      <div class="price">￥{{ price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  // 每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值
  props: ['images', 'title', 'desc', 'tags', 'price'],
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
  }
}
.overflow-hidden {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
