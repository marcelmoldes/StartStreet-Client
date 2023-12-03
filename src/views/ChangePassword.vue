<template>
  <div id="account" class="mt-10">
    <form>
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
                <li>Your password  is incorrect</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-4"
      >
        <account-menu-component
          :client="client"
          class="col-span-1"
        ></account-menu-component>

        <div
          class="grid max-w-2xl mt-10 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-3"
        >
          <div class="sm:col-span-4">
            <label
              for="website"
              class="block mt-20 text-xl font-medium leading-6 text-gray-900"
              >Change your password</label
            >
            <div class="mt-2">
              <div class="flex mt-6 gap-x-2"></div>

              <div class="mt-2">
                <div class="flex mt-6 gap-x-2">
                  <span
                    class="flex select-none items-center pl-3 font-semibold sm:text-sm"
                    >Current Password</span
                  >
                  <input
                    v-model="clientAccount.currentPassword"
                    type="text"
                    class="block rounded-md shadow-sm ring-gray-300 ring-1 flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-black sm:text-sm sm:leading-6"
                  />
                  <span
                    v-if="v$.clientAccount.currentPassword.$error"
                    class="text-sm text-cyan-950"
                  >
                    {{ v$.clientAccount.currentPassword.$errors[0].$message }}
                  </span>
                </div>

                <div class="flex mt-6 gap-x-2">
                  <span
                    class="flex select-none items-center pl-3 font-semibold sm:text-sm"
                    >New Password</span
                  >
                  <input
                    type="text"
                    v-model="clientAccount.newPassword"
                    class="block rounded-md shadow-sm ring-gray-300 ring-1 flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-black sm:text-sm sm:leading-6"
                  />
                  <span
                    v-if="v$.clientAccount.newPassword.$error"
                    class="text-sm text-cyan-950"
                  >
                    {{ v$.clientAccount.newPassword.$errors[0].$message }}
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
                @click="changePassword"
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
import AccountMenuComponent from "@/components/AccountMenuComponent.vue";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
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
        currentPassword: "",
        newPassword: "",
      },
    };
  },
  validations() {
    return {
      clientAccount: {
        currentPassword: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(60),
        },
        newPassword: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(60),
        },
      },
    };
  },
  components: {
    AccountMenuComponent,
  },
  methods: {
    async changePassword() {
      this.error = false;
      this.v$.$validate();
      if (!this.v$.$error) {
        let response = await axios.post(
          "http://localhost:8081/clients/" + this.client.id + "/changePassword",
          {
            currentPassword: this.clientAccount.currentPassword,
            newPassword: this.clientAccount.newPassword,
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
        } else {
          this.error = true;
        }
      } else {
        this.error = true;
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