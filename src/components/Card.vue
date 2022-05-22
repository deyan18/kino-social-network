<template>
<div class="flex flex-col items-center justify-center m-6 max-w-sm  w-64">
    <div class="mx-auto overflow-hidden bg-white rounded-2xl shadow-xl dark:bg-gray-800">
         <img v-if="id==-1" class="object-cover w-64 " :src="image" alt="poster">
         <router-link v-if="id !=-1" :to="{name: 'Detail', params: { id }}"><img class="object-cover w-64 " :src="image" alt="poster"></router-link>
        
        <div class="py-5 text-center">
            <div v-if="id == -1" class="block text-xl font-bold text-gray-800 dark:text-white">{{title}}</div>
            <router-link v-if="id !=-1" :to="{name: 'Detail', params: { id }}" class="block text-xl font-bold text-gray-800 dark:text-white">{{title}}</router-link>
            <span class="text-sm text-gray-700 dark:text-gray-200 ">{{type}}</span>
        </div>
    </div>
    </div>
   
</template>

<script>
export default {
  props: ['title', 'image', 'type', 'id'],
}
</script>
