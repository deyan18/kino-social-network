<template>

<div class="pb-10 bg-gray-100">
    <div class="bg-white shadow-lg">
    <nav
      class="
        container
        sm:px-0
        px-6
        py-4
        mx-auto
        md:flex md:justify-between md:items-center
        
      "
    >
      <div class="flex items-center justify-between">
        <router-link
          :to="{name: 'Home'}"
          class="
            text-xl
            font-bold
            text-gray-100
            md:text-2xl
          "
          ><img src="../assets/logoLight.png" alt="" class="object-scale-down h-16 w-15">
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-900
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="

          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-5 md:mt-0
        "
      >
      <router-link :to="{name: 'Home'}" class="px-4 py-2 bg-gray-200 hover:bg-purple-600 hover:text-white transition rounded-lg ease-in duration-200 font-semibold hover:shadow-lg">Home</router-link>
      <router-link :to="{name: 'Movies'}" class="px-4 py-2 bg-gray-200 hover:bg-purple-600 hover:text-white transition rounded-lg ease-in duration-200 font-semibold hover:shadow-lg">Movies</router-link>
      <router-link :to="{name: 'TVShows'}" class="px-4 py-2 bg-gray-200 hover:bg-purple-600 hover:text-white transition rounded-lg ease-in duration-200 font-semibold hover:shadow-lg">TV Shows</router-link>
      <router-link :to="{name: 'WatchList'}" class="px-4 py-2 bg-gray-200 hover:bg-purple-600 hover:text-white transition rounded-lg ease-in duration-200 font-semibold hover:shadow-lg">Watch List</router-link>
      <router-link :to="{name: 'You'}" class="px-4 py-2 bg-gray-200 hover:bg-purple-600 hover:text-white transition rounded-lg ease-in duration-200 font-semibold hover:shadow-lg">
       Profile
      
      </router-link>

      </ul>
    </nav>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
   setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>