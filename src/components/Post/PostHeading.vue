<template>
  <div class="flex flex-row py-3 align-middle">
    <router-link :to="{name: 'UserProfile', params: { id } }">
    <UserIcon class="h-14 cursor-pointer" :userImg="data.userImg"></UserIcon>
</router-link>
    <div class="mb-2 ml-4 mt-1 flex flex-col">
      <router-link :to="{name: 'UserProfile', params: { id } }">
      <div
        class="
          cursor-pointer
          text-sm
          font-semibold
          text-gray-600
          hover:text-purple-500
        "
      >
        {{ data.userName }}
      </div>
</router-link>
      <div class="mt-1 flex w-full">
        <div class="text-xs font-thin text-gray-900">{{ date }}</div>
      </div>


    </div>

    <div class="flex flex-grow py-3 align-middle justify-end">
      <AnnotationIcon @click="$emit('toggleComments')" class="h-6 text-gray-600 hover:text-purple-500 cursor-pointer"></AnnotationIcon>
    </div>
    
  </div>
  <div class="border-b border-gray-300"></div>
</template>

<script>
import UserIcon from "../UserIcon.vue"
import moment from "moment";
import { AnnotationIcon } from "@heroicons/vue/outline";
export default {
  props: ["data"],
  components: { UserIcon, AnnotationIcon },
  data() {
    return {
    date: "",
    id: this.data.userID
    };
  },
  mounted() {
     this.date =  moment(new Date(this.data.date.seconds * 1000)).format('DD/MM/YYYY');
  },

};

</script>