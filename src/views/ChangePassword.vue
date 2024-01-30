<template>
  <div id="account" class="mt-10">
    <div
      class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-4"
    >
      <account-menu-component
        :client="client"
        class="col-span-1"
      ></account-menu-component>
      <div class="bg-white mt-6 px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Current Password</label
            >
            <div class="mt-2">
              <input
             v-model="clientAccount.currentPassword"
                type="password"
                autocomplete="email"
              
                class="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <span
                    v-if="v$.clientAccount.currentPassword.$error"
                    class="text-sm text-cyan-950"
                  >
                    {{ v$.clientAccount.currentPassword.$errors[0].$message }}
                  </span>
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >New Password</label
            >
            <div class="mt-2">
              <input
              v-model="clientAccount.newPassword"
                type="password"
               
               
                class="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <span
                    v-if="v$.clientAccount.newPassword.$error"
                    class="text-sm text-cyan-950"
                  >
                    {{ v$.clientAccount.newPassword.$errors[0].$message }}
                  </span>
            </div>
          </div>
          <div class="rounded-md bg-red-50 p-4" v-if="error">
    <div class="flex">
      <div class="flex-shrink-0">
        <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
      </div>
      <div class="ml-3" >
     
        <div class="mt-2 text-sm text-red-700">
          <ul role="list" class="list-disc space-y-1 pl-5">
            <li>Incorrect Password!</li>
        
          </ul>
        </div>
      </div>
    </div>
  </div>

        </form>
        <div>
          <button
          @click="changePassword"
            type="button"
            class="flex mt-6 w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Change Password
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
import AccountMenuComponent from "@/components/AccountMenuComponent.vue";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
import { XCircleIcon } from '@heroicons/vue/20/solid'
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
    XCircleIcon
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