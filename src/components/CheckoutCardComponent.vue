<template>
  <main class="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
    <h1 class="sr-only">Checkout</h1>

    <!--Mobile -->
    <section
      aria-labelledby="order-heading"
      class="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden"
    >
      <Disclosure as="div" class="mx-auto max-w-lg">
        <div class="flex items-center justify-between">
          <h2 id="order-heading" class="text-lg font-medium text-gray-900">
            Your Order
          </h2>
          <DisclosureButton
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
          </DisclosureButton>
        </div>

        <DisclosurePanel>
          <ul
            role="list"
            class="divide-y divide-gray-200 border-b border-gray-200"
          >
            <li
              v-for="cartItem in cartItems"
              :key="cartItem"
              class="flex space-x-6 py-6"
            >
              <img
                :src="cartItem.item.images[0].url"
                class="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"
              />
              <div class="flex flex-col justify-between space-y-4">
                <div class="space-y-1 text-sm font-medium">
                  <h3 class="text-gray-900">{{ cartItem.item.title }}</h3>
                  <p class="text-gray-900"></p>
                  <p class="text-gray-500"></p>
                  <p class="text-gray-500"></p>
                </div>
                <div class="flex space-x-4">
                  <div class="flex border-l border-gray-300 pl-4">
                    <button
                      type="button"
                      class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <dl class="mt-10 space-y-6 text-sm font-medium ">
            <div class="flex justify-between">
              <dt>Subtotal</dt>
              <dd class="text-gray-900">{{ order.subtotal }} $</dd>
            </div>

            <div class="flex justify-between">
              <dt>Taxes</dt>
              <dd class="text-gray-900">{{ order.taxes }} $</dd>
            </div>
            <div class="flex justify-between">
              <dt>Shipping</dt>
              <dd class="text-gray-900">{{ order.shipping }} $</dd>
            </div>
          </dl>
        </DisclosurePanel>

        <p
          class="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900"
        >
          <span class="text-base">Total</span>
          <span class="text-base">{{ order.total }}</span>
        </p>
      </Disclosure>
    </section>

    <!-- Order summary -->
    <section
      aria-labelledby="summary-heading"
      class="hidden w-full max-w-md flex-col bg-gray-50 lg:flex"
    >
      <h2 id="summary-heading" class="sr-only">Order summary</h2>

      <ul
        role="list"
        class="flex-auto divide-y divide-gray-200 overflow-y-auto px-6"
      >
        <li class="flex space-x-6 py-6">
          <img
            class="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"
          />
          <div class="flex flex-col justify-between space-y-4">
            <div class="space-y-1 text-sm font-medium"></div>
            <div class="flex space-x-4">
              <div class="flex border-l border-gray-300 pl-4">
                <button
                  type="button"
                  class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <dl class="mt-10 space-y-6 text-sm font-medium text-gray-500">
        <div class="flex justify-between">
          <dt>Subtotal</dt>
          <dd class="text-gray-900">{{ order.subtotal }} $</dd>
        </div>

        <div class="flex justify-between">
          <dt>Taxes</dt>
          <dd class="text-gray-900">{{ order.taxes }} $</dd>
        </div>
        <div class="flex justify-between">
          <dt>Shipping</dt>
          <dd class="text-gray-900">{{ order.shipping }} $</dd>
        </div>
      </dl>

      <div
        class="flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900"
      >
        <dt class="text-base">Total</dt>
        <dd>{{ order.total }}</dd>
      </div>
    </section>

    <!-- Checkout form -->
    <section
      aria-labelledby="payment-heading"
      class="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0"
    >
      <div class="mx-auto max-w-lg">
        <div class="hidden pb-16 pt-10 lg:flex"></div>

        <button
          type="button"
          class="flex w-full items-center justify-center rounded-md border border-transparent bg-black py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          <span class="sr-only">Pay with Apple Pay</span>
          <svg class="h-5 w-auto" fill="currentColor" viewBox="0 0 50 20">
            <path
              d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z"
            />
          </svg>
        </button>

        <div class="relative mt-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-200" />
          </div>
          <div class="relative flex justify-center">
            <span class="bg-white px-4 text-sm font-medium text-gray-500"
              >or</span
            >
          </div>
        </div>

        <form class="mt-6">
          <div class="grid grid-cols-12 gap-x-4 gap-y-6">
            <div class="col-span-full">
              <label
                for="email-address"
                class="block text-sm font-medium text-gray-700"
                >Email address</label
              >
              <div class="mt-1">
                <input
                  v-model="order.email"
                  type="email"
                  id="email-address"
                  name="email-address"
                  autocomplete="email"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span
                  v-if="v$.order.email.$error"
                  class="text-sm text-cyan-950"
                >
                  {{ v$.order.email.$errors[0].$message }}
                </span>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="name-on-card"
                class="block text-sm font-medium text-gray-700"
                >Phone</label
              >
              <div class="mt-1">
                <input
                  v-model="order.phone"
                  type="text"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span
                  v-if="v$.order.phone.$error"
                  class="text-sm text-cyan-950"
                >
                  {{ v$.order.phone.$errors[0].$message }}
                </span>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="name-on-card"
                class="block text-sm font-medium text-gray-700"
                >First Name</label
              >
              <div class="mt-1">
                <input
                  v-model="order.first_name"
                  type="text"
                  id="name-on-card"
                  name="name-on-card"
                  autocomplete="cc-name"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span
                  v-if="v$.order.first_name.$error"
                  class="text-sm text-cyan-950"
                >
                  {{ v$.order.first_name.$errors[0].$message }}
                </span>
              </div>
              <label
                for="name-on-card"
                class="block text-sm font-medium text-gray-700"
                >Last Name</label
              >
              <div class="mt-1">
                <input
                  v-model="order.last_name"
                  type="text"
                  id="name-on-card"
                  name="name-on-card"
                  autocomplete="cc-name"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span
                  v-if="v$.order.last_name.$error"
                  class="text-sm text-cyan-950"
                >
                  {{ v$.order.last_name.$errors[0].$message }}
                </span>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="card-number"
                class="block text-sm font-medium text-gray-700"
                >Card number</label
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>

              <div class="mt-1">
                <input
                  v-model="order.card_number"
                  type="text"
                  id="card-number"
                  name="card-number"
                  autocomplete="cc-number"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span
                  v-if="v$.order.card_number.$error"
                  class="text-sm text-cyan-950"
                >
                  {{ v$.order.card_number.$errors[0].$message }}
                </span>
              </div>
            </div>

            <div class="col-span-8 sm:col-span-9">
              <label
                for="expiration-date"
                class="block text-sm font-medium text-gray-700"
                >Expiration date (MM/YY)</label
              >
              <div class="mt-1">
                <input
                  v-model="order.expiration_date"
                  type="text"
                  name="expiration-date"
                  id="expiration-date"
                  autocomplete="cc-exp"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span
                  v-if="v$.order.expiration_date.$error"
                  class="text-sm text-cyan-950"
                >
                  {{ v$.order.expiration_date.$errors[0].$message }}
                </span>
              </div>
            </div>

            <div class="col-span-4 sm:col-span-3">
              <label for="cvc" class="block text-sm font-medium text-gray-700"
                >CVC</label
              >
              <div class="mt-1">
                <input
                  v-model="order.cvc"
                  type="text"
                  name="cvc"
                  id="cvc"
                  autocomplete="csc"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span v-if="v$.order.cvc.$error" class="text-sm text-cyan-950">
                  {{ v$.order.cvc.$errors[0].$message }}
                </span>
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="name-on-card"
                class="block text-sm font-medium text-gray-700"
                >Name On Card</label
              >
              <div class="mt-1">
                <input
                  v-model="order.card_name"
                  type="text"
                  id="name-on-card"
                  name="name-on-card"
                  autocomplete="cc-name"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span
                  v-if="v$.order.card_name.$error"
                  class="text-sm text-cyan-950"
                >
                  {{ v$.order.card_name.$errors[0].$message }}
                </span>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="address"
                class="block text-sm font-medium text-gray-700"
                >Address</label
              >
              <div class="mt-1">
                <input
                  v-model="order.address"
                  type="text"
                  id="address"
                  name="address"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span
                  v-if="v$.order.address.$error"
                  class="text-sm text-cyan-950"
                >
                  {{ v$.order.address.$errors[0].$message }}
                </span>
              </div>
            </div>

            <div class="col-span-full sm:col-span-4">
              <label for="city" class="block text-sm font-medium text-gray-700"
                >City</label
              >
              <div class="mt-1">
                <input
                  v-model="order.city"
                  type="text"
                  id="city"
                  name="city"
                  autocomplete="address-level2"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span v-if="v$.order.city.$error" class="text-sm text-cyan-950">
                  {{ v$.order.city.$errors[0].$message }}
                </span>
              </div>
            </div>

            <div class="col-span-full sm:col-span-4">
              <label
                for="region"
                class="block text-sm font-medium text-gray-700"
                >State</label
              >
              <div class="mt-1">
                <input
                  v-model="order.state"
                  type="text"
                  id="region"
                  name="region"
                  autocomplete="address-level1"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span
                  v-if="v$.order.state.$error"
                  class="text-sm text-cyan-950"
                >
                  {{ v$.order.state.$errors[0].$message }}
                </span>
              </div>
            </div>

            <div class="col-span-full sm:col-span-4">
              <label
                for="postal-code"
                class="block text-sm font-medium text-gray-700"
                >Postal code</label
              >
              <div class="mt-1">
                <input
                  v-model="order.postal_code"
                  type="text"
                  id="postal-code"
                  name="postal-code"
                  autocomplete="postal-code"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span
                  v-if="v$.order.postal_code.$error"
                  class="text-sm text-cyan-950"
                >
                  {{ v$.order.postal_code.$errors[0].$message }}
                </span>
              </div>
            </div>
          </div>

          <button
            @click="submitOrder"
            type="button"
            class="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Pay
          </button>
        </form>
      </div>
      <h1 v-if="paymentError" class="text-red-500 text-xl">Payment Error</h1>
    </section>
  </main>
