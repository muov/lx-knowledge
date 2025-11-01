import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
  // doc 类型，该类型带有侧边栏
  type: "doc",
  // 文档集合所在目录，相对于 `docs`
  dir: "🏗️ 框架与组件开发",
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: "/components",
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: "🏗️ 框架与组件开发",
  // 手动配置侧边栏结构
  sidebar: "auto",
});
