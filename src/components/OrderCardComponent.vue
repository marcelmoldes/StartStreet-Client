<template>
  <div class="mt-10">
  
      <div class="">
        <a
          :href="`/orders/${order.id}`"
          class="border-gray-400 border-3 p-2 font-bold hover:bg-slate-100 bg-white shadow-sm sm:border"
          >View Order Details</a
        >
        <div
          class="border-gray-200 mt-5 bg-white shadow-sm sm:rounded-lg sm:border"
        >
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
                <dd class="mt-1 font-medium text-gray-900">
                  {{ order.total }} $
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div
        class="border-gray-200 mt-4 bg-white p-20 shadow-sm sm:rounded-lg sm:border"
      >
        ITEMS QUANTITY
        <h1>{{ order.order_details[0].quantity }}</h1>
        <img
          :src="order.order_details[0].item.images[0].url"
          class="mt-5 rounded-sm"
        />
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