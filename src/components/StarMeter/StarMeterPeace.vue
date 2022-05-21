<template>
     <StarIcon :class="stars >= position ? 'text-purple-600' : 'text-gray-300'"></StarIcon>

</template>

<script>
import { StarIcon } from "@heroicons/vue/solid";

  export default {
    props: ['position', 'canChoose', 'stars'],
    components: { StarIcon},
  }
 </script>