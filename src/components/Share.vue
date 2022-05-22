<template>

<div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="w-96  px-5 pt-10 pb-6 m-auto mt-10 bg-white rounded-lg shadow absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <XCircleIcon @click="$emit('close')" class="w-8 absolute right-2 top-1 pt-2 mr-2 opacity-60 hover:opacity-100 cursor-pointer" ></XCircleIcon>
        <div class="mb-6 text-3xl font-bold text-center text-gray-800 ">
            {{ title}}
        </div>
        <div class="max-w-xl  m-auto">
            
                
                    
                    </div>
                    
                        <label class="text-gray-700" for="name">
                            <textarea class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="How was it?" v-model="text" rows="5" cols="40">
                            </textarea>
                        </label>
                 
                <div  class="flex justify-center mb-5">
                    <div class="flex items-center w-44 justify-center ">
                        <StarIcon class=" hover:text-purple-600 " :class="stars >= 1 ? 'text-purple-600' : 'text-gray-300'" @click="stars=1"></StarIcon>
                        <StarIcon class="hover:text-purple-600 " :class="stars >= 2 ? 'text-purple-600' : 'text-gray-300'" @click="stars=2"></StarIcon>
                        <StarIcon class="hover:text-purple-600 " :class="stars >= 3 ? 'text-purple-600' : 'text-gray-300'" @click="stars=3"></StarIcon>
                        <StarIcon class=" hover:text-purple-600 " :class="stars >= 4 ? 'text-purple-600' : 'text-gray-300'" @click="stars=4"></StarIcon>
                        <StarIcon class="hover:text-purple-600 " :class="stars >= 5 ? 'text-purple-600' : 'text-gray-300'" @click="stars=5"></StarIcon>
                    </div>
                    
                    </div>
                    <CustomButton v-if="!alreadyShared" @click="post"  > Post</CustomButton>
                    <div v-if="alreadyShared" class="flex space-x-2">
                    
                    <CustomButton @click="deleteP" class="bg-red-600 hover:bg-red-700"  > Delete</CustomButton>   
                    <CustomButton  @click="post"  > Save</CustomButton>
                    </div>
                    
                
                
            </div>
        </div>

</template>

<script>
import { XCircleIcon } from "@heroicons/vue/outline";
import { StarIcon } from "@heroicons/vue/solid";
import { sharePost, deletePost } from "../firebase.js";
import CustomButton from "./CustomButton.vue";
  export default {
    props: ['id', 'title', 'img', 'alreadyShared'],
    components: {
        XCircleIcon, StarIcon, CustomButton
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
    deleteP: function () {
      deletePost(this.id);
      this.$emit('close')
    },
  },
  }
</script>