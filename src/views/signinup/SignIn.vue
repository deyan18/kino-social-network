<template>
  <div class="min-h-screen bg-gray-100">
  <div class="min-h-full flex  items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-64">
    <div class="max-w-md w-full space-y-8">
      <div>

        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Log In</h2>
       
      </div>
     
        <input type="hidden" name="remember" value="true" />
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

        <div class="flex items-center justify-center">


          <div class="text-sm">
            <router-link :to="{name: 'ForgotPassword'}" class="font-medium text-purple-600 hover:text-purple-500"> Forgot your password? </router-link>
          </div>
        </div>

        <div>
          <button @click="signIn" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LoginIcon class="h-5 w-5 text-purple-500 group-hover:text-purple-400" aria-hidden="true" />
            </span>
            Log In
          </button>
          <button @click="signInWithGoogle" class="mt-3 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LoginIcon class="h-5 w-5 text-red-500 group-hover:text-red-400" aria-hidden="true" />
            </span>
            Google
          </button>
        </div>
         <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ ' ' }}
          <router-link :to="{name: 'SignUp'}" class="font-medium text-purple-600 hover:text-purple-500"> create a new account </router-link>
        </p>
    
    </div>
    
  </div>
  </div>
</template>

<script>
import { LockClosedIcon, LoginIcon } from '@heroicons/vue/solid'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useRouter } from 'vue-router';
import { auth } from '../../firebase.js'
export default {
  components: {
    LockClosedIcon, LoginIcon
  },
    data(){
      return{
        email: '',
        password: '',
        router: useRouter()
      }
    },
    methods: {
    signIn: function () {
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then((data) => {
        console.log("Signed in.");
        this.router.push('/you');
      })
      .catch((error) =>{
        console.log(error.code);
        alert(error.message);
      })
    },
    signInWithGoogle: function () {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((result) => {
        this.router.push('/');
      }).catch((error) => {

      });
    },
    }
}
</script>