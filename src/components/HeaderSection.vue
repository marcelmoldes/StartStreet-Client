<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a @click="$router.push('/starstreet')" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
        </a>
      </div>
      <div class="lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div v-for="category in categories" :key="category">
        <a
          :href="'/categories/' + category.slug"
          class="text-center px-3 ml-6 gap-10 font-bold"
        >
          {{ category.title }}
        </a>
      </div>

      <div class="hidden justify-end lg:flex gap-3">
        <button
          v-if="!client"
          @click="$router.push('/login')"
          class="ml-20 text-base font-semibold text-gray-900 hover:underline hover:underline-offset-8"
        >
          Login
        </button>
        <button
          v-if="!client"
          @click="$router.push('/register')"
          class="ml-20 text-base font-semibold text-gray-900 hover:underline hover:underline-offset-8"
        >
          Register
        </button>

        <button
          @click="$router.push('/favorites')"
          v-if="client"
          class="p-2 ml-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <button
          class="text-base font-semibold text-gray-900 hover:underline hover:underline-offset-8"
          @click="$router.push('/admin')"
          v-if="client.role === 'admin'"
        >
          Admin Panel
        </button>

        <button @click="$emit('viewCart')" v-if="client" class="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
        <button
          v-if="client"
          @click="$emit('logout') + $router.push('/starstreet')"
          class="text-base font-semibold leading-7 text-gray-900 hover:underline hover:underline-offset-8"
        >
          <p>Logout</p>
        </button>

        <button
          v-if="client"
          @click="this.$router.push('/account')"
          class="font-semibold text-gray-900 hover:underline hover:underline-offset-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div
          class="mt-6 flow-root"
          v-for="category in categories"
          :key="category"
        >
          <div class="-my-6 divide-y divide-gray-500/10">
            <a
              :href="'/categories/' + category.slug"
              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >{{ category.title }}</a
            >
          </div>
          <div class="py-6">
            <button
              v-if="!client"
              @click="$router.push('/login')"
              class="-mx-3 block px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:underline hover:underline-offset-8"
            >
              Login
            </button>
            <button
              v-if="!client"
              @click="$router.push('/register')"
              class="--mx-3 block text-base font-semibold leading-7 text-gray-900 hover:underline hover:underline-offset-8"
            >
              Register
            </button>
            <button
              @click="$router.push('/favorites')"
              v-if="client"
              class="p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            <button @click="$emit('viewCart')" v-if="client" class="p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>

            <br />
            <div class="gap-6 block">
              <button
                v-if="client"
                @click="$emit('logout') + $router.push('/starstreet')"
                class="block text-base font-semibold leading-7 text-gray-900 hover:underline hover:underline-offset-8"
              >
                <p>Logout</p>
              </button>

              <button
                v-if="client"
                @click="this.$router.push('/orders')"
                class="text-base font-semibold leading-7 text-gray-900 hover:underline hover:underline-offset-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script>
import { Dialog, DialogPanel } from "@headlessui/vue";

import { XMarkIcon, Bars3Icon } from "@heroicons/vue/24/outline";

export default {
  props: ["client", "categories"],
  components: {
    Dialog,
    DialogPanel,
    Bars3Icon,

    XMarkIcon,
  },
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
}; //
</script>

