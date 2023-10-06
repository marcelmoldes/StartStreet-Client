<template>
  <div
    class="m-9 text-center md:w-80 lg:w-80 grid-cols-4 w-50 md:py-20 leading-150 py-20"
  >
    <a :href="`/items/${item.slug}`" class="">
      <img :src="item.images[0].url" class="ring ring-white w-96 h-96" />

      <h1
        class="font-extrabold text-lg p-5 italic text-black items-center align-items text-center m-7 mt-6 rounded-lg h-6"
      >
        {{ item.title }}
      </h1></a
    >

    <h1 class="text-lg m-5">{{ item.price }} $</h1>
    <button type="button" class="">
      <HeartIconSolid
        class="w-8 ring ring-black flex-shrink-0 fill-orange-600"
        aria-hidden="true"
        v-if="item.favorite"
        @click="$emit('removeFavorite', item.id)"
      />
      <HeartIcon
        class="w-8 ring ring-black flex-shrink-0"
        v-else
        @click="client ? $emit('setFavorite', item.id) : $router.push('/login')"
      />
    </button>
  </div>
</template>
<script>
import { HeartIcon } from "@heroicons/vue/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/vue/20/solid";

export default {
  props: ["item", "client"],
  emits: ["setFavorite", "removeFavorite"],
  components: {
    HeartIcon,
    HeartIconSolid,
  },
};
</script>

<style>
</style>