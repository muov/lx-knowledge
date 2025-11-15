import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { fs, getDirname, path } from "vuepress/utils";
import theme from "./.vuepress/theme";
import { globSync } from "tinyglobby";

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
    "@theme/Nav/VPNavBarTitle.vue": resolve(
      "./.vuepress/theme/components/VPNavBarTitle.vue"
    ),
  },

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用
  theme,
  onGenerated: async (app) => {
    const names = ["Ma-Shan-Zheng", "Londrina-Sketch"];
    const dest = app.dir.dest("assets");
    const indexPath = app.dir.dest("index.html");
    const assets = globSync("*.ttf", { cwd: dest }) || [];
    const fonts = assets.filter((asset) =>
      names.some((name) => asset.includes(name))
    );
    let links = "";
    fonts.forEach((font) => {
      links += `<link rel="preload" href="/assets/${font}" as="font" type="font/ttf" crossorigin="anonymous">`;
    });
    const content = fs.readFileSync(indexPath, "utf-8");
    fs.writeFileSync(indexPath, content.replace("<head>", `<head>${links}`));
  },
});
