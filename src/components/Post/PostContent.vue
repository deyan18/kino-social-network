<template>
     <!-- Foto -->
          <router-link
            class="
            flex flex-grow
              justify-center
              text-center
              items-center
              place-content-center
              my-3
            "
            :to="{ name: 'Detail', params: { id } }"
          >
            <img
              class="h-72 cursor-pointer  rounded-lg"
              :src="data.img"
              alt="post image"
            />
          </router-link>


          <!-- Contenido -->
          <div class="flex">
            <router-link
              :to="{ name: 'Detail', params: { id } }"
              class="
                w-full
                cursor-pointer
                text-lg
                font-semibold
                text-gray-600
                hover:text-purple-500
              "
            >
              {{ data.title }}
            </router-link>
            <StarMeter :stars="data.stars"></StarMeter>
          </div>

          <div class="text-sm font-thin my-2 pb-2 text-gray-900">
            {{ data.text }}
          </div>
</template>

<script>
import StarMeter from "../StarMeter/StarMeter.vue";
export default {
    
  props: ["data"],
  components: { StarMeter},
  data() {
    return {
        id: this.data.id,
    };
  },

};

</script>