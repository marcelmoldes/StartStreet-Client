<template>
  <main
    class="mx-auto max-w-2xl pb-24 pt-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8"
  >
    <div
      class="space-y-2 px-4 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 sm:px-0"
    >
      <div class="flex sm:items-baseline sm:space-x-4">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Order #54879
        </h1>
      </div>
      <p class="text-sm text-gray-600">
        Order placed
        <time datetime="2021-03-22" class="font-medium text-gray-900">{{
          order.createdAt
        }}</time>
      </p>
    </div>

    <!-- Products -->

    <!-- Billing -->
    <section aria-labelledby="summary-heading" class="mt-16">
      <div
        class="bg-gray-100 px-4 py-6 sm:rounded-lg sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-8"
      >
        <dl
          class="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7"
        >
          <div>
            <dt class="font-medium text-gray-900">Deliverry address</dt>
            <dd class="mt-3 text-gray-500">
              <span class="block">{{ order.first_name }}</span>
              <span class="block">{{ order.last_name }}</span>
              <span class="block">{{ order.address }}</span>
              <span class="block">{{ order.city }}</span>
            </dd>
          </div>
          <div>
            <dt class="font-medium text-gray-900">Payment information</dt>
            <dd class="-ml-4 -mt-1 flex flex-wrap">
              <div class="ml-4 mt-4 flex-shrink-0">
                <svg
                  aria-hidden="true"
                  width="36"
                  height="24"
                  viewBox="0 0 36 24"
                  class="h-6 w-auto"
                >
                  <rect width="36" height="24" rx="4" fill="#224DBA" />
                  <path
                    d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div class="ml-4 mt-4">
                <p class="text-gray-900">CVC {{ order.cvc }}</p>
                <p class="text-gray-900">Card Name : {{ order.card_name }}</p>
                <p class="text-gray-600">Expires {{ order.expiration_date }}</p>
              </div>
            </dd>
          </div>
        </dl>
        <div >
        
        </div>

        <dl class="mt-8 divide-y divide-gray-200 text-sm lg:col-span-5 lg:mt-0">
          <div class="flex items-center justify-between pb-4">
            <dt class="text-gray-600">Subtotal</dt>
            <dd class="font-medium text-gray-700">${{ order.subtotal }}</dd>
          </div>
          <div class="flex items-center justify-between py-4">
            <dt class="text-gray-600">Shipping</dt>
            <dd class="font-medium text-gray-700">${{ order.shipping }}</dd>
          </div>
          <div class="flex items-center justify-between py-4">
            <dt class="text-gray-600">Tax</dt>
            <dd class="font-medium text-gray-700">${{ order.taxes }}</dd>
          </div>
          <div class="flex items-center justify-between pt-4">
            <dt class="font-medium text-gray-700">Order total</dt>
            <dd class="font-bold text-sm text-black">${{ order.total }}</dd>
          </div>
        </dl>
      </div>
    </section>
    <section aria-labelledby="products-heading" class="mt-6">
      <h2 id="products-heading" class="sr-only">Products purchased</h2>

      <div class="space-y-8">
        <div
          class="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
        >  
          <div
            class="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8"
          >
            <div class="sm:flex lg:col-span-7">
              <div
                class="aspect-h-1 aspect-w-1 w-full flex-shrink-0 overflow-hidden rounded-lg sm:aspect-none sm:h-40 sm:w-40"
              ></div>

              <div class="mt-6 sm:ml-6 sm:mt-0">
                <h3 class="text-base font-medium text-gray-900"></h3>
                <p class="mt-2 text-sm font-medium text-gray-900">{{}}</p>
                <p class="mt-3 text-sm text-gray-500">{{}}</p>
              </div>
            </div>

            <div class="mt-6 lg:col-span-5 lg:mt-0">
              <dl class="grid grid-cols-2 gap-x-6 text-sm">
                <div><img
            :src="order.order_details[0].item.images[0].url"
            class="mt-5 w-20 rounded-sm"
          /></div>
                <div>
                  <dt class="font-medium text-gray-900">
                    Personal Information
                  </dt>
                  <dd class="mt-3 space-y-3 text-gray-500">
                    <p>{{ order.email }}</p>
                    <p>{{ order.phone }}</p>
                    <p>{{ order.first_name }} {{ order.last_name }}</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div class="border-t border-gray-200 px-4 py-6 sm:px-6 lg:p-8">
            <h4 class="sr-only">Status</h4>
            <p class="text-sm font-medium text-gray-900"></p>
            <div class="mt-6" aria-hidden="true">
              <div class="overflow-hidden rounded-full bg-gray-200">
                <div class="h-2 rounded-full bg-indigo-600" />
              </div>
              <div
                class="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid"
              >
                <div class="text-indigo-600">Order placed</div>
                <div>Processing</div>
                <div>Shipped</div>
                <div>Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: ["client", "order", "item"],
};
</script>

<style>
</style>