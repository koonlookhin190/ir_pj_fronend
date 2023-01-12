<template>
  <div class="pt-10 pb-10 bg-blue-500">
    <!-- {{ GStore.animeList }} -->
    <!-- <div id="app">
    <div v-for="item in GStore.animeList" :key="item.aired">
      {{ item.mal_id }}
      {{ item.title }}
      {{ item.images }}
    </div>
  </div> -->
    <div class="grid grid-cols-4 gap-4">
      <CardView
        v-for="item in GStore.animeList.info"
        :key="item.mal_id"
        :item="item"
      >
      </CardView>
    </div>
  </div>
</template>
<script>
import CardView from '@/components/Card.vue'
export default {
  inject: ['GStore'],
  name: 'AnimeListView',
  components: {
    CardView
  }
}
</script>
