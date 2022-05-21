<template>

<div>
<div class="h-[22.9rem] overflow-y-scroll">
     <ul class="inline-block place-content-center">
             
    <Comment v-for="comment in comments" :key="comment.id" :data="comment"> {{comment.text}}</Comment>
  </ul>
</div>
  <CommentBar :data="data"></CommentBar>
  </div>
</template>

<script>
import CommentBar from "./CommentBar.vue"
import Comment from "./Comment.vue"
import {db } from "../../firebase.js";
import {collection, onSnapshot } from "firebase/firestore";
export default {
  props: [ "data"],
  components: { Comment, CommentBar},
  data() {
    return {
        comments:[],
    };
  },

   mounted() {

     onSnapshot(collection(db, "allPosts/"+ this.data.id + "/posts/" + this.data.userID + "/comments"), (querySnapshot) => {
        this.comments = [];
        querySnapshot.forEach((doc) => {
          this.comments.push(doc.data());
        });

        console.log("this.comments => ", this.comments);
      });

  },

};

</script>