<template>
<footer class="text-gray-600 body-font shadow-2xl ">
  <div class="bg-white-100">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <router-link :to="{name: 'Home'}"><img src="../assets/logoLight.png" alt="" class="object-scale-down h-10 w-13"></router-link>
      </a>
      <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2022 KINO —
        <span rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">Deyan Rosenov Stanchev</span>
      </p>

    </div>
  </div>
</footer>
</template>