<template>
  <CustomTitle >Watch List</CustomTitle>
  <Spinner v-if="showSpinner"></Spinner>
  <NoResults v-if="items.length === 0 && !showSpinner" >Your watch list is empty</NoResults>
  <ul class="flex flex-wrap place-content-center" v-if="items.length > 0">
    <WatchListCard
      v-for="item in items"
      @removed="updateItems()"
      :key="item.id"
      :title="item.title"
      :image="item.img"
      :id="item.id"
    ></WatchListCard>
  </ul>
</template>


 
<script>
import WatchListCard from "../WatchList/WatchListCard.vue";
import CustomTitle from "../../components/CustomTitle.vue";
import { getWatchList, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import NoResults from "../../components/NoResults.vue";
import Spinner from "../../components/Spinner.vue";
export default {
  components: { WatchListCard, CustomTitle, NoResults, Spinner },
  props: ["id"],
  data() {
    return {
      items: [],
      showSpinner: false,
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.updateItems();
      } else {
      }
    });
  },
  methods: {
    updateItems: function () {
      this.showSpinner = true;
      this.items =[]
     getWatchList().then((data) => {
        this.items = data;
        this.showSpinner = false;
      });
    },
  },
};
</script>
