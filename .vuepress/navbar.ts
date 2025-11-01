/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "🏠 首页", link: "/" },
  { text: "🌐 Web 核心", link: "/basic/", activeMatch: "/basic/" },
  {
    text: "⚙️ 工程化与架构",
    link: "/engineering/",
    activeMatch: "/engineering/",
  },
  {
    text: "🏗️ 框架与组件开发",
    link: "/components/",
    activeMatch: "/components/",
  },
  { text: "🖥️ 服务端与全栈", link: "/serve/", activeMatch: "/serve/" },
  { text: "📦 工具资源库", link: "/tools/", activeMatch: "/tools/" },
]);
