import { defineClientConfig } from "vuepress/client";
import "~theme/styles/index.css";
import BookCard from "~theme/components/BookCard.vue";

export default defineClientConfig({
  enhance({ app }) {
    // 全局注册组件
    app.component("BookCard", BookCard);
  },
});
