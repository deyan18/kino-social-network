<template>

<CustomTitle class="mb-6">Movies</CustomTitle>

  <!-- Search Bar -->
  <div class="container px-5 mx-auto">
    <div class="text-center mb-5">
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
          <CustomButton @click="search" class="w-32 ml-4 shadow-lg"
            >Search</CustomButton
          >
        </div>
      </div>
    </div>
  </div>

  <p class="mt-2 mb-4 text-center text-sm text-gray-600">
          Check out what's
          {{ ' ' }}
          <router-link :to="{name: 'ComingSoon'}" class="font-medium text-purple-600 hover:text-purple-500"> coming soon </router-link>
        </p>

 <Spinner v-if="showSpinner"></Spinner>
  <NoResults v-if="!showSpinner && results.length === 0" >No results</NoResults>

  
  <!-- Results -->
  <ContentList>
    <Card
      v-for="result in results"
      :key="result.id"
      :title="result.title"
      type="Movie"
      :image="result.image"
      :id="result.id"
    ></Card>
  </ContentList>
</template>

<script>
import Card from "../components/Card.vue";
import CustomButton from "../components/CustomButton.vue";
import ContentList from "../components/ContentList.vue";
import Spinner from "../components/Spinner.vue";
import NoResults from "../components/NoResults.vue";
import CustomTitle from "../components/CustomTitle.vue";
export default {
  components: { Card, CustomButton, ContentList, Spinner, NoResults, CustomTitle },
  data() {
    return {
      results: [],
      showSpinner: false,
      searchValue: "",
    };
  },
  mounted() {
    this.showTopMovies();
  },
  methods: {
    search: function () {
      if (this.searchValue === "") {
        this.showTopMovies();
      } else {
        this.results = [];
        this.showSpinner = true;
        fetch(
          "https://imdb-api.com/en/API/SearchMovie/k_qy6es45c/" +
            this.searchValue
        )
          .then((response) => response.json())
          .then((result) => {
            this.results = result.results;
            this.showSpinner = false;
          })
          .catch((error) => console.log("error", error));
      }
    },
    showTopMovies: function () {
      this.results = [];
      this.showSpinner = true;
      fetch("https://imdb-api.com/en/API/MostPopularMovies/k_qy6es45c")
        .then((response) => response.json())
        .then((result) => {
          this.results = result.items;
          this.showSpinner = false;
        })
        .catch((error) => console.log("error", error));
    },
  },
};
</script>
