<script setup lang="ts">
import VPIcon from "@theme/VPIcon.vue";
import VPLink from "@theme/VPLink.vue";
import { computed } from "vue";

const { href, title, icon, description, target, rel, tag } = defineProps<{
  href: string;
  title?: string;
  icon?: string | { svg: string };
  description?: string;
  target?: string;
  rel?: string;
  tag?: string;
}>();

const tags = computed(() => tag?.split(",") ?? []);

const faviconIcon = computed(() => {
  if (icon) return icon;
  if (href) {
    const domain = href.replace(/^(https?:\/\/)/, "").split("/")[0];
    return `https://www.faviconextractor.com/favicon/${domain}`;
  }
  return undefined;
});
</script>

<template>
  <div class="vp-link-card">
    <span class="body">
      <VPLink
        :href="href"
        no-icon
        class="link no-icon"
        v-bind="{ target, rel }"
      >
        <slot name="title">
          <VPIcon v-if="faviconIcon" :name="faviconIcon" />
          <span v-if="title" class="text" v-html="title" />
        </slot>
      </VPLink>
      <slot>
        <p v-if="description" v-html="description" />
      </slot>
    </span>
    <div class="tags" v-if="tags.length">
      <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<style scoped>
.vp-link-card {
  position: relative;
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
  padding: 16px 20px;
  margin: 16px 0;
  background-color: transparent;
  border: solid 1px var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: var(--vp-shadow-1);
  transition:
    border-color var(--vp-t-color),
    box-shadow var(--vp-t-color),
    background-color var(--vp-t-color);
}

.vp-link-card:hover {
  background-color: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand-2);
  box-shadow: var(--vp-shadow-2);
}

.vp-link-card :deep(.vp-icon),
.vp-link-card :deep(.vp-icon-img) {
  margin: 0;
}

.vp-link-card .body {
  display: flex;
  flex: 1 2;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  width: 1px;
}

.vp-link-card .body > * {
  margin: 0;
}

.vp-link-card .link {
  display: flex;
  gap: 8px;
  align-items: center;
  max-width: 100%;
  font-size: 18px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color var(--vp-t-color);
}

.vp-link-card .link::before {
  position: absolute;
  inset: 0;
  z-index: 1;
  content: "";
}

.vp-link-card .link :deep(.vp-icon),
.vp-link-card .link :deep(.vp-icon-img) {
  margin: 0;
}

.vp-link-card .link .text {
  display: inline-block;
  flex: 1 2;
  min-width: 0;
  overflow-wrap: break-word;
}

.vp-link-card .tags {
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
  display: flex;
  gap: 0.2rem;
}

.vp-link-card .tags .tag {
  font-size: 0.8rem;
  background-color: var(--vp-c-gray-2);
  border-radius: 0.5rem;
  line-height: 1.2rem;
  padding: 0 0.3rem;
}
</style>

