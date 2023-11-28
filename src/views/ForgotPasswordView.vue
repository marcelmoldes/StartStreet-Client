<template>
  <div class="justify-center mt-10 lg:px-20">
    <div class="mt-10 rounded-lg sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <div
            class="inline-block mt-3 text-center bg-red-600 text-white p-1 rounded-lg col-span-4"
            v-if="error"
          >
            Ha habido un error, por favor verifica tu informacion y intentalo de
            nuevo.
          </div>
          <h1 class="text-center text-4xl font-extrabold">FORGOT PASSWORD</h1>
          <h3>Please enter your email to reset your password</h3>
          <label
            for="email"
            class="block mt-20 text-sm font-medium leading-6 text-gray-900"
            >Email
          </label>
          <div class="m">
            <input
              v-model="client.email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
            />
          </div>
          <button
            type="button"
            @click="forgotPassword"
            class="px-3 py-2 bg-white"
          >
            Reset your Password
          </button>
        </div>
      </form>
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