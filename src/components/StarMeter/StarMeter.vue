<template>
    <div class="flex flex-grow w-40 items-center justify-center">
        <StarMeterPeace v-for="index in 5" :key="index" :stars="stars" :position="index"></StarMeterPeace>
    </div>

</template>

<script>
import StarMeterPeace from './StarMeterPeace.vue'

  export default {
    props: ['stars'],
    components: { StarMeterPeace},
  }
 </script>