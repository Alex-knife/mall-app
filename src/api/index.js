// npm install axios;
import Axios from 'axios';
import baseURL, { URLs } from '@/api/URLs';

const appkey = 'alex_1614663726435';

// 通过axios创建请求实例
const request = Axios.create({
  baseURL,
  params: {
    appkey,
  },
});

// 用拦截器获取一份处理过的数据
request.interceptors.response.use((value) => value.data);

const getSideList = (type) => request.get(
  URLs.getSide,
  { params: { type } },
);

const getGoodsList = (type, page, size, sort) => request.get(
  URLs.getGoodsList,
  {
    params: {
      type, page, size, sort,
    },
  },
);

const likeSearch = (value) => request.get(
  URLs.likeSearch,
  { params: { likeValue: value } },
);

const search = (type, page, size) => request.get(
  URLs.search,
  { params: { type, page, size } },
);

export default {
  getSideList,
  getGoodsList,
  likeSearch,
  search,
};
