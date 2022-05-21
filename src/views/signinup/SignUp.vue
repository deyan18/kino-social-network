<template>
 
  <div class="min-h-full flex  items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-64">
    <div class="max-w-md w-full space-y-8">
      <div>

        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create a new account</h2>
       
      </div>
    
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name" class="sr-only">Name</label>
            <input id="name" v-model="name" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" placeholder="Name" />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="password" type="password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <ErrorMessage v-if="invalid" >The email or password are not valid.</ErrorMessage>

   
        <div class="space-y-2">
          <CustomButton @click="register">Create Account</CustomButton>
          <GoogleButton @click="signInWithGoogle">Sign Up With Google</GoogleButton>
        </div>
     
        <div class="text-sm flex items-center justify-center">
            <router-link :to="{name: 'SignIn'}" class="font-medium text-purple-600 hover:text-purple-500"> Return to Log In </router-link>
        </div>
    </div>
    
  </div>

</template>

<script>
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useRouter } from 'vue-router';
import { auth } from '../../firebase.js'
import ErrorMessage from './ErrorMessage.vue';
import CustomButton from '../../components/CustomButton.vue';
import GoogleButton from './GoogleButton.vue';
export default {
  components: {

    ErrorMessage,
    CustomButton,
    GoogleButton
  },
      data(){
      return{
        email: '',
        password: '',
        name: '',
        router: useRouter(),
        invalid: false,
      }
    },
    methods: {
    register: function () {
      if(!this.email.includes("@") || this.password === ""  || this.name === ""){
        this.invalid = true;
        return;
      }
      createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((data) => {
        console.log("Signed up.");
        this.router.push('/you');
      })
      .catch((error) =>{
        console.log(error.code);
        this.invalid = true;
      })
    },
    signInWithGoogle: function () {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((result) => {
        this.router.push('/you');
      }).catch((error) => {
        this.invalid = true;
      });
    },
    }
}
</script>