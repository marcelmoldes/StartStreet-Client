<template>
    <div class="mt-10 bg-gray-200">
      <div
        class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-4"
      >
        <admin-menu-component :client="client" class="col-span-1"></admin-menu-component>
  
        <div class="py-4 col-span-3 mr-12">
          <h1 class="text-xl">Manage Products</h1>
          <div class="bg-white mt-4 p-4 rounded-sm">
          asdsdadas
        </div>
        </div>
      </div>
    </div>
  </template>
    
    <script>
  import AdminMenuComponent from "@/components/AdminMenuComponent.vue";
  export default {
    components: { AdminMenuComponent },
  };
  </script>