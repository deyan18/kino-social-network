<template>

  <div class=" mb-10 flex flex-grow items-center justify-center">
      <ProfileCard :id="id"></ProfileCard>
  </div>

  <ul class="flex flex-wrap place-content-center">
    <Post v-for="post in posts" :key="post.id" :data="post"></Post>
  </ul>
</template>

<script>

import Post from "../../components/Post/Post.vue";
import { getPostsByUser, auth } from "../../firebase.js";
import ProfileCard from "./ProfileCard.vue";
export default {
  components: { ProfileCard, Post },
  data() {
    return {
      id: auth.currentUser.uid,
      posts: [],
    };
  },
  mounted() {

    getPostsByUser().then((data) => {
          this.posts = data;
    }); 

  },
};
</script>
