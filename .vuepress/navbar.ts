/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "首页", link: "/", icon: "icon-home" },
  {
    text: "Web 前端",
    icon: "icon-yingyong",
    activeMatch: "/web/",
    prefix: "/web/",
    items: [
      {
        text: "核心基础",
        icon: "icon-xingqiu",
        activeMatch: "/core/",
        link: "core/90j9jwqp/",
      },
      {
        text: "框架生态",
        icon: "icon-mti-shengtaihuanjing",
        activeMatch: "/frameworks/",
        link: "frameworks/2e95sxbz/",
      },
      {
        text: "工程化",
        icon: "icon-jiqunguanliicon",
        activeMatch: "/engineering/",
        link: "engineering/0i0fxti7/",
      },
      {
        text: "多端开发",
        icon: "icon-kuaduanjiaohu",
        activeMatch: "/platform/",
        link: "platform/xwnvrxjz/",
      },
      {
        text: "前沿领域",
        icon: "icon-chuangyeqianyan",
        activeMatch: "/advanced/",
        link: "advanced/rfwdqhak/",
      },
    ],
  },
  { text: "Serve 服务端", link: "/serve/", icon: "icon-fuwuduanpeizhi" },
  { text: "DevOps 运维", link: "/devops/", icon: "icon-yunweiguanli" },
  {
    text: "更多",
    icon: "icon-chuangyizhan",
    activeMatch: "/more/",
    items: [
      {
        text: "书签",
        icon: "icon-shuqian-",
        link: "/more/bookmark/",
      },
      {
        text: "前端面试 ",
        icon: "icon-xiangfa",
        link: "/more/interview/",
      },
      {
        text: "我的书籍 ",
        icon: "icon-shuji",
        link: "/more/ebook/",
      },
    ],
  },
]);
