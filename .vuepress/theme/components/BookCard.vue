<template>
  <div class="book-card">
    <div class="book-cover">
      <img :src="image" :alt="title" />
    </div>
    <div class="book-info">
      <h3 class="book-title">
        <a target="_brank" :href="href" :title="`豆瓣读书 - 《${title}》`">{{
          title
        }}</a>
      </h3>
      <div class="book-paylaod">
        <span class="book-author">{{ author }}</span>
        <span class="read-time">{{ date }}</span>
      </div>
      <div class="book-desc">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  title: string;
  description: string;
  href: string;
  author: string;
  date: string;
}>();
</script>

<style scoped lang="scss">
.book-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  margin: 16px 0;
  background-color: transparent;
  border: solid 1px var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: var(--vp-shadow-1);
  transition:
    border-color var(--vp-t-color),
    box-shadow var(--vp-t-color),
    background-color var(--vp-t-color);
  .book-cover {
    width: 152px;
    aspect-ratio: 9 / 13;
    flex-shrink: 0;
  }
  .book-info {
    flex: 1;
    min-width: 0;
  }

  .book-title {
    min-height: 24px;
    margin: 0 0 8px;
    font-size: 20px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  .book-paylaod {
    margin: 12px 0;
    display: flex;
    justify-content: space-between;
  }
  .book-desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
  }
}
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>

