<template>
  <!-- {{ GStore.bookmarkList }} -->
  <div class="grid grid-cols-3 gap-3">
    <BlogCard
      v-for="item in GStore.bookmarkList.animes_bookmark"
      :key="item.mal_id"
      :item="item"
    >
    </BlogCard>
  </div>
</template>
<script>
import BlogCard from '@/components/BlogCard.vue'
export default {
  inject: ['GStore'],
  name: 'BookmarkList',
  components: {
    BlogCard
  }
}
</script>
