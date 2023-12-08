<template>
  <div class="">
    <h1 class="mt-20 text-2xl">RECENT REVIEWS</h1>
   <div class=" py-5 mt-4">
    <div
      v-for="comment in item.comments"
      :key="comment.id"
      class="flex py-7 px-10 text-center    rounded-sm border-black border bg-gray-100 mt-4"
      style="width: 500px"
    >
      <span class="relative inline-block">
        <img
          class="h-16 w-16 rounded-lg"
          :src="comment.client.profile_image"
          alt=""
        /> 
      </span>
      <div class="ml-10 relative w-full">
        <h1 class="text-lg font-bold">
          {{ comment.client.first_name }} {{ comment.client.last_name }}
        </h1>

        <div
          v-if="client.id === comment.client_id"
          @click="$emit('removeComment', comment.id)"
          class="font-bold absolute text-black right-0 border-z border-black top-0 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-6 hover:fill-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
        <p class="text-gray-700 text-lg font-sans">"{{ comment.message }}"</p>
        <h3 class="text-black">{{ comment.createdAt }}</h3>
      </div>
    </div>
  </div></div>
</template>

<script>
export default {
  props: ["client", "item"],
  emits: ["removeComment"],
};
</script>

<style>
</style>