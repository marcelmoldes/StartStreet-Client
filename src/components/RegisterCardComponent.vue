<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div v-if="!userRegistered" class="sm:mx-auto sm:w-full sm:max-w-md"></div>
    <div
      class="inline-block mt-3 text-center bg-red-600 text-white p-1 rounded-lg"
      v-if="error"
    >
      {{ error }}
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label class="block text-sm font-medium leading-6 text-gray-900"
            >Full Name
          </label>
          <div class="mt-2">
            <input
              v-model="client.client_name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
            />
            <span
              v-if="v$.client.client_name.$error"
              class="text-sm text-cyan-950"
            >
              {{ v$.client.client_name.$errors[0].$message }}
            </span>
          </div>
        </div>

        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email
          </label>
          <div class="mt-2">
            <input
              v-model="client.email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
            />
            <span v-if="v$.client.email.$error" class="text-sm text-cyan-950">
              {{ v$.client.email.$errors[0].$message }}
            </span>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <a href="#" class="font-semibold text-gray-400"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              v-model="client.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            <span
              v-if="v$.client.password.$error"
              class="text-sm text-cyan-950"
            >
              {{ v$.client.password.$errors[0].$message }}
            </span>
          </div>
        </div>

        <div>
          <button
            @click="register"
            type="button"
            class="flex w-20 justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
  



<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import axios from "axios";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      client: {
        client_name: "",
        email: "",
        password: "",
      },
      error: false,
      userRegistered: false,
    };
  },
  validations() {
    return {
      client: {
        client_name: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(60),
        },
        email: {
          required,
          email,
          minLength: minLength(2),
          maxLength: maxLength(100),
        },
        password: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(20),
        },
      },
    };
  },
  methods: {
    async register() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let response = await axios.post("http://localhost:8081/clients", {
          client_name: this.client.client_name,
          email: this.client.email,
          password: this.client.password,
        });
        if (response.data.success === false) {
          this.error = response.data.error;
        } else {
          this.$router.push("/startreet?action=registered");
        }
      }
    },
  },
};
</script>

<style>
</style>