<template>
  <div class="mt-10 ">
    <label for="" class="bg-indigo-200 px-4 py-2  rounded-lg  text-sm font-medium leading-6 text-gray-900"
      >Add your comment</label
    >

    <div class="mt-5 ">
      <textarea
        v-model="comment.message"
        rows="4"
        name=""
        id=""
        class="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
      />
      

     
      <span v-if="v$.comment.message.$error" class="text-sm text-cyan-950">
        {{ v$.comment.message.$errors[0].$message }}
      </span>
    </div>
    <button
      @click="client ? postComment() : $router.push('/login')"
      type="button"
      class="rounded-md mt-5 bg-indigo-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
    >
      Send Message
    </button>
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

<style>
</style>