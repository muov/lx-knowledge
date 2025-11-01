/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from "vuepress-theme-plume";
import navbar from "./navbar";
import collections from "./collections/index";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: "/title-logo.svg",

  appearance: true, // 配置 深色模式

  social: [{ icon: "github", link: "/" }],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  // footer: {
  //   message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
  //   copyright: '',
  // },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: "/logo-transparent.png",
    name: "沐沐物语",
    description: "一个小白立志成为全栈开发工程师的的成长物语！",
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  collections,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

  footer: {
    message: `
      <a style="text-decoration: none;" title="豫ICP备18027433号" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
        <img alt="豫ICP备18027433号" style="display: inline-block; vertical-align: middle;" src="https://img.shields.io/badge/%E8%B1%AB-18027433-%234A9FF6" />
      </a>
      <a style="text-decoration: none;" title="萌ICP备20240840号" href="https://icp.gov.moe/?keyword=20240840" target="_blank" rel="noopener noreferrer">
        <img alt="萌ICP备20240840号" style="display: inline-block; vertical-align: middle;" src="https://img.shields.io/badge/%E8%90%8C-20240840-%23FF1485" />
      </a>
      <a style="text-decoration: none;" title="本网站由又拍云提供CDN加速/云存储服务" href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank" rel="noopener noreferrer">
        <img alt="本网站由又拍云提供CDN加速/云存储服务" style="display: inline-block; vertical-align: middle;" src="https://img.shields.io/badge/%E5%8F%88%E6%8B%8D%E4%BA%91-CDN%E5%8A%A0%E9%80%9F%2F%E4%BA%91%E5%AD%98%E5%82%A8-%2305A2FF" />
      </a>
    `,
    copyright: "© Copyright 2024 All Rights Reserved. 版权所有：Moe Cryo",
  },
  externalLinkIcon: false,
});
