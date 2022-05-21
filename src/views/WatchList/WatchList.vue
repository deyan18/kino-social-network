<template>
    <div class="min-h-screen bg-gray-100 ">
      
      <CustomTitle>Watch List</CustomTitle>
     <ul class="flex flex-wrap place-content-center" v-if="items.length > 0">
        <WatchListCard v-for="item in items"  @removed="updateItems()" :key="item.id"  :title="item.title" :image="item.img" :id="item.id"></WatchListCard>
    </ul>
    </div>
</template>


 
<script>
import WatchListCard from '../WatchList/WatchListCard.vue'
import CustomTitle from '../../components/CustomTitle.vue';
import {  getWatchList, auth} from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
export default {
  components: {WatchListCard, CustomTitle},
  props: ['id'],
  data(){
      return{
        items: [],
      }
    },
  mounted() {
      onAuthStateChanged(auth, (user) => {
      if (user) {
        this.updateItems();
    }else{
      }
    });


    },
    methods: {
       updateItems: function () {
         this.items = getWatchList().then((data) => {
          console.log("WatchList.vue: data", data)
          this.items = data;
          
        });
       }
    }
    ,

     

}
</script>
