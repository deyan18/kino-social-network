<template>
  <div class="min-h-screen bg-gray-100">
  <div class="min-h-full flex  items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-64">
    <div class="max-w-md w-full space-y-8">
      <div>

        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset Password</h2>
       
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>

        </div>

        <div class="flex items-center justify-center">


 
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <InboxIcon class="h-5 w-5 text-purple-500 group-hover:text-purple-400" aria-hidden="true" />
            </span>
            Send Recovery Email
          </button>
        </div>
      </form>
    </div>
    
  </div>
  </div>
</template>

<script>
import { InboxIcon } from '@heroicons/vue/solid'

export default {
  components: {
    InboxIcon,
  },
}
</script>