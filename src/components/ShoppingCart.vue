<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="$emit('close')">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                >
                  <div class="px-4 mt-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle
                        class="text-base font-semibold leading-6 text-gray-900"
                        >My Cart</DialogTitle
                      >
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          @click="$emit('close')"
                        >
                          <span class="absolute -inset-2.5" />
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    <ul
                      role="list"
                      class="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
                    >
                      <li
                        class="flex space-x-6 py-6"
                        v-for="cartItem in cartItems"
                        :key="cartItem"
                      >
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/confirmation-page-06-product-01.jpg"
                          class="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                        />
                        <div class="flex-auto space-y-1 text-lg">
                          <h1>{{ cartItem.item.title }}</h1>
                          <div>
                            <button
                              class="bg-blue-500 rounded-md w-6 text-center text-white font-bold"
                              @click="decrease(cartItem.item.id)"
                            >
                              -
                            </button>
                            {{ cartItem.quantity }}
                            <button @click="increase(cartItem.item.id)"
                              class="bg-blue-500 rounded-md w-6 text-center text-white font-bold"
                            >
                              +
                            </button>
                          </div>

                          <p class="flex-none font-medium text-gray-900">
                            34 $
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  
<script>
import axios from "axios";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

export default {
  data() {
    return {
      cartItems: [],
    };
  },
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XMarkIcon,
  },

  async mounted() {
    this.loadData();
  },
  props: ["open", "client"],
  methods: {
    async loadData() {
      let response = await axios.get("http://localhost:8081/cart", {
        headers: {
          Authorization: this.client ? "Bearer " + this.client.token : null,
        },
      });
      this.cartItems = response.data.cart;
    },
  },
  async increase(itemId) {
    // post to cart
    this.loadData();
  },
  async decrease(itemId) {
    // delete to cart
    this.loadData();
  }
};
</script>