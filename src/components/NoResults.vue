<template>
<div class="pt-32">
     <div class="flex flex-grow justify-center">
    <img
        
        src="../assets/NoResults.png"
        class="h-20 "
        alt=""
      />
      
  </div>
  <CustomTitleVue class="text-2xl sm:text-3xl"><slot></slot></CustomTitleVue>
  </div>
</template>


<script>
import CustomTitleVue from "./CustomTitle.vue";
export default {
  components: { CustomTitleVue },
};
</script>