import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./.vuepress/theme";

const __dirname = getDirname(import.meta.url);
const resolve = (...dir: string[]) => path.resolve(__dirname, ...dir);

export default defineUserConfig({
  lang: "zh-CN",
  title: "沐沐物语",
  description: "一个小白立志成为全栈开发工程师的的成长物语！",
  dest: "docs",
  public: resolve("public"),
  cache: resolve(".vuepress/.cache"),
  temp: resolve(".vuepress/.temp"),

  head: [
    ["link", { ref: "icon", href: "/favicon.ico", type: "image/x-icon" }],
    ["meta", { "http-equiv": "X-UA-Compatible", content: "IE=edg" }],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],

  alias: {
    "~theme": resolve("./.vuepress/theme"),
  },

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用
  theme,
});
