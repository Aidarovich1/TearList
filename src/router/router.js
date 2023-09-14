import Main from '@/pages/Main.vue';
import  {createRouter, createWebHistory} from 'vue-router';
import UserPage from '@/pages/UserPage'
import About from '@/pages/About'
import PostIdPage from'@/pages/PostIdPage'
import PostPageWitchStore from '@/pages/PostPageWitchStore.vue'
import PostPageCompositionApi from '@/pages/PostPageCompositionApi.vue'

const routes = [
   {
      path: '/',
      component: Main
   },
   {
      path: '/posts',
      component: UserPage
   },
   {
      path: '/about',
      component: About
   },
   {
      path: '/posts/:id',
      component: PostIdPage
   },
   {
      path: '/store',
      component: PostPageWitchStore
   },
   {
      path: '/composition',
      component: PostPageCompositionApi
   },

]

const router = createRouter({
      routes,
      history:createWebHistory(process.env.BASE_URL)
})

export default router;
