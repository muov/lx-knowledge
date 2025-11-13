/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "🏠 首页", link: "/" },
  {
    text: "📚 核心基础",
    link: "/core-fundamentals/adzhqh55/",
    activeMatch: "/core-fundamentals/",
  },
  {
    text: "🌐 框架生态",
    link: "/frameworks-ecosystem/2e95sxbz/",
    activeMatch: "/frameworks-ecosystem/",
  },
  {
    text: "⚙️ 工程化",
    link: "/engineering-tooling/",
    activeMatch: "/engineering-tooling/",
  },
  {
    text: "📦️ 多端",
    link: "/cross-platform/xwnvrxjz/",
    activeMatch: "/cross-platform/",
  },
  {
    text: "🚀 前沿",
    link: "/advanced-future-tech/a7lo9rj8/",
    activeMatch: "/advanced-future-tech/",
  },

  // {
  //   text: "⚙️ 工程化与架构",
  //   link: "/engineering/",
  //   activeMatch: "/engineering/",
  // },
  // {
  //   text: "🏗️ 框架与组件开发",
  //   link: "/components/",
  //   activeMatch: "/components/",
  // },
  // { text: "🖥️ 服务端与全栈", link: "/serve/", activeMatch: "/serve/" },
  // { text: "📦 工具资源库", link: "/tools/", activeMatch: "/tools/" },
  {
    text: "✨️ 更多",
    activeMatch: "/more/",
    items: [
      {
        text: "🔖 书签",
        link: "/more/bookmark/",
      },
      {
        text: "前端面试集锦 ",
        link: "/more/interview/",
      },
    ],
  },
]);
