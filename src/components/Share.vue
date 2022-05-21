<template>

<div class="bg-black  bg-opacity-40 w-full h-full absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
    <div class="w-96  px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <XCircleIcon @click="$emit('close')" class="w-8 absolute right-2 top-1 pt-2 mr-2 opacity-60 hover:opacity-100 cursor-pointer" ></XCircleIcon>
        <div class="mb-6 text-3xl font-light text-center text-gray-800 ">
            {{ title}}
        </div>
        <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div class="col-span-2 lg:col-span-1">
                
                </div>
                <div class="col-span-2 lg:col-span-1">
                    
                    </div>
                    <div class="col-span-2">
                        <label class="text-gray-700" for="name">
                            <textarea class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="How was it?" v-model="text" rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
       
                <div class="flex flex-grow w-full items-center justify-center">
                        <StarIcon class=" hover:text-purple-600" :class="stars >= 1 ? 'text-purple-600' : 'text-gray-300'" @click="stars=1"></StarIcon>
                        <StarIcon class="hover:text-purple-600" :class="stars >= 2 ? 'text-purple-600' : 'text-gray-300'" @click="stars=2"></StarIcon>
                        <StarIcon class="hover:text-purple-600" :class="stars >= 3 ? 'text-purple-600' : 'text-gray-300'" @click="stars=3"></StarIcon>
                        <StarIcon class=" hover:text-purple-600" :class="stars >= 4 ? 'text-purple-600' : 'text-gray-300'" @click="stars=4"></StarIcon>
                        <StarIcon class="hover:text-purple-600" :class="stars >= 5 ? 'text-purple-600' : 'text-gray-300'" @click="stars=5"></StarIcon>
                    </div>
                    
                    
                    <div class="col-span-2 text-right">
                        <button @click="post " class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import { XCircleIcon } from "@heroicons/vue/outline";
import { StarIcon } from "@heroicons/vue/solid";
import { sharePost } from "../firebase.js";

  export default {
    props: ['id', 'title', 'img'],
    components: {
        XCircleIcon, StarIcon
    },
    data(){
      return{
        stars: 0,
        text: "",        
      }
    },
    methods: {
    post: function () {
      sharePost(this.id, this.title, this.img, this.text, this.stars);
      this.$emit('close')
    },
  },
  }
</script>