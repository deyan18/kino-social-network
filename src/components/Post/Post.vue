<template>
  <div class="flex flex-col">
    <div
      class="
        mx-4
        mb-10
        flex
        w-80
        flex-col
        overflow-hidden
        rounded-2xl
        bg-white
        px-5
        pt-5
        drop-shadow-xl
      "
    >
      <div class="flex w-full items-center">
        <div class="w-full">
          <PostHeading :data="data" @toggleComments="showComments=!showComments"></PostHeading>
          <div v-if="!showComments" class="h-[26rem] overflow-y-scroll">

        
            <PostContent   :data="data"></PostContent>
            </div>
           <Comments v-if="showComments" :data="data"></Comments>


         

          
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostContent from "./PostContent.vue"
import Comments from "./Comments.vue"
import PostHeading from "./PostHeading.vue";

export default {
  props: ["data"],
  components: { PostContent, PostHeading, Comments },
  data() {
    return {
      showComments:false,
    };
  },
  

};
</script>
