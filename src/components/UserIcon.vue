<template>

              <img
                class=" rounded-full object-cover shadow  bg-purple-100"
                :src="userImg"
              />
           
</template>

<script>

  export default {
    props: ['userImg'],
  }
 </script>