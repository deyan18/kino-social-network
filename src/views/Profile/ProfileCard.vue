<template>
    
<div class="shadow-lg rounded-2xl w-80 p-4 bg-white dark:bg-gray-800 m-3">
    <div class="flex flex-row items-start gap-4">
        <router-link :to="{name: 'UserProfile', params: { id } }"
      class="inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 shadow-lg  sm:h-32 sm:w-32"
    >
      <img
        class="rounded-full"
        :src="userData.img"
        alt=""
      />
     
    </router-link>
        <div class="h-32 w-full flex flex-col justify-between align-middle ">
            <div>
              <router-link :to="{name: 'UserProfile', params: { id } }">
                <p class="text-gray-800 dark:text-white text-xl font-medium">
                    {{userData.name}}
                </p>
                </router-link>
                <p class="text-gray-400 text-xs">
                    {{userData.bio}}
                </p>
            </div>

            <CustomButton @click="follow" v-if="!canEdit && !following">Follow</CustomButton>
            <CustomButton @click="unfollow" class="bg-gray-600" v-if="!canEdit && following">Unfollow</CustomButton>
        <router-link
        :to="{ name: 'EditProfile' }"  class="group relative flex w-full justify-center rounded-lg border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
 v-if="canEdit">Edit</router-link>
        </div>

    </div>

</div>

</template>

<script>
import CustomButton from '../../components/CustomButton.vue';
import {getUser, auth, unfollowUser, followUser, doIFollow } from "../../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
export default {
  props: ['id'],
  components: { CustomButton},
  data() {
    return {
        userData: [],
        canEdit: false,
        following: false,
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
         if(this.id === auth.currentUser.uid){
      this.canEdit = true;
    }else{
      this.checkFollow();
    }
      }
    });
    

    

     getUser(this.id).then((data) => {
      this.userData = data;
    });

    console.log("ProfileCard this.userData:", this.userData)
  },
  methods: {
    follow: function () {
        followUser(this.id);
        this.following = true;
    },
    unfollow: function () {
        unfollowUser(this.id);
        this.following = false;
    },
    checkFollow: function () {
      doIFollow(this.id).then((data) => {
        this.following = data;
      });
    },
  },
}
</script>