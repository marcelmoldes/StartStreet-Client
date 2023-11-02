<template>
  <div
    class="border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border p-3"
  >
    <div class="flex gap-x-3">
      <img
        :src="order.order_details[0].item.images[0].url"
        class="mt-5 rounded-sm h-20"
      />
      <div
        class="flex items-center border-b border-gray-200 -sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6"
      >
        <dl
          class="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2"
        >
          <div>
            <dt class="font-medium text-gray-900">Order number</dt>
            <dd class="mt-1 text-gray-500">#2535435</dd>
          </div>
          <div class="hidden sm:block">
            <dt class="font-medium text-gray-900">Date placed</dt>
            <dd class="mt-1 text-gray-500">
              {{ order.createdAt }}
            </dd>
          </div>
          <div>
            <dt class="font-medium text-gray-900">Total amount</dt>
            <dd class="mt-1 font-medium text-gray-900">{{ order.total }} $</dd>
          </div>
        </dl>
      </div>
    </div>
      <a
        :href="`/orders/${order.id}`"
        class="block mt-2 text-center border-gray-400 border-3 p-2 font-bold hover:bg-slate-100 bg-white shadow-sm sm:border"
        >View Order Details</a
      >
  </div>
</template>

<script>
export default {
  props: ["client", "order", "item"],
};
</script>

<style>
</style>