import { defineUserConfig } from "vuepress";
// import { hopeTheme } from "vuepress-theme-hope";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/courses/fpga-system-design/",

  lang: "zh-CN",
  title: "FPGA 系统设计",
  description: "FPGA 系统设计课程讲义、实验和课程设计",

  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

