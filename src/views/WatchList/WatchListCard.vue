<template>

<div class="flex flex-col items-center justify-center m-6 max-w-sm  w-64">
    
    <div class="mx-auto overflow-hidden bg-white rounded-2xl shadow-xl dark:bg-gray-800">
         <router-link :to="{name: 'Detail', params: { id }}"><img class="object-cover w-64 " :src="image" alt="poster"></router-link>
        
        <div class="py-5 text-center">
            <router-link :to="{name: 'Detail', params: { id }}" class="block text-2xl font-bold text-gray-800 dark:text-white">{{title}}</router-link>
        </div>
        <div class="flex justify-center space-x-2 mb-3 mx-3">
          <CustomButton  @click="removeWatchList" class="w-32 bg-gray-600">Remove</CustomButton>
        </div>
    </div>

    
    </div>
   
</template>

<script>
import CustomButton from '../../components/CustomButton.vue'
import {removeFromWatchList} from "../../firebase";


export default {
  props: ['title', 'image', 'id'],
  components: {CustomButton},
 methods: {
    removeWatchList: function () {
      console.log("AQUIII ");
      removeFromWatchList(this.id);
      this.$emit('removed');
    },
  },
}
</script>
