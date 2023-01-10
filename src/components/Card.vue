<template>
  <!-- component -->
  <div class="flex items-center justify-center">
    <!-- Card -->
    <a
      class="w-80 hover:bg-blue-900 delay-50 duration-100 bg-blue-700 p-5 rounded-lg w-100 group"
      href=""
    >
      <!-- Image Cover -->
      <img :src="item.images" class="w-full rounded shadow" />
      <!-- Title -->
      <h3 class="flex text-gray-200 font-bold mt-5">{{ item.title }}</h3>

      <!-- Description -->
      <!-- <p class="text-gray-400 font-light mt-2 text-xs"> Your daily update of the most played track from around the world...</p> -->
    </a>
  </div>
</template>
<script>
export default {
  name: 'EventCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
