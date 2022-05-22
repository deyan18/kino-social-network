<template>
  <div
    class="flex items-center justify-center pb-12 px-4 "
  >
    <div class="w-full items-center justify-center max-w-md space-y-8">
     
        <CustomTitle> Edit Profile</CustomTitle>

      <div class="flex items-center justify-center">
        <UserIcon class="h-32" :userImg="img"></UserIcon>
      </div>

      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="name" class="sr-only">Name</label>
          <input
            v-model="name"
            class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
            placeholder="Name"
          />
        </div>
        <div>
          <label for="bio" class="sr-only">Bio</label>
          <textarea
            v-model="bio"
            class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
            placeholder="Bio"
          />
        </div>
      </div>
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input
          v-model="email"
            class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
          <label for="password" class="sr-only">New Password</label>
          <input
            v-model="newPassword"
            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
            placeholder="New Password"
          />
        </div>
        <div>
          <label for="password" class="sr-only">Confirm Password</label>
          <input
            v-model="confirmPassword"
            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
            placeholder="Confirm Password"
          />
        </div>
      </div>


        <CustomButton @click="saveChanges">Save Changes</CustomButton>   


      <div class="flex space-x-3">

        <CustomButton @click="signOut" class="bg-orange-600 hover:bg-orange-700">Sign Out</CustomButton>   
        <CustomButton class="bg-red-600 hover:bg-red-700">Delete Account</CustomButton>

      </div>
    </div>
  </div>

</template>

<script>
import { LockClosedIcon, TrashIcon, LogoutIcon } from "@heroicons/vue/solid";
import { signOut } from "@firebase/auth";
import { auth, getUser, saveUserData, changeEmail } from "../../firebase.js";
import { useRouter } from "vue-router";
import CustomTitle from "../../components/CustomTitle.vue"
import UserIcon from "../../components/UserIcon.vue";
import CustomButton from "../../components/CustomButton.vue";

export default {
  components: {
    CustomButton,
    LockClosedIcon,
    TrashIcon,
    LogoutIcon,
    CustomTitle,
    UserIcon
  },
  data() {
    return {
      name: "",
      bio: "",
      email: "",
      img:"",
      newPassword: "",
      confirmPassword: "",
      defaultEmail:"",
      router: useRouter(),
    };
  },
  mounted() {

    getUser().then((data) => {
      this.name = data.name;
      this.bio = data.bio;
      this.img = data.img;
      this.defaultEmail = data.email;
    })
    this.email = auth.currentUser.email;

  },
  methods: {
    signOut: function () {

      signOut(auth).then(() => {
        this.router.push("/signin");
      });
    },
    
    saveChanges: function () {
      saveUserData(this.name, this.bio);
      if(this.defaultEmail != this.email){
        changeEmail(this.email);
      }
      this.router.push("/profile");
    },
  },
};
</script>
