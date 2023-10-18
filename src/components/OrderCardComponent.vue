<template>
    <div>
  <h1 class="text-xl">{{order.card_number}}</h1>
  <h2>{{ order.cvc }}</h2>
  </div>
</template>

<script>

export default {
props:['client','order']
}
</script>

<style>

</style>