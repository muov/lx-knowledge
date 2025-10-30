import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
  enhance({ app }) {
    // 全局注册组件
    // app.component("RepoCard", RepoCard);
  },
});
