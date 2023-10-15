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
                          :src="cartItem.item.images[0].url"
                          class="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                        />
                        <div class="flex-auto space-y-1 text-lg">
                          <h1>{{ cartItem.item.title }}</h1>
                          <div>
                            <button
                              class="bg-blue-500 rounded-md w-6 text-center text-white font-bold"
                              :disabled="busy"
                              @click="decrease(cartItem.item.id)"
                            >
                              -
                            </button>
                            {{ cartItem.quantity }}
                            <button
                              @click="increase(cartItem.item.id)"
                              :disabled="busy"
                              class="bg-blue-500 rounded-md w-6 text-center text-white font-bold"
                            >
                              +
                            </button>
                          </div>
                          <div class="flex gap-x-2">
                            
                            <p class="flex-none font-medium text-blue-600">
                              ${{ cartItem.item.price * cartItem.quantity }}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <button @click="$router.push('/checkout')"
                      type="button"
                      class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                      v-if="cartItems.length > 0"
                    >
                      Checkout
                    </button>
                    <div class="text-center text-lg font-sembiold" v-else>
                      There are no items in your cart.
                    </div>
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
      busy: false,
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
  props: ["open", "client"],
  watch: {
    open(newValue) {
      if (newValue === true) {
        this.loadData();
      }
    },
  },
  methods: {
    async loadData() {
      let response = await axios.get("http://localhost:8081/cart", {
        headers: {
          Authorization: this.client ? "Bearer " + this.client.token : null,
        },
      });
      this.cartItems = response.data.cart;
    },
    async increase(itemId) {
      this.busy = true;
      await axios.post(
        "http://localhost:8081/cart",
        {
          item_id: itemId,
          client_id: this.client.id,
        },

        {
          headers: {
            Authorization: this.client ? "Bearer " + this.client.token : null,
          },
        }
      );
      this.busy = false;
      this.loadData();
    },
    async decrease(itemId) {
      this.busy = true;
      await axios.delete("http://localhost:8081/cart/" + itemId, {
        headers: {
          Authorization: this.client ? "Bearer " + this.client.token : null,
        },
      });
      this.busy = false;
      this.loadData();
    },
  },
};
</script>