/**
 * @see https://theme-plume.vuejs.press/guide/collection/ 查看文档了解配置详情。
 */

import { defineCollections } from "vuepress-theme-plume";
import web from "./web";

/**
 * 导出所有的 collections
 * (blog 为博客示例，如果不需要博客功能，请删除)
 * (demoDoc 为参考示例，如果不需要它，请删除)
 */
export default defineCollections([...web]);
