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
          <img :src="image.url" class="h-full w-full" />
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
        <div class="text-lg text-gray-600 font-bold">
          <h1 class="" v-if="inventory > 10">In Stock</h1>
          <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold Out</p>
          <h1 v-else>Out of Stock</h1>
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
            <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
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
              :class="{ disabled_button: !inStock }"
              :disabled="!inStock"
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
            <li
              class="text-lg font-semibold"
              v-for="detail in details"
              :key="detail"
            >
              {{ detail }}
            </li>
          </ul>
          <div class="mt-8">
            <ul>
              <li
                @mouseover="updateVariant(index)"
                :style="{ backgroundColor: variant.color }"
                class="color_circle"
                v-for="(variant, index) in variants"
                :key="variant.id"
              >
                {{ variant.color }}
              </li>
            </ul>
          </div>
        </form>

        <form
          @review-submitted="addReview"
          class="review-form"
          @submit.prevent="onSubmit"
        >
          <h3 class="text-lg font-serif m-4">Leave a review</h3>

          <label for="review">Review</label>
          <textarea class="bg-gray-200" id="review" v-model="review"></textarea>

          <label class="mt-3" for="rating">Rating</label>
          <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>

          <!-- solution -->
          <label for="recommend">Would you recommend this product?</label>
          <select id="recommend" v-model="recommend">
            <option>Yes</option>
            <option>No</option>
          </select>
          <!-- solution -->

          <button class="bg-black mt-4 p-2 rounded-lg text-white w-143">
            Send Review
          </button>
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
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      selectedVariant: 0,
      cart: 0,
      inventory: 0,

      details: ["70% cotton", "30% polyester"],
      variants: [
        {
          id: 1,
          color: "white",
          image:
            "https://img01.ztat.net/article/spp-media-p1/954056dd0577401283bdb3615f2821bc/5585ddd4d9a34320ab186147f724a424.jpg?imwidth=300",
          quantity: 100,
        },
        {
          id: 2,
          color: "red",
          image:
            "https://img01.ztat.net/article/spp-media-p1/5aa95d7b494e4291b8e8d531ea98c619/f18f88a1565748b3b3fe2bb5178e232f.jpg?imwidth=300",
          quantity: 3,
        },
        {
          id: 3,
          color: "black",
          image:
            "https://img01.ztat.net/article/spp-media-p1/9486bf7e3b134b2a8dc7ad1133f7f5f8/bf693d785d8e494f80d315b0e68ce4ed.jpg?imwidth=300",
          quantity: 0,
        },
      ],
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
    onSubmit() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      };
      this.$emit("review-submitted", productReview);

      (this.name = ""), (this.review = ""), (this.rating = null);
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
  computed: {
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
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
.review-form {
  display: flex;
  flex-direction: column;
  width: 425px;
  padding: 20px;
  margin: 40px;
  border: 2px solid #d8d8d8;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

body {
  background-image: url(../assets/white.jpg);
  background-repeat: no-repeat;
}
</style>