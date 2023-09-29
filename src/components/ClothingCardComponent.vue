<template>
  <div class="">
    <a 
    :href="`/clothing/${clothes.slug}`"
    class="m-9 text-center lg:w-80 grid-cols-4 w-50 leading-150 mt-6">
      <h1
        class="font-extrabold underline decoration-1 text-xl p-5 font-mono text-gray-200 items-center align-items text-center m-7 mt-6 rounded-lg h-6"
      >
     {{clothes.title}}
      </h1>
      <img
        :src="clothes.photo_url"
        class="ring rounded-lg ring-white w-96 h-96"
      />
    </a>
  </div>
</template>
   
   <script>
export default {
  props: ["clothes"]
}
</script>
   
   <style>
</style>