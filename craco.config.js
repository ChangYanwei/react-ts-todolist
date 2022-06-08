const path = require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    // 配置路径别名
    alias: {
      "@src": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    // 配置使用less
    {
      plugin: CracoLessPlugin,
    },
  ],
};
