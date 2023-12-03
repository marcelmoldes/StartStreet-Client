<template>
 
  <div
    class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <form class="space-y-6" action="#" method="POST">
          <div class="text-center">
            <h1 class="mt-3 text-xl font-medium">Forgot your password?</h1>
            <h3 class="mt-6">Give us your email for change it</h3>
          </div>
 <div class="rounded-md  bg-red-50 p-4 px-10" v-if="error">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg
          class="h-5 w-5 text-red-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-red-800">
          This account does not exist, please try again
        </h3>
      </div>
    </div>
  </div>
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label
            >
            <div class="mt-2">
              <input
                v-model="client.email"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="flex items-center justify-between"></div>

          <div>
            <button
              @click="forgotPassword"
              type="button"
              class="flex w-full justify-center rounded-md bg-violet-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reset Your Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Toastify from "toastify-js";
import axios from "axios";
export default {
  data() {
    return {
      client: {
        email: "",
      },
      error: false,
    };
  },
  methods: {
    async forgotPassword() {
      this.error = false;
      let response = await axios.post(
        "http://localhost:8081/clients/" + this.client.id + "/forgotPassword",
        {
          email: this.client.email,
        }
      );
      if (response.data.success) {
        Toastify({
          text: "Email sended",
          position: "center",
          duration: 10000,
        }).showToast();
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style>
</style>