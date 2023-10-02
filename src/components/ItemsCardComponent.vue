<template>
  <div class=" m-9 text-center lg:w-80 grid-cols-4 w-50 leading-150 py-20">
     <a
    :href="`/items/${item.slug}`"
    class="">
   
      <img :src="item.image" class="ring  ring-white w-96 h-96" />   <h1
        class="font-extrabold underline decoration-1 text-xl p-5 font-mono text-gray-200 items-center align-items text-center m-7 mt-6 rounded-lg h-6"
      >
        {{ item.title }}
      
      </h1></a>
     
      <h1>{{ item.price }}</h1>
    
  </div>
</template>

<script>
export default {
  props: ["item",],
};
</script>

<style>
</style>