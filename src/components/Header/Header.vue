<template>

<div class="pb-10 bg-gray-100">
    <div class="bg-white shadow-lg">
    <nav
      class="
        container
        md:px-0
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
          ><img src="../../assets/logoLight.png" alt="" class="object-scale-down h-16 w-15">
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
       <router-link :to="{name: 'Home'}"><HeaderLink>Home</HeaderLink></router-link>
       <router-link :to="{name: 'Movies'}"><HeaderLink>Movies</HeaderLink></router-link>
       <router-link :to="{name: 'TVShows'}"><HeaderLink>TV Shows</HeaderLink></router-link>
       <router-link :to="{name: 'WatchList'}"><HeaderLink>Watch List</HeaderLink></router-link>
       <router-link :to="{name: 'You'}"><HeaderLink>Profile</HeaderLink></router-link>

      

      </ul>
    </nav>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import HeaderLink from './HeaderLink.vue';
export default {
  components: { HeaderLink },
   setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>