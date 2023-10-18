<template>
  <div class="px-20 ">
    <a
      :href="`/categories/${category.slug}`"
      class="m-9  text-center lg:w-80 grid-cols-4 w-50 leading-150 mt-8"
    >
      <img
        :src="category.photo_url"
        class="ringb mt-9  ring-white md:w-96 md:h-96 w-96 h-96"
      />
    </a>
    <h1 
      class=" text-gray-400  px-2 py-2 italic text-xl   items-center align-items text-center m-6 rounded-lg "
    >
      {{ category.title }}
    </h1>
  </div>
</template>
   
   <script>
export default {
  props: ["category"],
};
</script>
   
   <style>
</style>