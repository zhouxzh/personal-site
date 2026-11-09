import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://zhouxianzhong.cn",
  author: {
    name: "周贤中",
    url: "https://github.com/zhouxzh",
  },
  repo: "zhouxzh/personal-site",
  docsDir: "course-materials/vlsi-testing-technology/src",
  navbar,
  sidebar,
  footer: "超大规模集成电路测试基础",
  displayFooter: true,
  lastUpdated: false,
  contributors: false,
  editLink: false,
  plugins: {
    git: {
      createdTime: false,
      updatedTime: false,
      contributors: false,
      changelog: false,
    },
  },
  markdown: {
    attrs: true,
    codeTabs: true,
    tasklist: true,
    mark: true,
    sub: true,
    sup: true,
  },
});
