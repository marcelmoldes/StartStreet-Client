<template>
  <div class="mt-10 bg-gray-200">
    <div
      class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-4"
    >
      <admin-menu-component
        :client="client"
        class="col-span-1"
      ></admin-menu-component>

      <div class="py-4 col-span-3 mr-12">
        <h1 class="text-xl font-bold">Admin Dashboard</h1>
        <div class="bg-white mt-4 p-4 rounded-sm">
          <h1 class="font-bold">Sales Summary</h1>

          <div>
            <dl
              class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4"
            >
              <div
                class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
              >
                <dt class="text-sm font-medium leading-6 text-gray-500">
                  Revenue
                </dt>

                <dd
                  class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                >
                  {{ stats.revenue }}
                </dd>
              </div>
              <div
                class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
              >
                <dt class="text-sm font-medium leading-6 text-gray-500">
                  Orders
                </dt>

                <dd
                  class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                >
                  {{ stats.orders }}
                </dd>
              </div>
              <div
                class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
              >
                <dt class="text-sm font-medium leading-6 text-gray-500">
                  Clients
                </dt>

                <dd
                  class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                >
                  {{ stats.clients }}
                </dd>
              </div>
              <div
                class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
              >
                <dt class="text-sm font-medium leading-6 text-gray-500">
                  Average Order Value
                </dt>

                <dd
                  class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                >
                  {{ stats.average_order_value }}
                </dd>
              </div>
            </dl>
          </div>
          <img
            class="p-1"
            src="https://slidebazaar.com/wp-content/uploads/2016/07/Sales-Dashboard-Powerpoint-and-Keynote-template.jpg"
            alt="gg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import AdminMenuComponent from "@/components/AdminMenuComponent.vue";
export default {
  components: { AdminMenuComponent },
  data() {
    return {
      stats: {
        revenue: 1000,
        orders: 10,
        clients: 2,
        average_order_value: 100,
        sales_history: []
      },
    };
  },
};
</script>