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
  ],
  // 按需加载
  plugins: ["@babel/plugin-proposal-class-properties"]
};
