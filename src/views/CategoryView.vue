<template>
  <div>
    <div class="text-center p-5 bg-gray-300 mt-0">

      <h1 class="font-medium text-3xl">{{ category.title }}</h1>
      <h3 class="font-medium text-xl">{{ category.description }}</h3>
    </div>
    <div class="grid grid-cols-4 px-20 ml-10 mx-auto">
      <category-card-component
        @setFavorite="setFavorite($event)"
        @removeFavorite="removeFavorite($event)"
        :item="item"
        v-for="item in items"
        :key="item" 
        :client="client"
      >
      </category-card-component>
    </div>
  </div>
</template>

<script>
import CategoryCardComponent from "@/components/CategoryCardComponent.vue";
import axios from "axios";
export default {
  props: ["client", "itemId"],
  components: {
    CategoryCardComponent,
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
    async removeComment(commentId) {
      await axios.delete("http://localhost:8081/comments/" + commentId, {
        comment_id: commentId,
        headers: {
          Authorization: this.client ? "Bearer " + this.client.token : null,
        },
      });
      this.loadData();
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