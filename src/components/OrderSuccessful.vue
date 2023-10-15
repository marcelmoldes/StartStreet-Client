<template>
  <div class="mt-6">
<h1 class="text-center text-2xl ">PAYMENT MADE SUCCESSFULLY</h1>
<h2 class="text-center ">your order #{{ order.id + 100000 }} is in process</h2>
  </div>

</template>

<script>

export default {
props:['order']
}
</script>

<style>

</style>