<template>
  <div
    class="
      min-h-full
      flex
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
      mb-64
    "
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Reset Password
        </h2>
      </div>
      <div class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            v-model="email"
            required=""
            class="
              appearance-none
              rounded-none
              relative
              block
              w-full
              px-3
              py-2
              border border-gray-300
              placeholder-gray-500
              text-gray-900
              rounded-t-md
              focus:outline-none
              focus:ring-purple-500
              focus:border-purple-500
              focus:z-10
              sm:text-sm
            "
            placeholder="Email address"
          />
        </div>

        <ErrorMessage v-if="invalid">The email is not valid</ErrorMessage>
        <ErrorMessage v-if="sent" class="text-blue-600">A recovery email was sent</ErrorMessage>
        <CustomButton @click="sendRecoveryEmail"
          >Send Recovery Email</CustomButton
        >

        <div class="text-sm flex items-center justify-center">
          <router-link
            :to="{ name: 'SignIn' }"
            class="font-medium text-purple-600 hover:text-purple-500"
          >
            Return to Log In
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../../components/CustomButton.vue";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.js";
import ErrorMessage from "./ErrorMessage.vue";
export default {
  components: {
    CustomButton,
    ErrorMessage,
  },
  data() {
    return {
      email: "",
      invalid: false,
      sent: false,
    };
  },
  methods: {
    sendRecoveryEmail: function () {
      this.sent = false;
      this.invalid = false;
      console.log("email:", this.email)

      if (!this.email.includes("@")) {
        this.invalid = true;
        return;
      }
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          this.sent = true;
        })
        .catch((error) => {
          this.invalid = true;
          console.log(error.code);
          console.log(error.message);
          // ..
        }); 
    },
  },
};
</script>