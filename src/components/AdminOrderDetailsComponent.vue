<template>
  <main
    class="mx-auto max-w-2xl pb-24 pt-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8"
  >
    <div class="sm:justify-between sm:space-y-0 sm:px-0">
      <div class="sm:items-baseline sm:space-x-4">
        <h1 class="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl">
          Order #{{ order.order_number }}
        </h1>
      </div>
      <p class="text-sm text-gray-600 mt-4">
        Order placed
        <time datetime="2021-03-22" class="font-medium text-gray-900">{{
          order.createdAt
        }}</time>
      </p>
    </div>

    <section aria-labelledby="summary-heading" class="mt-16">
      <div
        class="px-4 py-6 sm:rounded-lg sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-8"
      >
        <dl
          class="grid bg-gray-200 rounded-sm p-4 grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7"
        >
          <div class="">
            <dt class="font-medium text-xl text-center text-violet-700">
              Delivery address
            </dt>
            <dd class="mt-3 text-gray-700 font-medium">
              <input
                class="block w-full mt-2 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                :value="order.first_name"
                @change="
                  $emit('updateOrder', {
                    key: 'first_name',
                    value: $event.target.value,
                  })
                "
              />
              <input
                class="block w-full mt-2 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text "
                :value="order.last_name"
                @change="
                  $emit('updateOrder', {
                    key: 'last_name',
                    value: $event.target.value,
                  })
                "
              />
              <input
                class="block w-full mt-2 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text "
                :value="order.email"
                @change="
                  $emit('updateOrder', {
                    key: 'email',
                    value: $event.target.value,
                  })
                "
              />
              <input
                class="block w-full mt-2 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text "
                :value="order.phone"
                @change="
                  $emit('updateOrder', {
                    key: 'phone',
                    value: $event.target.value,
                  })
                "
              />
              <input
                class="block w-full mt-2 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                :value="order.address"
                @change="
                  $emit('updateOrder', {
                    key: 'address',
                    value: $event.target.value,
                  })
                "
              />
              <input
                class="block w-full mt-2 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                :value="order.city"
                @change="
                  $emit('updateOrder', {
                    key: 'city',
                    value: $event.target.value,
                  })
                "
              />
              <input
                class="block w-full mt-2 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                :value="order.state"
                @change="
                  $emit('updateOrder', {
                    key: 'state',
                    value: $event.target.value,
                  })
                "
              />
            </dd>
          </div>
          <div class="bg-white rounded-lg h-48 mt-5 text-center">
            <dt class="font-medium bg-violet-700 p-2 text-white">
              Payment information
            </dt>
            <dd class="">
              <div class="mt-5">
                <svg
                  aria-hidden="true"
                  width="36"
                  height="24"
                  viewBox="0 0 36 24"
                  class="ml-4"
                >
                  <rect width="36" height="24" rx="4" fill="#224DBA" />
                  <path
                    d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                    fill="#fff"
                  />
                </svg>
                <p class="text-gray-900">CVC {{ order.cvc }}</p>
                <hr />
                <p class="text-gray-900">Card Name : {{ order.card_name }}</p>
                <hr />
                <p class="text-gray-600">Expires {{ order.expiration_date }}</p>
                <hr />
              </div>
            </dd>
          </div>
        </dl>

        <dl class="divide-y divide-gray-200 text-sm lg:col-span-5">
          <div class="flex items-center justify-between pb-4">
            <dt class="text-gray-600 mt-4">Subtotal</dt>
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
          <div class="bg-gray-200 mt-4 w-60">
            <div class="text-center">
              <label class="text-center text-sm font-semibold text-gray-900"
                >Shipping Company</label
              >
              <div class="">
                <select
                  :value="order.shipping_status"
                  @change="
                    $emit('updateOrder', {
                      key: 'shipping_status',
                      value: $event.target.value,
                    })
                  "
                  class="mt-2 text-center bg-white rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  not shipped , ready for pick up , shipped
                  <option>Not Shipped</option>
                  <option>Ready</option>
                  <option>Pick Up</option>
                </select>
              </div>
            </div>
            <div class="text-center mt-4">
              <label
                for="email"
                class="block mt-5 text-sm font-semibold leading-6 text-gray-900"
                >Shipping Status</label
              >
              <div class="">
                <select
                  :value="order.shipping_status"
                  @change="
                    $emit('updateOrder', {
                      key: 'shipping_status',
                      value: $event.target.value,
                    })
                  "
                  class="mt-2 bg-white rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  not shipped , ready for pick up , shipped
                  <option>Not Shipped</option>
                  <option>Ready</option>
                  <option>Pick Up</option>
                </select>

                <h1
                  class="block mt-3 text-sm font-semibold leading-6 text-gray-900"
                >
                  Tracking Number
                </h1>
                <input
                  class="text-center m-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  :value="order.tracking_number"
                  @change="
                    $emit('updateOrder', {
                      key: 'tracking_number',
                      value: $event.target.value,
                    })
                  "
                />
              </div>
            </div>
          </div>
        </dl>
      </div>

      <button
        class="bg-violet-500 px-6 text-white p-2 mt-4 ml-20 rounded-lg items-center justify-center"
        @click="$emit('save')"
      >
        SAVE CHANGES
      </button>
    </section>
  </main>
</template>

<script>
export default {
  props: ["order"],
};
</script>

<style>
</style>