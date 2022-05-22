<template>

    <Share
      v-if="openShare"
      :id="itemData.id"
      :title="itemData.title"
      :img="itemData.image"
      @close="openShare = false"
    ></Share>
    <div
      class="
        container
        flex flex-col
        items-center
        justify-center
        body-font
        text-gray-600
        px-5
        py-10
        md:flex-row
        mx-auto
        md:w-4/5
      "
    >
      <!-- Left side (Image) -->
      <div class="md:w-2/3 w-3/4 lg:w-3/5">
        <img
          class="rounded-[22px] object-cover object-center mb-3 shadow-xl"
          alt="hero"
          :src="itemData.image"
        />
      </div>

      <!-- Right side (Text) -->
      <div
        class="
          
          w-fit
          rounded-2xl
          bg-white
          shadow-xl
          mb-16
          py-10
          flex flex-col
          items-center
          text-center
          md:items-start md:ml-8
          pl-8
          md:text-left
          pr-8
          mx-auto
        "
      >
        <DetailData>
          <template v-slot:title>{{ itemData.title }}</template>
          <template v-slot:type>{{ itemData.type }}</template>
          <template v-slot:plot>{{ itemData.plot }}</template>
        </DetailData>

    

        <div class="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">

          <CustomButton
            @click="openShare=true"
            class="w-44"
            >Share</CustomButton
          >
          <CustomButton
            v-if="!inWatchList"
            @click="addWatchList"
            class="w-44 bg-gray-600"
            >Add to Watch List</CustomButton
          >
          <CustomButton
            v-if="inWatchList"
            @click="removeWatchList"
            class="w-52 bg-gray-600"
            >Remove from Watch List</CustomButton
          >
        </div>
      </div>
    </div>

    <ul class="flex flex-wrap place-content-center">
      <Post v-for="post in posts" :key="post.id" :data="post"></Post>
    </ul>

</template>

<script>
import Post from "../../components/Post/Post.vue";
import Share from "../../components/Share.vue";
import DetailData from "./DetailData.vue";
import {
  getPostsByContent,
  addToWatchList,
  auth,
  isInWatchList,
  removeFromWatchList,
} from "../../firebase";
import CustomButton from "../../components/CustomButton.vue";
import { onAuthStateChanged } from "firebase/auth";
export default {
  components: { Share, DetailData, Post, CustomButton },
  props: ["id"],
  data() {
    return {
      openShare: false,
      itemData: [],
      posts: [],
      inWatchList: false,
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isInWatchList(this.id).then((data) => {
          this.inWatchList = data;
        });
      } else {
      }
    });

    fetch(
      "https://imdb-api.com/en/API/Title/k_qy6es45c/" +
        this.$route.params.id +
        "/Trailer,"
    )
      .then((response) => response.json())
      .then((result) => {
        this.itemData = result;

      })
      .catch((error) => console.log("error", error));

    getPostsByContent(this.id).then((data) => {
      this.posts = data;
    });
  },

  methods: {
    addWatchList: function () {
      addToWatchList(
        this.itemData.id,
        this.itemData.title,
        this.itemData.image
      );
      this.inWatchList = true;
    },
    removeWatchList: function () {
      removeFromWatchList(this.itemData.id);
      this.inWatchList = false;
    },
  },
};
</script>
