<template>
  <div class="min-h-screen bg-gray-100">

<!-- Search Bar -->
<div class="container px-5  mx-auto bg-gray-100">
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
               <CustomButton  @click="search" class="w-32 ml-4 shadow-lg">Search</CustomButton>
            </div>
           
          
        </div>
      </div>
    </div>

<v-lazy class="flex flex-wrap place-content-center">
<Card v-for="result in results" :key="result.id" :title="result.title" type="Movie" :image="result.image" :id="result.id"></Card>
</v-lazy>
</div>
</template>

<script>
import Card from '../components/Card.vue'
import CustomButton from "../components/CustomButton.vue";
export default{
    name: 'Movies',
    components: {Card, CustomButton},
    data(){
      return{
        results: [],
      }
    },
    mounted(){
        console.log('AQUIII')
        fetch('https://imdb-api.com/en/API/Top250Movies/k_qy6es45c')
        .then(response => response.json())
        .then(result => {
            console.log('DENTRO');
          this.results = result.items;
        })
        .catch(error => console.log('error', error));
    },
    methods: {
    search: function () {
        
        fetch('https://imdb-api.com/en/API/SearchMovie/k_qy6es45c/'+this.searchValue)
        .then(response => response.json())
        .then(result => {

         this.results = result.results;
        })
        .catch(error => console.log('error', error));

    }
  },
}
</script>