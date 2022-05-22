<template>
<CustomTitle class="mb-6">Coming Soon</CustomTitle>
 <Spinner v-if="showSpinner"></Spinner>

  <!-- Results -->
  <ContentList>
    <Card
      v-for="result in results"
      :key="result.id"
      :title="result.title"
      :type="result.date"
      :image="result.img"
      id="-1"
    ></Card>
  </ContentList>
</template>

<script>
import Card from "../components/Card.vue";
import CustomButton from "../components/CustomButton.vue";
import ContentList from "../components/ContentList.vue";
import Spinner from "../components/Spinner.vue";
import { getComingSoon } from "../firebase";
import CustomTitle from "../components/CustomTitle.vue";
export default {
  components: { Card, CustomButton, ContentList, Spinner, CustomTitle },
  data() {
    return {
      results: [],
      showSpinner: false,
    };
  },
  mounted() {
    this.showSpinner = true;
    this.showComingSoon();
  },
  methods: {
    showComingSoon: function () {
      getComingSoon().then((data) => {
        this.results = data;
        this.showSpinner = false;
      });
    },
  },
};
</script>
