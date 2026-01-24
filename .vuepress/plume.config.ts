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

  social: [
    {
      icon: {
        svg: `<svg t="1734228496106" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8154" width="200" height="200"><path d="M512 0l441.557333 256v512L512 1024 70.442667 768V256z m0 13.909333L80.938667 262.741333v497.664L512 1009.194667l431.061333-248.789334V262.741333zM377.173333 875.648l-247.509333-142.890667V291.242667L512 70.528l95.146667 54.912-380.8 221.653333v329.813334l247.125333 142.72z m268.757334-727.808l248.405333 143.402667v441.514666L512 953.472l-97.024-55.978667 382.677333-220.586666v-329.813334l-248.448-143.445333z m-91.178667 142.933333v122.410667l1.024 327.082667-29.482667 16.384-93.013333-53.290667 0.341333-290.176H382.208L381.866667 356.309333l145.578666-83.84z" p-id="8155" fill="currentColor"></path></svg>`,
        name: "1Panel",
      },
      link: "https://web.mu00.cn:1314/",
    },
    {
      icon: {
        svg: `<svg t="1723730677484" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6449" style="width: 1.25rem; height: 1.25rem; vertical-align: middle;"><path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m259.168-568.896h-290.752a25.28 25.28 0 0 0-25.28 25.28l-0.032 63.232c0 13.952 11.296 25.28 25.28 25.28h177.024a25.28 25.28 0 0 1 25.28 25.28v12.64a75.84 75.84 0 0 1-75.84 75.84h-240.224a25.28 25.28 0 0 1-25.28-25.28v-240.192a75.84 75.84 0 0 1 75.84-75.84h353.92a25.28 25.28 0 0 0 25.28-25.28l0.064-63.2a25.312 25.312 0 0 0-25.28-25.312H417.184a189.632 189.632 0 0 0-189.632 189.6v353.952c0 13.952 11.328 25.28 25.28 25.28h372.928a170.656 170.656 0 0 0 170.656-170.656v-145.376a25.28 25.28 0 0 0-25.28-25.28z" p-id="6450" fill="currentColor"></path></svg>`,
        name: "gitee",
      },
      link: "https://gitee.com/SunnyBoy_mu",
    },
    { icon: 
      {
        svg:`<svg t="1769233202165" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4585" width="200" height="200"><path d="M950.857143 512q0 143.428571-83.714286 258t-216.285714 158.571429q-15.428571 2.857143-22.571429-4t-7.142857-17.142857l0-120.571429q0-55.428571-29.714286-81.142857 32.571429-3.428571 58.571429-10.285714t53.714286-22.285714 46.285714-38 30.285714-60 11.714286-86q0-69.142857-45.142857-117.714286 21.142857-52-4.571429-116.571429-16-5.142857-46.285714 6.285714t-52.571429 25.142857l-21.714286 13.714286q-53.142857-14.857143-109.714286-14.857143t-109.714286 14.857143q-9.142857-6.285714-24.285714-15.428571t-47.714286-22-49.142857-7.714286q-25.142857 64.571429-4 116.571429-45.142857 48.571429-45.142857 117.714286 0 48.571429 11.714286 85.714286t30 60 46 38.285714 53.714286 22.285714 58.571429 10.285714q-22.857143 20.571429-28 58.857143-12 5.714286-25.714286 8.571429t-32.571429 2.857143-37.428571-12.285714-31.714286-35.714286q-10.857143-18.285714-27.714286-29.714286t-28.285714-13.714286l-11.428571-1.714286q-12 0-16.571429 2.571429t-2.857143 6.571429 5.142857 8 7.428571 6.857143l4 2.857143q12.571429 5.714286 24.857143 21.714286t18 29.142857l5.714286 13.142857q7.428571 21.714286 25.142857 35.142857t38.285714 17.142857 39.714286 4 31.714286-2l13.142857-2.285714q0 21.714286 2.857143 50.857143t2.857143 30.857143q0 10.285714-7.428571 17.142857t-22.857143 4q-132.571429-44-216.285714-158.571429t-83.714286-258q0-119.428571 58.857143-220.285714t159.714286-159.714286 220.285714-58.857143 220.285714 58.857143 159.714286 159.714286 58.857143 220.285714z" p-id="4586"></path></svg>`,
        name:'github'
      }, link: "https://github.com/sunnyboy-mu", },
    {
      icon: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>`,
        name: "email",
      },
      link: "mailto:sunnyboy_mu@163.com",
    },
  ],
  navbarSocialInclude: ["1Panel", "gitee", "github", "email"],

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

  editLinkText: "在 GitHub 上编辑此页",

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
