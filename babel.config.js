module.exports = {
  presets: [
    "@vue/app",
    // 兼容配置
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry"
      }
    ]
  ]
};
