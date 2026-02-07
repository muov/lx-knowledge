/**
 * @description 书签导航
 */
import { defineCollection } from "vuepress-theme-plume";
export default defineCollection({
  type: "doc",
  dir: "Nav 链接",
  title: "书签导航",
  linkPrefix: "/nav/",
  sidebarCollapsed: true,
  sidebar: "auto",
});
