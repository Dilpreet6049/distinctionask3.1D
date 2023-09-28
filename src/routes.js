import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './components/InterfaceView.vue'
import About from './components/AboutView.vue'
import Contact from './components/ContactView.vue'



const routes=[
    {
      name:'Home',
      path:'/',
      component: Home
    },
    {
        name:'About',
        path:'/About',
        component: About
      },
      {
        name:'Contact',
        path:'/Contact',
        component:Contact
      }
];



const router=createRouter({
    history:createWebHashHistory(),
    routes
});
export default router;