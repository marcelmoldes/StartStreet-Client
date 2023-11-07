<template>
    <div class="mt-10 bg-gray-200">
      <div
        class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-4"
      >
        <admin-menu-component :client="client" class="col-span-1"></admin-menu-component>
  
        <div class="py-4 col-span-3">
          <h1 class="text-xl">Manage Clients</h1>
          asdadsasd
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