import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import EditProfile from '/src/views/Profile/EditProfile.vue'
import UserProfile from '/src/views/Profile/UserProfile.vue'
import Detail from '/src/views/Detail/Detail.vue'
import SignIn from '/src/views/SignInUp/SignIn.vue'
import SignUp from '/src/views/SignInUp/SignUp.vue'
import Profile from '/src/views/Profile/Profile.vue'
import ForgotPassword from '/src/views/signinup/ForgotPassword.vue'
import Movies from '/src/views/Movies.vue'
import TVShows from '/src/views/TVShows.vue'
import WatchList from '/src/views/WatchList/WatchList.vue'
import Landing from '/src/views/Landing.vue'
import { onAuthStateChanged} from '@firebase/auth'
import { auth } from '../firebase.js'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true,
        }
    }
    ,
    {
        path: '/about',
        name: 'About',
        component: About
    }
    ,
    {
        path: '/profile',
        name: 'You',
        component: Profile,
        meta: {
            requiresAuth: true,
        }
    }
    ,
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail,
        props: true,
        meta: {
            requiresAuth: true,
        }
    }
    ,
    {
        path: '/user/:id',
        name: 'UserProfile',
        component: UserProfile,
        props: true,
        meta: {
            requiresAuth: true,
        }
    }
    ,
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn,
        meta: {
            requiresLoggedOut: true,
        }
    }
    ,
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
        meta: {
            requiresLoggedOut: true,
        }
    }
    ,
    {
        path: '/recoverpassword',
        name: 'ForgotPassword',
        component: ForgotPassword
    }
    ,
    {
        path: '/editprofile',
        name: 'EditProfile',
        component: EditProfile,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/watchlist',
        name: 'WatchList',
        component: WatchList,
        meta: {
            requiresAuth: true,
        }
    }
    ,
    {
        path: '/movies',
        name: 'Movies',
        component: Movies,
        meta: {
            requiresAuth: true,
        }
    }
    ,
    {
        path: '/tvshows',
        name: 'TVShows',
        component: TVShows,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/welcome',
        name: 'Landing',
        component: Landing
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

 const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            auth,
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        )
    });
}

router.beforeEach(async (to, from, next) =>{
    if(to.matched.some((record) => record.meta.requiresAuth)){
        if(await getCurrentUser()){
            next();
        }else{
            next('/welcome');  
        }
    } else if(to.matched.some((record) => record.meta.requiresLoggedOut)){
        if(await getCurrentUser()){
            next('/profile');  
        }else{
            next();  
        }

    }else{
      next();
    }
}); 

export default router