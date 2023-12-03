<template>
  <div>
  
    <div class="justify-center mt-10 py-12 lg:px-8">
      <div class="mt-10 rounded-lg sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <h1 class="text-center text-4xl font-extrabold">Log In</h1>
            <label
              for="email"
              class="block mt-20 text-sm font-medium leading-6 text-gray-900"
              >Email
            </label>
            <div class="m">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                v-model="client.email"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
              />
              <span v-if="v$.client.email.$error" class="text-sm text-cyan-950">
                {{ v$.client.email.$errors[0].$message }}
              </span>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium leading-6 text-gray-900"
              >Password
            </label>
            <div class="text-sm">
              <a
                href="/strarstreet/forgotpassword"
                class="font-semibold text-gray-400"
                >Forgot password?</a
              >
            </div>
            <div class="mt-2">
              <input
                v-model="client.password"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
              />
              <span
                v-if="v$.client.password.$error"
                class="text-sm text-cyan-950"
              >
                {{ v$.client.password.$errors[0].$message }}
              </span>
            </div>
          </div>
        </form>
        <div class="mt-5">
          <button
            @click="login"
            type="button"
            class="flex w-20 justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Enter
          </button>
        </div>
        <div class="rounded-md bg-red-50 p-4 mt-4" v-if="clientError">
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
          <div class="mt-2 text-sm text-red-700">
            <ul role="list" class="list-disc space-y-1 pl-5">
              <li>This User Doesnt Exists!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import axios from "axios";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      client: {
        email: "",
        password: "",
      },
      clientError: false,
    };
  },
  validations() {
    return {
      client: {
        password: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(30),
        },
        email: {
          required,
          email,
          minLength: minLength(6),
          maxLength: maxLength(50),
        },
      },
    };
  },
  methods: {
    async login() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.clientError = false;
        let response = await axios.post("http://localhost:8081/clients/login", {
          password: this.client.password,
          email: this.client.email,
        });
        if (response.data.success) {
          let client = response.data.client;
          client.token = response.data.token;
          Cookies.set("client", JSON.stringify(client));
          this.$emit("clientloggedin");
          this.$router.push("/starstreet");
        } else {
          this.clientError = true;
        }
      }
    },
  },
};
</script>

<style scoped>
</style>