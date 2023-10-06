<template>
  <div class="px-20 ">
    <a 
    :href="`/categories/${category.slug}`"
    class="m-9 text-center lg:w-80 grid-cols-4 w-50 leading-150 mt-6">
      <h1
        class="font-bold text-xl p-5 italic text-black items-center align-items text-center m-7 mt-6 rounded-lg h-6"
      >
     {{category.title}}
      </h1>
      <img
        :src="category.photo_url"
        class="ring rounded-lg ring-white w-96 h-96"
      />
    </a>
  </div>
</template>
   
   <script>
export default {
  props: ["category"]
}
</script>
   
   <style>
</style>