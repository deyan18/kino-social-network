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
        <ErrorMessage v-if="invalid" >The entered data is invalid.</ErrorMessage>

        <CustomButton @click="saveChanges">Save Changes</CustomButton>   


      <div class="flex space-x-3">

        <CustomButton @click="signOut" class="bg-orange-600 hover:bg-orange-700">Sign Out</CustomButton>   

      </div>
    </div>
  </div>

</template>

<script>
import { signOut } from "@firebase/auth";
import { auth, getUser, saveUserData, changeEmail, changePassword } from "../../firebase.js";
import { useRouter } from "vue-router";
import CustomTitle from "../../components/CustomTitle.vue"
import UserIcon from "../../components/UserIcon.vue";
import CustomButton from "../../components/CustomButton.vue";
import ErrorMessage from "../SignInUp/ErrorMessage.vue";

export default {
  components: {
    CustomButton,
    CustomTitle,
    UserIcon,
    ErrorMessage
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
      invalid: false,
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
      this.invalid = false;
      if(this.name === "" || !this.email.includes("@")){
        this.invalid = true;
        return;
      }
      saveUserData(this.name, this.bio);
      if(this.defaultEmail != this.email){
        changeEmail(this.email);
      }
      if(this.newPassword != ""){
        if(this.newPassword.length >= 6 && this.newPassword == this.confirmPassword){
        changePassword(this.newPassword);
        this.signOut();
      }else{
        this.invalid = true;
        return;
      }
      }
      
      this.router.push("/profile");
    },
  },
};
</script>
