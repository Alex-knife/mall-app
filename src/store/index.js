import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 从一级menuList获取第几个查到二级sideList
    sideList: [],
    showContent: false,
    size: 5,
    // 通过二级获取详情信息goodList
    goodsList: [],
    type: null,
    // id：数量    存的值是cardList
    counterMap: {},
  },
  mutations: {
    storageChange(state, { id, value }) {
      // 先判断是否存在，无则加1
      if (state.counterMap[id]) {
        // 改变存储数值，减到0则删除
        if ((value === -1 && state.counterMap[id] === 1) || value === -Infinity) {
          Vue.delete(state.counterMap, id);
        } else {
          // vue.set(target, key, value)
          // 更改的数据源  更改的数据 重新赋的值
          Vue.set(state.counterMap, id, state.counterMap[id] + value);
        }
      } else {
        Vue.set(state.counterMap, id, 1);
      }
      localStorage.setItem('goods', JSON.stringify(state.counterMap));
    },
    setCounterMap(state, map) {
      state.counterMap = map;
    },
    setSideList(state, list) {
      state.sideList = list;
    },
    setShowContent(state, bool) {
      state.showContent = bool;
    },
    setGoodsList(state, list) {
      // 获取多个数据，原来+list --》 进行合并
      state.goodsList = [...state.goodsList, ...list];
    },
    resetGoodsList(state) {
      state.goodsList = [];
    },
    setGoodsType(state, type) {
      state.type = type;
    },
  },
  actions: {
    // 获取二级导航目录 【通过顶部导航栏选取的位置获取】
    async getSideList({ commit }, type) {
      commit('setShowContent', false);
      const value = await api.getSideList(type);
      // await后面为异步触发，先后次序
      commit('setSideList', value);
      console.log(value);
      commit('setShowContent', true);
    },
    // 获得二级列表对应的值及信息 【综合 销量 价格】
    async getGoodsList({ state }, options) {
      const { page, sortType } = options;
      // type解构不出来或者从state中获取
      const type = options.type || state.type;
      this.commit('setGoodsType', type);
      const { list, total } = await api.getGoodsList(type, page, state.size, sortType);
      this.commit('setGoodsList', list);
      // console.log(list);
      if (total > state.goodsList.length) {
        return true;
      }
      return false;
    },
  },
  modules: {
  },
});
