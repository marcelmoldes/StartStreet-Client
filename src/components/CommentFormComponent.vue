<template>
  <div class="mt-10">
   
    
      
      <div>
         <form class="review-form">
        <h3 class="text-lg font-serif m-4">Leave a review</h3>

        <label for="review">Review</label>
        <textarea class="bg-gray-200" id="review" v-model="comment.message"></textarea>

        <label class="mt-3" for="rating">Rating</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>

        <!-- solution -->
        <label for="recommend">Would you recommend this product?</label>
        <select id="recommend" v-model="recommend">
          <option>Yes</option>
          <option>No</option>
        </select>
        <!-- solution -->

        <button type="button" @click="client ? postComment() : $router.push('/login')" class="bg-black mt-4 p-2 rounded-lg text-white w-143">
          Send Review
        </button>
      </form>
      <span v-if="v$.comment.message.$error" class="text-sm text-cyan-950">
        {{ v$.comment.message.$errors[0].$message }}
      </span>
      </div>
     

    </div>
  

</template>

<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  props: ["item_id", "client"],
  data() {
    return {
      comment: {
        message: "",
      },
    };
  },
  validations() {
    return {
      comment: {
        message: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(300),
        },
      },
    };
  },
  methods: {
    async postComment() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let response = await axios.post(
          "http://localhost:8081/comments",
          {
            item_id: this.item_id,
            message: this.comment.message,
          },
          {
            headers: {
              Authorization: this.client ? "Bearer " + this.client.token : null,
            },
          }
        );
        if (response.data.success) {
          this.$emit("commentSend");
          this.comment.message = "";
          this.v$.$reset();
        }
      }
    },
  },
};
</script>

<style setup>
.review-form {
  display: flex;
  flex-direction: column;
  width: 425px;
  padding: 20px;
  margin: 40px;
  border: 2px solid #d8d8d8;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}
</style>