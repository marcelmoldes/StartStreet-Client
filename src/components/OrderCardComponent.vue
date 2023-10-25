<template>
  <div class="">
    <div class="bg-gray-300 p-6 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 m-4 py-2 ml-20"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
      <div class="bg-red-100 p-2 rounded-md">
        <h1>{{ order.email }}</h1>

        <img :src="order.order_details[0].item.images[0].url" alt="" />
        <h1>{{ order.client.client_name }}</h1>

        <h1 class="text-xl rounded-sm">{{ order.total }} $</h1>

        <h1 class="text-xl">{{ order.province }}</h1>

        <h1 class="text-xl">{{ order.address }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["client", "order", "item"],
};
</script>

<style>
</style>