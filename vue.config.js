const px2rem = require('postcss-px2rem');
// remUnit * 10 完整的rem
// 1remUnit 为一个rem 为十分之一整体距离
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5,
          }),
        ],
      },
    },
  },
};
