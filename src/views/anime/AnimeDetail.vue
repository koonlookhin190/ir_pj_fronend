<template>
  <div v-for="item in GStore.animeDetail" :key="item.mal_id">
    <div class="dark:bg-gray-800 dark:text-gray-50">
      <div class="container grid grid-cols-12 mx-auto">
        <div
          class="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 lg:h-auto"
          style="
            background-image: url();
            background-position: center center;
            background-blend-mode: multiply;
            background-size: cover;
          "
        >
          <div class="flex flex-col items-center p-8 py-12 text-center">
            <!-- <span>12 June</span>
            <h1 class="py-4 text-5xl font-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h1>
            <p class="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!
            </p> -->
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-7 h-7"
            > -->
            <!-- <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg> -->
          </div>
        </div>
        <div
          class="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700"
        >
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
        </div>
      </div>
    </div>
    <img :src="item.images" alt="" />
    {{ item.images }}
    {{ item.titles }}
  </div>
</template>
<script>
export default {
  inject: ['GStore'],
  name: 'AnimeDetailView'
}
</script>
<style>
span {
  font-weight: bold;
}
</style>
