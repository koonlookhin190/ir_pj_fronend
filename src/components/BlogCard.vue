<template>
  <!-- component -->
  <div class="flex items-center justify-center">
    <div
      class="p-4 items-center justify-center w-[680px] rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl"
    >
      <img
        class="mx-auto w-full block w-6/12 h-70 rounded-lg"
        alt="art cover"
        loading="lazy"
        :src="item.images"
      />
      <div class="sm:w-8/12 pl-0 p-5">
        <div class="space-y-2">
          <div class="space-y-4">
            <h4 class="text-2xl font-semibold text-cyan-900 text-justify">
              {{ item.title }}
            </h4>
          </div>
          <div class="flex items-center space-x-4 justify-between">
            <div class="text-grey-500 flex flex-row space-x-1 my-4">
              <p class="text-xs">You give a score {{ item.score }}</p>
            </div>
            <div class="flex flex-row space-x-1">
              <button
                @click="delete_bookmark"
                class="bg-red-500 shadow-lg shadow- shadow-red-600 text-white cursor-pointer px-3 py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from '@/service/UserService'
export default {
  inject: ['GStore'],
  name: 'BlogCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      anime_id: this.item.mal_id
    }
  },
  methods: {
    delete_bookmark() {
      console.log(this.anime_id)
      UserService.remove_bookmark(this.GStore.currentUser.id, this.anime_id)
      setTimeout(() => this.$router.go(), 1000)
    }
  }
}
</script>
