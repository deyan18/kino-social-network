<template>
  <!-- Search bar -->
  <div class="container px-5 mx-auto">
    <div class="text-center mb-10">
      <div class="flex w-full justify-center flex-row">
        <div
          class="
            w-[42rem]
            bg-white
            rounded-2xl
            flex
            items-center
            p-3
            shadow-lg
            border border-gray-200
          "
        >
          <input
            @keydown.enter="search"
            placeholder="Search"
            v-model="searchValue"
            class="w-full pl-4 outline-none"
          />
          <div class="select">
            <select
              v-model="searchType"
              class="text-sm outline-none focus:outline-none bg-transparent"
            >
              <option value="tvShows" selected>TV Shows</option>
              <option value="movies">Movies</option>
              <option value="users">Users</option>
            </select>
          </div>
          <CustomButton @click="search" class="w-32 ml-4 shadow-lg"
            >Search</CustomButton
          >
        </div>
      </div>
    </div>
  </div>
  <Spinner v-if="showSpinner"></Spinner>
  <NoResults v-if="!showSpinner && (searchResults.length === 0 &&  resultUsers.length === 0) && showingSearch" ></NoResults>
  <!-- Content -->

  <!-- Movies/TV Shows results -->
  <ContentList
    v-if="showingSearch && (searchType == 'movies' || searchType == 'tvShows')"
  >
    <Card
      v-for="result in searchResults"
      :key="result.id"
      :title="result.title"
      :type="resultType"
      :image="result.image"
      :id="result.id"
    ></Card>
  </ContentList>

  <!-- Users results -->
  <ContentList v-if="showingSearch && searchType == 'users'">
    <ProfileCard
      v-for="user in resultUsers"
      :key="user.id"
      :id="user.userID"
      :canEdit="false"
    ></ProfileCard>
  </ContentList>

  <!-- Feed -->
  <ContentList v-if="!showingSearch">
    <Post
      v-for="feedPost in feed"
      :key="JSON.stringify(feedPost)"
      :data="feedPost"
    ></Post>
  </ContentList>

  <!-- Return to feed button -->
  <div class="flex w-full justify-center flex-row mt-10">
    <CustomButton
      v-if="showingSearch"
      @click="showingSearch = false"
      class="w-40 shadow-lg bg-gray-600"
      >Return to Feed</CustomButton
    >
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Post from "../components/Post/Post.vue";
import ContentList from "../components/ContentList.vue";
import CustomButton from "../components/CustomButton.vue";
import { searchUsers, getFollowing, getPostsByUser } from "../firebase.js";
import ProfileCard from "./Profile/ProfileCard.vue";
import Spinner from "../components/Spinner.vue";
import NoResults from "../components/NoResults.vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { tsThisType } from "@babel/types";
export default {
  name: "Home",
  components: { Card, Post, ProfileCard, ContentList, CustomButton, Spinner, NoResults },
  data() {
    return {
      searchResults: [],
      searchValue: "",
      searchType: "users",
      resultType: "",
      resultUsers: [],
      feed: [],
      showingSearch: false,
      showSpinner: false,
    };
  },
  mounted() {
    this.getFeed();
  },

  methods: {
    search: function () {
      this.showSpinner = true;
      this.showingSearch = true;
      
      if (this.searchType == "tvShows") {
       

        fetch(
          "https://imdb-api.com/en/API/SearchSeries/k_qy6es45c/" +
            this.searchValue
        )
          .then((response) => response.json())
          .then((result) => {
            this.searchResults = result.results;
            this.resultType = "TV Show";
            this.showSpinner = false;
          })
          .catch((error) => console.log("error", error));
      } else if (this.searchType == "movies") {
        fetch(
          "https://imdb-api.com/en/API/SearchMovie/k_qy6es45c/" +
            this.searchValue
        )
          .then((response) => response.json())
          .then((result) => {
            this.searchResults = result.results;
            this.resultType = "Movie";
            this.showSpinner = false;
          })
          .catch((error) => console.log("error", error));
      } else if (this.searchType == "users") {
        this.resultUsers = [];
        searchUsers(this.searchValue).then((data) => {
          this.resultUsers = data;
          this.showSpinner = false;
        });
      }
    },
    getFeed: function () {
      this.showSpinner = true;
      /* onAuthStateChanged is used to guarantee that the user uid is loaded */
      onAuthStateChanged(auth, (user) => {
        if (user) {
          /* Get users feed */
          getFollowing().then((data) => {
            let following = [];
            following = data;

            for (const u of following) {
              getPostsByUser(u.userID).then((userPosts) => {
                for (const p of userPosts) {
                  this.feed.push(p);
                }
                this.showSpinner = false;
              });
            }
          });
        }
      });
    },
  },
};
</script>