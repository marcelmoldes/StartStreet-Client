<template>
  <div id="account" class="mt-10">
    <form>
      <div
        class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-4"
      >
        <account-menu-component :client="client" class="col-span-1"></account-menu-component>

        <div
          class="grid max-w-2xl mt-10 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-3"
        >
        <div
            class="inline-block mt-3 text-center bg-red-600 text-white p-1 rounded-lg col-span-4"
            v-if="error"
          >
            Ha habido un error, por favor verifica tu informacion y intentalo de
            nuevo.
          </div>
          <div class="sm:col-span-4">
            <label
              for="website"
              class="block text-xl font-medium leading-6 text-gray-900"
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