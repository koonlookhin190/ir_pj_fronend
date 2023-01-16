<template>
  <h1 class="text-8xl mb-20 mt-20">TOP 12 ANIME 🔥</h1>
  <div class="grid grid-cols-4 gap-4">
    <CardView
      v-for="item in GStore.animeTop.info"
      :key="item.mal_id"
      :item="item"
    >
    </CardView>
  </div>
</template>

<script>
import CardView from '@/components/Card.vue'
export default {
  inject: ['GStore'],
  name: 'HomeView',
  components: {
    CardView
  }
}
</script>
