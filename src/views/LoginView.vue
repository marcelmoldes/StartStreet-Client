<template>
  <div class="mt-5 text-center text-4xl font-extrabold">
    <h1>Log In</h1>
  </div>

  <div class="inline-block mt-3 text-center bg-red-600 text-white p-1 rounded-lg" v-if="clientError">
      This user doesn't exist
    </div>


  <div class="mt-10 justify-center px-6 py-12 lg:px-8">
    <div class="mt-10 rounded-lg sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email
          </label>
          <div class="mt-2">
            <input
            id="email"
              name="email"
              type="email"
            autocomplete="email"
              v-model="client.email"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
            />
            <span
              v-if="v$.client.email.$error"
              class="text-sm text-cyan-950"
            >
              {{ v$.client.email.$errors[0].$message }}
            </span>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium leading-6 text-gray-900"
            >Password
          </label>
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
this.$emit("clientloggedin")
          this.$router.push("/starstreet");
        } else {
          this.clientError = true;
        }
      }
    },
  },
};
</script>

<style>
</style>