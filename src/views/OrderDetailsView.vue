<template>
  <div id="street">
    <order-details-component
    :client="client"
    :item="item"
    :order="order"
    v-if="order"
  ></order-details-component>
  </div>
 
</template>

<script>
import OrderDetailsComponent from "@/components/OrderDetailsComponent.vue";
import axios from "axios";
export default {
  props: ["client", "item"],
  components: {
    OrderDetailsComponent,
  },
  data() {
    return {
      order: false,
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      let response = await axios.get(
        "http://localhost:8081/orders/" + this.$route.params.id,
        {
          headers: {
            Authorization: this.client ? "Bearer " + this.client.token : null,
          },
        }
      );
      this.order = response.data.order;
    },
  },
};
</script>
