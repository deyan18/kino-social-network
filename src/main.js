import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

/* import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVOORBzibfTf15HOnjBMxyd-G3GBhmmbA",
  authDomain: "watching-b9991.firebaseapp.com",
  projectId: "watching-b9991",
  storageBucket: "watching-b9991.appspot.com",
  messagingSenderId: "705832512871",
  appId: "1:705832512871:web:6e7b4fa589db0d12b813c2"
};

const fb =  initializeApp(firebaseConfig);
 */
createApp(App).use(router).mount('#app')