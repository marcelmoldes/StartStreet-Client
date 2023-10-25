<template>
  <header>
    <div class="p-2 font-normal text-gray-500 justify-center flex text-center">
      <h2 class="text-bold">
        Free shipping for orders over $30.00 and free returns
      </h2>
    </div>

    <div class="pl-2 p-2 justify-between">
      <nav>
        <div
          class="text-white rounded-md bg-gray-700 p-5 px-10 flex justify-end gap-x-9 m-4 pl-96"
        >
          <button
            v-if="!client"
            @click="$router.push('/login')"
            class="bg-black rounded-lg p-2 hover:bg-slate-500"
          >
            <p>Login</p>
          </button>
          <button
            v-if="!client"
            @click="$router.push('/register')"
            class="bg-black rounded-lg p-2 hover:bg-slate-500"
          >
            <p>Register</p>
          </button>
          <button
            @click="$router.push('/favorites')"
            v-if="client"
            class="bg-indigo-500 rounded-md p-2 hover:bg-slate-500"
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>

          <button
            @click="$emit('viewCart')"
            v-if="client"
            class="rounded-md p-2 hover:bg-slate-500 bg-indigo-500"
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
          <button
            v-if="client"
            @click="$emit('logout') + $router.push('/starstreet')"
            class="bg-indigo-300 rounded-lg p-2 hover:bg-slate-500"
          >
            <p>Logout</p>
          </button>

          <button
            v-if="client"
            @click="this.$router.push('/orders')"
            class="bg-indigo-300 rounded-lg p-2 hover:bg-slate-500"
          >
            <p>My Account</p>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
  


   


<script>
export default {
  props: ["client"],
  components: {},
};
</script>

<style>
</style>