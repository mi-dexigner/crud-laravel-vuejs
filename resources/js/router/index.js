import {createRouter, createWebHistory} from 'vue-router'
import productIndex from '../components/products/index.vue'
import productNew from '../components/products/new.vue'
import notfound from '../components/notfound.vue'


const routes = [
{path:'/',component:productIndex},
{path:'/product/new',component:productNew},
{path:'/:pathMatch(.*)*',component:notfound},
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
});



export default router;