<template>
 
  <div class="min-h-full flex  items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-64">
    <div class="max-w-md w-full space-y-8">
      <div>

        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Log In</h2>
       
      </div>
     
        <input type="hidden" name="remember" value="true" />
        <div>
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" v-model="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" v-model="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          
        </div>
        <ErrorMessage v-if="invalid" >The email or password are not valid.</ErrorMessage>

</div>
        <div class="text-sm flex items-center justify-center">
            <router-link :to="{name: 'ForgotPassword'}" class="font-medium text-purple-600 hover:text-purple-500"> Forgot your password? </router-link>
          </div>
        

         

        <div class="space-y-2">
          <CustomButton @click="signIn" >Log In</CustomButton>
          <GoogleButton @click="signInWithGoogle">Log In With Google</GoogleButton>
        </div>
         <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ ' ' }}
          <router-link :to="{name: 'SignUp'}" class="font-medium text-purple-600 hover:text-purple-500"> create a new account </router-link>
        </p>
    
    </div>
    
  </div>
  
</template>

<script>
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useRouter } from 'vue-router';
import { auth, userExistsInDB, saveUserData } from '../../firebase.js'
import CustomButton from '../../components/CustomButton.vue';
import GoogleButton from './GoogleButton.vue'
import ErrorMessage from './ErrorMessage.vue'
export default {
  components: {
    CustomButton, GoogleButton, ErrorMessage
  },
    data(){
      return{
        email: '',
        password: '',
        router: useRouter(),
        invalid: false,
      }
    },
    methods: {
    signIn: function () {
      if(!this.email.includes("@") || this.password === "" ){
        this.invalid = true;
        return
      }
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then((data) => {
        
        console.log("Signed in.");
        this.router.push('/');
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

        userExistsInDB().then((exists) => {
          console.log("Exists?", exists);
          if(!exists){
            saveUserData(auth.currentUser.displayName, '');
          }
        this.router.push('/');
      });
        
      }).catch((error) => {
        console.log(error)
        this.invalid = true;
      });
    },
    }
}
</script>