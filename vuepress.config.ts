import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./.vuepress/theme";
const __dirname = getDirname(import.meta.url);
const resolve = (...dir: string[]) => path.resolve(__dirname, ...dir);

export default defineUserConfig({
  lang: "zh-CN",
  title: "沐沐物语-知识库",
  description: "一个小白立志成为全栈开发工程师的的成长物语！",
  dest: "docs",
  public: resolve("public"),
  cache: resolve(".vuepress/.cache"),
  temp: resolve(".vuepress/.temp"),

  head: [
    // 配置站点图标
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://theme-plume.vuejs.press/favicon-32x32.png",
      },
    ],
  ],

  alias: {
    "~theme": resolve("./.vuepress/theme"),
  },

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme,
});
