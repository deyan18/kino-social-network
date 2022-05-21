<template>
  <div class="min-h-screen bg-gray-100">

    <!-- Search bar -->
    <div class="container px-5 mx-auto bg-gray-100">
      <div class="text-center  mb-10">
        
        <div class="flex w-full justify-center  flex-row">

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
                class="
                  w-full
                  pl-4
                  outline-none
                "
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
               <CustomButton  @click="search" class="w-32 ml-4 shadow-lg">Search</CustomButton>
            </div>
           
          
        </div>
      </div>
    </div>

<!-- Result List -->

    <ContentList  v-if="showingSearch && ( searchType == 'movies' ||  searchType == 'tvShows')">
      <Card
        v-for="result in searchResults"
        :key="result.id"
        :title="result.title"
        :type="resultType"
        :image="result.image"
        :id="result.id"
      ></Card>
    </ContentList>

    <ContentList  v-if="showingSearch && searchType == 'users'">
      <ProfileCard
        v-for="user in resultUsers"
        :key="user.id"
        :id="user.userID"
        :canEdit="false"
      ></ProfileCard>
    </ContentList>

    <ContentList v-if="!showingSearch">
      <Post
        v-for="feedPost in feed"
        :key="JSON.stringify(feedPost)"
        :data="feedPost"
      ></Post>
    </ContentList>

  <div class="flex w-full justify-center  flex-row">
    <CustomButton v-if="showingSearch" @click="showingSearch=false" class="w-40  shadow-lg bg-gray-600">Return to Feed</CustomButton>

  </div>

  </div>
</template>

<script>
import { SearchIcon, ArrowLeftIcon } from "@heroicons/vue/solid";
import Card from "../components/Card.vue";
import Post from "../components/Post/Post.vue";
import ContentList from "../components/ContentList.vue";
import CustomButton from "../components/CustomButton.vue";
import { searchUsers, getFollowing, getPostsByUser } from "../firebase.js";
import ProfileCard from "./Profile/ProfileCard.vue";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
export default {
  name: "Home",
  components: { Card, Post, ProfileCard, ContentList, CustomButton, SearchIcon, ArrowLeftIcon },
  data() {
    return {
      searchResults: [],
      searchValue: "",
      searchType: "users",
      resultType: "",
      resultUsers: [],
      feed: [],
      showingSearch: false,
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getFollowing().then((data) => {
          let following = [];
          console.log("GET FOLLOWING de getfeed", data);
          following = data;

          for (const u of following) {
            console.log("pasing user", u.userName);

            getPostsByUser(u.userID).then((userPosts) => {
              for (const p of userPosts) {
                this.feed.push(p);
              }
            });
          }
        });
      }
    });
  },

  methods: {
    search: function () {
      this.showingSearch = true;
      console.log("tipo " + this.searchType);
      if (this.searchType == "tvShows") {
        fetch(
          "https://imdb-api.com/en/API/SearchSeries/k_qy6es45c/" +
            this.searchValue
        )
          .then((response) => response.json())
          .then((result) => {
            this.searchResults = result.results;
            this.resultType = "TV Show";
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
          })
          .catch((error) => console.log("error", error));
      } else if (this.searchType == "users") {
        searchUsers(this.searchValue).then((data) => {
          this.resultUsers = data;
          console.log("HOME USERS SEARCH", data);
        });
      }
    },
  },
};
</script>