</template>
<script>

import axios from "axios";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { Disclosure, DisclosurePanel, DisclosureButton } from "@headlessui/vue";
export default {
  props: ["client"],
  emits: ["orderSuccessful"],
  components: { Disclosure, DisclosurePanel, DisclosureButton },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      order: {
        email: "mol@gmail.com",
        first_name: "marcelo",
        last_name: "molsdeos",
        phone: "666666666",
        address: "dfrsgtrrhthtrhrt",
        city: "ththr6hr6hr6",
        state: "h6r6h6rhr6h",

        postal_code: "5656",
        card_name: "gthtyhyft",
        card_number: "546546546546",
        expiration_date: "4464",
        cvc: "444",
      },
      paymentError: false,

      cartItems: [],
    };
  },
  validations() {
    return {
      order: {
        email: {
          required,
          email,
          minLength: minLength(6),
          maxLength: maxLength(50),
        },
        first_name: {
          required,

          minLength: minLength(6),
          maxLength: maxLength(60),
        },
        last_name: {
          required,

          minLength: minLength(6),
          maxLength: maxLength(60),
        },
        phone: {
          required,

          minLength: minLength(6),
          maxLength: maxLength(16),
        },
        address: {
          required,

          minLength: minLength(6),
          maxLength: maxLength(150),
        },
        city: {
          required,

          minLength: minLength(3),
          maxLength: maxLength(50),
        },
        state: {
          required,

          minLength: minLength(3),
          maxLength: maxLength(30),
        },
        postal_code: {
          required,

          minLength: minLength(4),
          maxLength: maxLength(6),
        },
        card_name: {
          required,

          minLength: minLength(3),
          maxLength: maxLength(50),
        },
        card_number: {
          required,

          minLength: minLength(2),
          maxLength: maxLength(15),
        },
        expiration_date: {
          required,

          minLength: minLength(4),
          maxLength: maxLength(4),
        },
        cvc: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(4),
        },
      },
    };

  },
  async mounted() {
    await this.loadData();

    let subtotal = 0;
    for (let cartItem of this.cartItems) {
      subtotal = subtotal + cartItem.quantity * cartItem.item.price;
    }
    this.order.subtotal = subtotal;

    let shipping = 0;
    for (let cartItem of this.cartItems) {
      shipping = shipping + cartItem.quantity * 5;
    }
    this.order.shipping = shipping;

    let taxes = Math.round(subtotal * 0.1);
    this.order.taxes = taxes;

    this.order.total = subtotal + shipping + taxes;
  },
  methods: {
    async submitOrder() {
      this.v$.$validate();
      if (!this.v$.$error) {
    
        this.paymentError = false;

        const response = await axios.post(
          "http://localhost:8081/order",

          {
            email: this.order.email,
            first_name: this.order.first_name,
            last_name: this.order.last_name,
            phone: this.order.phone,
            address: this.order.address,
            city: this.order.city,
            state: this.order.state,
            postal_code: this.order.postal_code,
            card_name: this.order.card_name,
            card_number: this.order.card_number,
            expiration_date: this.order.expiration_date,
            cvc: this.order.cvc,
            client_id: this.client.id,
          },

          {
            headers: {
              Authorization: this.client ? "Bearer " + this.client.token : null,
            },
          }
        );    

        if (response.data.success) {
          this.$emit("orderSuccessful", response.data.order);
          
        } else {
          this.paymentError = true;
        }
      }
    },
    async loadData() {
      let response = await axios.get("http://localhost:8081/cart", {
        headers: {
          Authorization: this.client ? "Bearer " + this.client.token : null,
        },
      });
      this.cartItems = response.data.cart;
    },
  },
};
</script>
 