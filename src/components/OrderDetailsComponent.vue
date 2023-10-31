<template>
<h1>{{ client.email }}</h1>
<h2>{{ order.address }}</h2>
</template>

<script>
export default {
    props: ["client", "order", "item"],



}
</script>

<style>

</style>