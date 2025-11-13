import { defineClientConfig } from "vuepress/client";
import "~theme/styles/index.css";
import VPNavBarTitle from "~theme/components/VPNavBarTitle.vue";

export default defineClientConfig({
  enhance({ app }) {
    // 全局注册组件
    // app.component("RepoCard", RepoCard);
  },
});
