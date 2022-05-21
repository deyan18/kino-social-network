<template>
    <button
          
          class="group relative flex w-44 justify-center rounded-lg border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <HeartIcon
              class="h-5 w-full text-purple-500 group-hover:text-purple-400"
              aria-hidden="true"
            />
          </span>
          Share
        </button>
</template>

<script>
import { HeartIcon } from "@heroicons/vue/solid";
export default {
  components: { HeartIcon},
}
</script>
