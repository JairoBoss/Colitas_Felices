import { createRouter, createWebHistory } from 'vue-router'
import Inicio from "../components/Inicio.vue"
import Adopcion from "../components/Adopcion.vue"
import AdopcionItem from "../components/AdopcionItem.vue"


const publicRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio,
    },
    {
      path: '/adopcion',
      name: 'adopcion',
      component: Adopcion
    },
    {
      path: '/adopcion:id',
      name: 'adopcionDetalle',
      component: AdopcionItem
    },
    {
      path: '/tienda',
      name: 'tienda',
      component: () => import("../components/Tienda.vue")
    }

  ]
})

export default publicRouter
