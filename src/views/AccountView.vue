<template>
  <div id="account" class="mt-10">
    <form>
      <div
        class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"
      >
        <div class="mt-5 px-10 text-ce">
          <h2 class="text-lg font-semibold text-gray-900">
            Hello {{ client.first_name }} {{ client.last_name }}
          </h2>
          <p class="mt-1 mr-3 text-lg font-extrabold leading-6 text-violet-700">
            Welcome to your personal account
          </p>
          <div class="bg-white mt-7 font-bold rounded-md py-10 px-10">
            <ul class="text-lg">
              <a href="#"
                ><li class="underline mt-2 underline-offset-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 inline"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    /></svg>Information
                </li></a
              >

              <a href="/orders"
                ><li class="underline mt-2 underline-offset-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 inline"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                    /></svg>Order History
                </li></a
              >
              <a href="/changePassword"
                ><li class="underline mt-2 underline-offset-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 inline"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    /></svg>Change Password
                </li></a
              >
            </ul>
          </div>
        </div>

        <div
          class="grid max-w-2xl mt-10 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2"
        >
          <div
            class="inline-block mt-3 text-center bg-red-600 text-white p-1 rounded-lg"
            v-if="error"
          >
            Ha habido un error, por favor verifica tu informacion y intentalo de nuevo.
          </div>
          <div class="sm:col-span-4">
            <label
              for="website"
              class="block text-xl font-medium leading-6 text-gray-900"
              >Edit Your Personal Information</label
            >
            <div class="mt-2">
              <div class="flex mt-6 gap-x-2">
                <span
                  class="flex select-none items-center pl-3 font-semibold sm:text-sm"
                  >E-mail</span
                >
                <input
                  v-model="clientAccount.email"
                  type="text"
                  class="block rounded-md shadow-sm ring-gray-300 ring-1 flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-black sm:text-sm sm:leading-6"
                />
                <span
                  v-if="v$.clientAccount.email.$error"
                  class="text-sm text-cyan-950"
                >
                  {{ v$.clientAccount.email.$errors[0].$message }}
                </span>
              </div>

              <div class="flex mt-6 gap-x-2">
                <span
                  class="flex select-none items-center pl-3 font-semibold sm:text-sm"
                  >First Name</span
                >
                <input
                  v-model="clientAccount.first_name"
                  type="text"
                  class="block rounded-md shadow-sm ring-gray-300 ring-1 flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-black sm:text-sm sm:leading-6"
                />
                <span
                  v-if="v$.clientAccount.first_name.$error"
                  class="text-sm text-cyan-950"
                >
                  {{ v$.clientAccount.first_name.$errors[0].$message }}
                </span>
              </div>
              <div class="flex mt-6 gap-x-2">
                <span
                  class="flex select-none items-center pl-3 font-semibold sm:text-sm"
                  >Last Name</span
                >
                <input
                  v-model="clientAccount.last_name"
                  type="text"
                  class="block rounded-md shadow-sm ring-gray-300 ring-1 flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-black sm:text-sm sm:leading-6"
                />
                <span
                  v-if="v$.clientAccount.last_name.$error"
                  class="text-sm text-cyan-950"
                >
                  {{ v$.clientAccount.last_name.$errors[0].$message }}
                </span>
              </div>
              <div class="mt-2">
                <div class="flex mt-6 gap-x-2">
                  <span
                    class="flex select-none items-center pl-3 font-semibold sm:text-sm"
                    :value="clientAccount.address"
                    >Address</span
                  >
                  <input
                    v-model="clientAccount.address"
                    type="text"
                    class="block rounded-md shadow-sm ring-gray-300 ring-1 flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-black sm:text-sm sm:leading-6"
                  />
                  <span
                    v-if="v$.clientAccount.address.$error"
                    class="text-sm text-cyan-950"
                  >
                    {{ v$.clientAccount.address.$errors[0].$message }}
                  </span>
                </div>
                <div class="flex mt-6 gap-x-2">
                  <span
                    class="flex select-none items-center pl-3 font-semibold sm:text-sm"
                    >City</span
                  >
                  <input
                    v-model="clientAccount.city"
                    type="text"
                    class="block rounded-md shadow-sm ring-gray-300 ring-1 flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-black sm:text-sm sm:leading-6"
                  />
                  <span
                    v-if="v$.clientAccount.city.$error"
                    class="text-sm text-cyan-950"
                  >
                    {{ v$.clientAccount.city.$errors[0].$message }}
                  </span>
                </div>
                <div class="flex mt-6 gap-x-2">
                  <span
                    class="flex select-none items-center pl-3 font-semibold sm:text-sm"
                    >State</span
                  >
                  <input
                    v-model="clientAccount.state"
                    type="text"
                    class="block rounded-md shadow-sm ring-gray-300 ring-1 flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-black sm:text-sm sm:leading-6"
                  />
                  <span
                    v-if="v$.clientAccount.state.$error"
                    class="text-sm text-cyan-950"
                  >
                    {{ v$.clientAccount.state.$errors[0].$message }}
                  </span>
                </div>
                <div class="flex mt-6 gap-x-2">
                  <span
                    class="flex select-none items-center pl-3 font-semibold sm:text-sm"
                    >Postal Code</span
                  >

                  <input
                    v-model="clientAccount.postal_code"
                    type="text"
                    class="block rounded-md shadow-sm ring-gray-300 ring-1 flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-black sm:text-sm sm:leading-6"
                  />
                  <span
                    v-if="v$.clientAccount.postal_code.$error"
                    class="text-sm text-cyan-950"
                  >
                    {{ v$.clientAccount.postal_code.$errors[0].$message }}
                  </span>
                </div>
                <div class="flex mt-6 gap-x-2">
                  <span
                    class="flex select-none items-center pl-3 font-semibold sm:text-sm"
                    >Country Code</span
                  >
                  <input
                    v-model="clientAccount.country_code"
                    type="text"
                    class="block rounded-md shadow-sm ring-gray-300 ring-1 flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-black sm:text-sm sm:leading-6"
                  />
                  <span
                    v-if="v$.clientAccount.country_code.$error"
                    class="text-sm text-cyan-950"
                  >
                    {{ v$.clientAccount.country_code.$errors[0].$message }}
                  </span>
                </div>

                <div class="flex mt-6 gap-x-2">
                  <span
                    class="flex select-none items-center pl-3 font-semibold sm:text-sm"
                    >Phone Number</span
                  >
                  <input
                  
                    type="text"
                    v-model="clientAccount.phone"
                    class="block rounded-md shadow-sm ring-gray-300 ring-1 flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-black sm:text-sm sm:leading-6"
                  />
                  <span
                    v-if="v$.clientAccount.phone.$error"
                    class="text-sm text-cyan-950"
                  >
                    {{ v$.clientAccount.phone.$errors[0].$message }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-full">
            <div class="mt-2 flex items-center gap-x-3">
              <UserCircleIcon
                class="h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <button
                @click="save"
                type="button"
                class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
  
  <script>
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import axios from "axios";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  props: ["client"],
  data() {
    return {
      error: false,
      clientAccount: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
        country_code: "",
        phone: "",
      },
    };
  },
  validations() {
    return {
      clientAccount: {
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
        address: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(20),
        },
        city: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(20),
        },
        state: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(20),
        },
        postal_code: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(20),
        },
        country_code: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(20),
        },
        phone: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(20),
        },
      },
    };
  },
  methods: {
    async save() {
      this.error = false;
      this.v$.$validate();
      if (!this.v$.$error) {
        let response = await axios.put(
          "http://localhost:8081/clients/" + this.client.id,
          {
            first_name: this.clientAccount.first_name,
            last_name: this.clientAccount.last_name,
            email: this.clientAccount.email,
            password: this.clientAccount.password,
            address: this.clientAccount.address,
            city: this.clientAccount.city,
            state: this.clientAccount.state,
            postal_code: this.clientAccount.postal_code,
            country_code: this.clientAccount.country_code,
            phone: this.clientAccount.phone,
          },
          {
            headers: {
              Authorization: this.client ? "Bearer " + this.client.token : null,
            },
          }
        );

        if (response.data.success) {
          Toastify({
            text: "Tus cambios han sido guardados!",
            position: "center",
            duration: 10000,
          }).showToast();
        }
        this.$router.push("/account");
      } else {
        this.error = true
      }
    },
  },
};
</script>
  
  <style scoped>
#account {
  background-image: url(../assets/images/whitecover.jpg);
  background-repeat: no-repeat;
  background-size: 150%;
}
</style>