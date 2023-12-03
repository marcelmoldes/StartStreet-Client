<template>
  <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
    <!-- Image gallery -->
    <TabGroup as="div" class="flex flex-col-reverse">
      <!-- Image selector -->
      <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
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
          <img :src="image.url" class="h-full w-82" />
        </TabPanel>
      </TabPanels>
    </TabGroup>

    <!-- Product info -->

    <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <div>
        <h1 class="text-3xl font-bold tracking-tight text-gray-900"></h1>

        <div class="mt-6">
          <div class="space-y-6 text-base text-gray-700" />
        </div>

        <h1 class="text-xl text-blue-500">
          You have {{ cart }} items in your cart
        </h1>
        <h1 class="text-3xl">{{ item.title }}</h1>
        <h2 class="text-xl">{{ item.price }} $</h2>
        <div class="mt-8">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-medium text-gray-900">Size</h2>
          </div>
   
          <RadioGroup v-model="selectedSize" class="mt-2">
  
            <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
              <RadioGroupOption
                as="template"
                v-for="size in sizes"
                :key="size.name"
              >
                <div
                  :class="[
                    size.inStock
                      ? 'cursor-pointer focus:outline-none'
                      : 'cursor-not-allowed opacity-25',
                    active ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
                    checked
                      ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                    'flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1',
                  ]"
                >
                  <RadioGroupLabel as="span">{{ size.name }}</RadioGroupLabel>
                </div>
              </RadioGroupOption>
            </div>
          </RadioGroup>
        </div>
        <form class="mt-6">
          <div class="mt-10 flex">
            <button
              type="button"
              class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-full"
              @click="addToCart"
            >
              Add to Cart
            </button>
            <button type="button" class="">
              <HeartIconSolid
                class="h-10 w-10 ml-5 flex-shrink-0 fill-orange-500 border-solid border-black border-2"
                aria-hidden="true"
                v-if="item.favorite"
                @click="$emit('removeFavorite', item.id)"
              />
              <HeartIcon
                class="h-10 w-10 ml-5 flex-shrink-0 border-solid border-black border-2"
                v-else
                @click="
                  client
                    ? $emit('setFavorite', item.id)
                    : $router.push('/login')
                "
              />
            </button>
          </div>
          <ul class="mt-7">
            <li class="text-lg font-semibold">
              {{ item.description }}
            </li>
          </ul>
        </form>
      </div>       <comment-form-component       :client="client"
      :item_id="item.id"
      @commentSend="loadData($event)"></comment-form-component>

    </div>
  </div>
</template>
    
  <script>
  import CommentFormComponent from "./CommentFormComponent.vue";
import axios from "axios";
import { HeartIcon } from "@heroicons/vue/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/vue/20/solid";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";

export default {
  data() {
    return {
      reviews: [],

      sizes: [
        { name: "XXS", inStock: true },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: false },
      ],
    };
  },
  components: {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    HeartIcon,
    HeartIconSolid,
    CommentFormComponent
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
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
};
</script>

<style scoped>
.color_circle {
  width: 50px;
  height: 50px;
  margin-top: 8px;
  border: 2px solid black;
  border-radius: 50%;
}
.disabled_button {
  background-color: gray;
  cursor: not-allowed;
}

body {
  background-image: url(../assets/images/whitecover.jpg);
  background-repeat: no-repeat;
}
</style>