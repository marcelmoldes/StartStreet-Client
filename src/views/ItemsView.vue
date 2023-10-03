<template>
  <div>
    <div class="text-center mt-5">
      <h1 class="font-medium text-3xl">{{ category.title }}</h1>
      <h3 class="font-medium text-xl">{{ category.description }}</h3>
    </div>
    <div class="grid grid-cols-4 px-20 ml-10 mx-auto">
      <items-card-component
        @setFavorite="setFavorite($event)"
        @removeFavorite="removeFavorite($event)"
        :item="item"
        v-for="item in items"
        :key="item"
        :client="client"
      >
      </items-card-component>
    </div>
  </div>
</template>

<script>
import ItemsCardComponent from "@/components/ItemsCardComponent.vue";
import axios from "axios";
export default {
  props: ["client", "itemId"],
  components: {
    ItemsCardComponent,
  },
  data() {
    return {
      category: {},
      items: [],
    };
  },
  async mounted() {
    this.loadData();
  },
  methods: {
    async setFavorite(itemId) {
      await axios.post(
        "http://localhost:8081/favorites",
        {
          item_id: itemId,
        },
        {
          headers: {
            Authorization: this.client ? "Bearer " + this.client.token : null,
          },
        }
      );
      for (let i = 0; i < this.items.length; i++) {
        let item = this.items[i];
        if (item.id === itemId) {
          this.items[i].favorite = true;
        }
      }
      // this.loadData();
    },
    async removeFavorite(itemId) {
      await axios.delete("http://localhost:8081/favorites/" + itemId, {
        headers: {
          Authorization: this.client ? "Bearer " + this.client.token : null,
        },
      });
      for (let i = 0; i < this.items.length; i++) {
        let item = this.items[i];
        if (item.id === itemId) {
          this.items[i].favorite = false;
        }
      }
      // this.loadData();
    },
    async loadData() {
      let response = await axios.get(
        "http://localhost:8081/categories/" + this.$route.params.slug,
        {
          headers: {
            Authorization: this.client ? "Bearer " + this.client.token : null,
          },
        }
      );
      this.items = response.data.items;
      this.category = response.data.category;
    },
  },
};
</script>

<style>
</style>