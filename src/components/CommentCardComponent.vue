<template>
  <div
    v-for="comment in item.comments"
    :key="comment.id"
    class="flex ml-20 mt-3"
    style="width: 500px"
  >
    <span class="relative inline-block">
      <img
        class="h-16 w-16 rounded-full"
        :src="comment.client.image_profile"
        alt=""
      />
    </span>
    <div class="ml-10 relative w-full">
      <div
        v-if="client.id === comment.client_id"
        @click="$emit('removeComment', comment.id)"
        class="font-bold absolute text-red-500 right-0 top-0 cursor-pointer"
      >
        x
      </div>
      <h1>{{ comment.client.client_name }}</h1>
      <p class="text-gray-500">{{ comment.message }}</p>
      <h3 class="text-blue-600">{{ comment.createdAt }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["client", "item"],
  emits: ["removeComment"],
};
</script>

<style>
</style>