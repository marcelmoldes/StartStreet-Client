<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div v-if="!userRegistered" class="sm:mx-auto sm:w-full sm:max-w-md"></div>
 

    <div class=" sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="rounded-md bg-red-50 p-4" v-if="error">
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
              <li>{{error}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <form class="space-y-6" action="#" method="POST">
        <label class="block text-sm font-medium leading-6 text-gray-900"
          >First Name
        </label>
        <div class="mt-2">
          <input
            v-model="client.first_name"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
          />
          <span
            v-if="v$.client.first_name.$error"
            class="text-sm text-cyan-950"
          >
            {{ v$.client.first_name.$errors[0].$message }}
          </span>
        </div>
        <div>
          <label class="block text-sm font-medium leading-6 text-gray-900"
            >Last Name
          </label>

          <div class="mt-2">
            <input
              v-model="client.last_name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
            />
            <span
              v-if="v$.client.last_name.$error"
              class="text-sm text-cyan-950"
            >
              {{ v$.client.last_name.$errors[0].$message }}
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
        first_name: "",
        last_name: "",
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
        first_name: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(60),
        },
        last_name: {
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
          first_name: this.client.first_name,
          last_name: this.client.last_name,
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