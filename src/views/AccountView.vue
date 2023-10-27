<template>
  <div id="account" class="mt-10">
    <form>
      <div
        class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"
      >
        <div class="mt-5 px-10 text-ce">
          <h2 class="text-lg font-semibold text-gray-900">
            Hello {{ client.client_name }}
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Welcome to your personal account
          </p>
          <div class="bg-gray-100 mt-7 rounded-md py-10 px-10">
            <ul class="text-lg">
              <a href=""
                ><li class="underline mt-2 underline-offset-8">
                  Information
                </li></a
              >

              <a @click="$router.push('/orders')"
                ><li class="underline mt-2 underline-offset-8">
                  Orders History
                </li></a
              >

              <a href=""
                ><li class="mt-2 underline underline-offset-8">
                  Change Password
                </li></a
              >

              <a href=""
                ><li class="mt-2 underline underline-offset-8">
                  Adress Book
                </li></a
              >
            </ul>
          </div>
        </div>

        <div
          class="grid max-w-2xl mt-10 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2"
        >
          <div class="sm:col-span-4">
            <label
              for="website"
              class="block text-xl font-medium leading-6 text-gray-900"
              >Edit Your Personal Information</label
            >
            <div class="mt-2">
              <div
                class="flex mt-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
              >
                <span
                  class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
                  >{{ client.email }}</span
                >
                <input
                  type="text"
                  name="website"
                  id="website"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
              <div
                class="flex mt-5 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
              >
                <span
                  class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
                  >{{ client.client_name }}</span
                >
                <input
                  type="text"
                  name="website"
                  id="website"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
              <div
                class="flex mt-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
              >
                <span
                  class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
                  >{{ client.a }}</span
                >
                <input
                  type="text"
                  name="website"
                  id="website"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div class="col-span-full">
            <label
              for="photo"
              class="block text-sm font-medium leading-6 text-gray-300"
              >Photo</label
            >
            <div class="mt-2 flex items-center gap-x-3">
              <UserCircleIcon
                class="h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <button
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
export default {
  props: ["client"],
};
</script>
  
  <style scoped>
#account {
  background-image: url(../assets/r.jpg);
  background-repeat: no-repeat;
  background-size: 96%;
}
</style>