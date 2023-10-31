<template>
 
 
 
 <div class="bg-gray-100">
 
 
  <a
      :href="`/orders/${order.id}`"
      class="m-9  text-center lg:w-80 grid-cols-4 w-50 leading-150 mt-8"
    >
      <img
        :src="order.order_details[0].item.images[0].url"
        class="ringb mt-9  ring-white md:w-96 md:h-96 w-96 h-96"
      />
    </a>

 </div> 
  

</template>

<script>
export default {
  props: ["client", "order", "item"],
};
</script>

<style>
</style>