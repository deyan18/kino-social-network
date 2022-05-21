<template>
     <!-- Barra comentarios -->
          <div
            class="
            mb-3
              relative
              flex
              w-full
              max-w-xl
              items-center
              self-center
              align-middle
              overflow-hidden
              text-gray-600
              focus-within:text-gray-400
            "
          >
            <UserIcon class="c w-8 mr-2" :userImg="userData.img"></UserIcon>
            <input
              v-model="commentText"
              class="
                rounded-tg
                focus:shadow-outline-purple
                w-full
                appearance-none
                border border-transparent
                bg-gray-100
                py-2
                pl-4
                pr-10
        
                text-sm
                placeholder-gray-400
                focus:border-purple-500
                focus:bg-white
                focus:text-gray-900
                focus:outline-none
              "
              style="border-radius: 25px"
              placeholder="Post a comment..."
              autocomplete="off"
            />

            <div
              @click="post"
              class="rounded-full bg-purple-500 p-2 ml-2 cursor-pointer"
            >
              <ReplyIcon class="w-4 text-white"></ReplyIcon>
            </div>
          </div>
</template>

<script>
import UserIcon from "../UserIcon.vue";
import { ReplyIcon } from "@heroicons/vue/solid";
import {getUser, postComment } from "../../firebase.js";
export default {
  props: ["data"],
  components: { UserIcon, ReplyIcon },
  data() {
    return {
    commentText: "",
    userData:[],
    };
  },
    methods: {
    post: function () {
      postComment(this.data.id, this.data.userID, this.commentText);
      this.commentText = "";
    },
  },
   mounted() {
    getUser().then((data) => {
      this.userData = data;
    })

   }
};

</script>
