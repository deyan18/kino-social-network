<template>
    <div class="flex flex-row py-2 w-full">
    <UserIcon class="h-8 cursor-pointer" :userImg="data.userImg"></UserIcon>
    <div class=" ml-4 flex flex-col w-full">
      <div
        class="
          cursor-pointer
          text-sm
          font-semibold
          text-gray-600
          hover:text-purple-500
        "
      >
        {{data.userName}}
      </div>

      <div class="mt-1 flex w-full">
        <div class="text-xs font-thin text-gray-900">{{ data.text }}</div>
      </div>

    </div>
  </div>
</template>

<script>
import UserIcon from "../UserIcon.vue";
import moment from "moment";
export default {
  props: ["data"],
  components: { UserIcon },
  data() {
    return {
    date: "",
    };
  },
  mounted() {
     this.date =  moment(new Date(this.data.date.seconds * 1000)).format('DD/MM/YYYY');
  },

};

</script>