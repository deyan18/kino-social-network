<template>
 <Header></Header>
 <div class="min-h-screen bg-gray-100">
  <router-view />
  </div>
<Footer></Footer>
</template>


<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer.vue'
import { getAuth, onAuthStateChanged} from '@firebase/auth'

  export default {
    props: [],
    components: {
      Header,
      Footer,
    },
    data(){
      return{
        showShare: false,
        isLoggedIn: false
      }
    },
    mounted(){
      onAuthStateChanged(getAuth(), (user) =>{
        if(user){
          this.isLoggedIn = true;
        } else{
          this.isLoggedIn = false;
        }
      })
    }
  }
</script>