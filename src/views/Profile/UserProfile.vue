<template>
  <div class="mb-10 flex flex-grow items-center justify-center">
    <ProfileCard :id="id"></ProfileCard>
  </div>

  <ul class="flex flex-wrap place-content-center">
    <Post v-for="post in posts" :key="post.id" :data="post"></Post>
  </ul>
</template>

<script>
import Post from "../../components/Post/Post.vue";
import { getPostsByUser } from "../../firebase.js";
import ProfileCard from "./ProfileCard.vue";
export default {
  components: { ProfileCard, Post },
  props: ["id"],
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    getPostsByUser(this.id).then((data) => {
      this.posts = data;
    });
  },
};
</script>
