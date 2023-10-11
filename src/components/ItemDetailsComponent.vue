<template>
  <div>
    <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
      <!-- Image gallery -->
      <TabGroup as="div" class="flex flex-col-reverse">
        <!-- Image selector -->
        <div
          class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"
        >
          <TabList class="grid grid-cols-4 gap-6">
            <Tab
              v-for="image in item.images"
              :key="image.id"
              class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
              v-slot="{ selected }"
            >
              <span class="absolute inset-0 overflow-hidden">
                <img
                  :src="image.url"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
              </span>
              <span
                :class="[
                  selected ? 'ring-gray-500' : 'ring-transparent',
                  ' absolute inset-0 ring-2 ring-offset-2',
                ]"
                aria-hidden="true"
              />
            </Tab>
          </TabList>
        </div>
        <TabPanels class="aspect-h-1 aspect-w-1 w-full">
          <TabPanel v-for="image in item.images" :key="image.id">
            <img :src="image.url" class="h-full w-full" />
          </TabPanel>
        </TabPanels>
      </TabGroup>

      <!-- Product info -->
      <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900"></h1>

        <!-- Reviews -->
        <!-- <div class="mt-3">
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                  <div class="flex items-center">
                    <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[product.rating > rating ? 'text-indigo-500' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                  </div>
                  <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                </div>
              </div> -->

        <div class="mt-6">
          <h3 class="sr-only"></h3>
          {{ item.price }}
          <div class="space-y-6 text-base text-gray-700" />
        </div>
        <h1>{{ item.title }}</h1>
        <form class="mt-6">
          <div class="mt-10 flex">
            <button
              type="button"
              class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              @click="addToCart"
            >
              Add to Cart
            </button>
            <button type="button" class="">
              <HeartIconSolid
                class="h-7 w-7 flex-shrink-0 fill-orange-600"
                aria-hidden="true"
                v-if="item.favorite"
                @click="$emit('removeFavorite', item.id)"
              />
              <HeartIcon
                class="h-6 w-6 flex-shrink-0"
                v-else
                @click="
                  client
                    ? $emit('setFavorite', item.id)
                    : $router.push('/login')
                "
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
    
  <script>
import axios from "axios";
import { HeartIcon } from "@heroicons/vue/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/vue/20/solid";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";

export default {
  components: {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    HeartIcon,
    HeartIconSolid,
  },
  props: ["item", "client"],
  emits: ["setFavorite", "removeFavorite", "viewCart"],
  methods: {
    async addToCart() {
      await axios.post(
        "http://localhost:8081/cart",
        {
          item_id: this.item.id,
          client_id: this.client.id,
        },

        {
          headers: {
            Authorization: this.client ? "Bearer " + this.client.token : null,
          },
        }
      );

      this.$emit("viewCart");
    },
  },
};
</script>