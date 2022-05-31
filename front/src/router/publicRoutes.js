import { createRouter, createWebHistory } from 'vue-router'
import Inicio from "../components/Inicio.vue"
import Adopcion from "../components/Adopcion.vue"
import AdopcionItem from "../components/AdopcionItem.vue"
import TiendaDetalle from "../components/TiendaDetalle.vue"
import BlogDetalle from "../components/BlogDetalle.vue"
import AgregarAdopcion from "../components/dashboard/AgregarAdopcion.vue"

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
    },
    {
      path: '/tiendaDetalle:id',
      name: 'tiendaDetalle',
      component: TiendaDetalle
    },{
      path: '/blogDetalle:id',
      name: 'blogDetalle',
      component: BlogDetalle
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import("../components/Blog.vue")
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import("../components/Contacto.vue")
    },
    {
      path: '/adopcionDash',
      name: 'adopcionDash',
      component: () => import("../components/dashboard/Adopcion.vue")
    },
    {
      path: '/blogDash',
      name: 'blogDash',
      component: () => import("../components/dashboard/Blog.vue")
    },
    {
      path: '/donacionDash',
      name: 'donacionDash',
      component: () => import("../components/dashboard/Donaciones.vue")
    },
    {
      path: '/mascotaDash',
      name: 'mascotaDash',
      component: () => import("../components/dashboard/Mascotas.vue")
    },
    {
      path: '/productoDash',
      name: 'productoDash',
      component: () => import("../components/dashboard/Productos.vue")
    },
    {
      path: '/agregarAdopcion',
      name: 'agregarAdopcion',
      component: AgregarAdopcion
    }
    

  ]
})

export default publicRouter
