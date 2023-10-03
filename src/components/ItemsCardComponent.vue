<template>
  <div class="m-9 text-center lg:w-80 grid-cols-4 w-50 leading-150 py-20">
    <a :href="`/items/${item.slug}`" class="">
      <img :src="item.images[0].url" class="ring ring-white w-96 h-96" />
    
      <h1
        class="font-extrabold underline decoration-1 text-xl p-5 font-mono text-gray-200 items-center align-items text-center m-7 mt-6 rounded-lg h-6"
      >
        {{ item.title }}
      </h1></a
    >

    <h1>{{ item.price }}</h1>  <button type="button" class="">
        <HeartIconSolid
          class="h-7 w-7 flex-shrink-0 fill-orange-600"
          aria-hidden="true"
          v-if="item.favorite"
          @click="$emit('removeFavorite', item.id)"
        />
        <HeartIcon
          class="h-6 w-6 flex-shrink-0"
          v-else
          @click="
            client ? $emit('setFavorite', item.id) : $router.push('/login')
          "
        />
      </button>
  </div>
</template>

<script>
import { HeartIcon } from "@heroicons/vue/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/vue/20/solid";

export default {
  props: ["item","client"],
  emits:['setFavorite','removeFavorite'],
  components: {
    HeartIcon,
    HeartIconSolid,
  },
};
</script>

<style>
</style>