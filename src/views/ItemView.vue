<template>
  <div
    class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
  >
    <item-details-component
      :client="client"
      :item="item"
      :key="item"
      @setFavorite="setFavorite($event)"
      @removeFavorite="removeFavorite($event)"
      @viewCart="$emit('viewCart')"
    />

    <comment-card-component
      :client="client"
      :item="item"
      @removeComment="removeComment($event)"
    />
    <comment-form-component
      :client="client"
      :item_id="item.id"
      @commentSend="loadData($event)"
    />
  </div>
</template>

<script>
import axios from "axios";
import CommentCardComponent from "../components/CommentCardComponent.vue";
import ItemDetailsComponent from "../components/ItemDetailsComponent.vue";
import CommentFormComponent from "../components/CommentFormComponent.vue";

export default {
  props: ["client", "commentId", "itemId"],
  components: {
    ItemDetailsComponent,
    CommentCardComponent,
    CommentFormComponent,
  },
  data() {
    return {
      item: {},
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
      this.item.favorite = true;
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
    async removeFavorite(itemId) {
      await axios.delete("http://localhost:8081/favorites/" + itemId, {
        headers: {
          Authorization: this.client ? "Bearer " + this.client.token : null,
        },
      });
      this.item.favorite = false;
    },
    async loadData() {
      let itemResponse = await axios.get(
        "http://localhost:8081/items/" + this.$route.params.slug,
        {
          headers: {
            Authorization: this.client ? "Bearer " + this.client.token : null,
          },
        }
      );
      this.item = itemResponse.data.item;
    },
  },
};
</script>