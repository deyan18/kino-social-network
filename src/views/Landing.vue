<template>
<ul class="flex flex-row flex-wrap fixed top-0 h-screen w-screen bg-white">
  <img v-for="result in results" :key="result.id" class="lg:w-1/6 sm:w-1/4 w-1/2" :src="result.image">
</ul>
    
    <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
<div class="container   bg-white rounded-2xl  w-fit flex items-center shadow-2sxl sm:mx-auto mx-4">
        <div class="w-full flex flex-col items-center justify-between relative py-10 px-9 space-y-10 ">
          <img src="../assets/logoLight.png" alt="" class="object-scale-down h-24 w-15">
            <p class="flex flex-col max-w-lg text-center items-center font-extrabold text-2xl mt-6 text-black">
                Share your love and passion for movies and tv shows with the world
            </p>
            <router-link :to="{name: 'SignUp'}">
            <CustomButton class="w-32 h-16 text-lg font-bold uppercase">Join</CustomButton></router-link>
             <div class=" text-center text-md text-gray-600">
          Or
          {{ ' ' }}
          <router-link :to="{name: 'SignIn'}" class="font-medium text-purple-600 hover:text-purple-500"> log in </router-link>
        </div>
        </div>
    </div>
    </div>
</template>


<script>
import CustomButton from "../components/CustomButton.vue";
export default {
  components: {
    CustomButton
  },data() {
    return {
      results: [],
    };
  },
  mounted() {
    this.showTopMovies();
  },
  methods: {
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