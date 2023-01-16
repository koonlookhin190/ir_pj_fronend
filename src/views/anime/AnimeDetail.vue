<template>
  <div v-for="item in GStore.animeDetail" :key="item.mal_id">
    <div class="dark:bg-gray-800 dark:text-gray-50">
      <div class="grid grid-cols-4 gap-4"></div>

      <div class="container grid grid-cols-12 mx-auto">
        <div
          class="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:col-span-6"
        >
          <img
            :src="item.images"
            alt=""
            class="h-6/12 w-6/12 ml-auto mr-auto w-80 hover:bg-gray-800 delay-50 duration-100 bg-gray-700 p-5 rounded-lg w-100 group"
          />
        </div>
        <div
          class="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700"
        >
          <div class="pt-6 pb-4 space-y-2">
            <h1 class="text-3xl font-bold">Title</h1>
            <p>{{ item.title }}</p>
          </div>
          <div class="pt-6 pb-4 space-y-2">
            <h1 class="text-3xl font-bold">Synopsis</h1>
            <p>
              {{ item.synopsis }}
            </p>
          </div>
          <div class="pt-6 pb-4 space-y-2">
            <h1 class="text-3xl font-bold">Background</h1>
            <p>
              {{ item.background }}
            </p>
          </div>
          <div class="pt-6 pb-4 space-y-2">
            <h1 class="text-3xl font-bold">Genres & Studios</h1>
            <p>
              <span> Genres </span> : {{ item.genres }} <span> Studio:</span>
              {{ item.studios }}
            </p>
          </div>
          <dropdown
            v-model="select"
            :options="choice"
            :selected="choose"
            v-on:updateOption="methodToRunOnSelect"
          ></dropdown>
          <button
            @click="add_bookmark()"
            class="bg-blue-500 text-white rounded-md px-2 py-1 m-auto"
          >
            Add Favorite
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Form } from 'vee-validate'
// import * as yup from 'yup'
import UserService from '@/service/UserService.js'
import dropdown from 'vue-dropdowns'
export default {
  inject: ['GStore'],
  name: 'AnimeDetailView',
  components: {
    dropdown
  },
  data() {
    return {
      select: null,
      choice: [
        { name: '1' },
        { name: '2' },
        { name: '3' },
        { name: '4' },
        { name: '5' }
      ],
      choose: {
        name: '1'
      }
    }
  },
  methods: {
    add_bookmark() {
      UserService.add_bookmark(
        this.GStore.currentUser.id,
        this.GStore.animeDetail[0].mal_id,
        this.choose.name
      ).then(() => {
        alert('Success add favorite')
      })
    },
    methodToRunOnSelect(payload) {
      this.choose = payload
    }
  }
}
</script>
<style>
span {
  font-weight: bold;
}
</style>
