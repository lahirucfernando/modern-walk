

import { createRouter, createWebHistory } from 'vue-router/auto'
import Layout from "@/pages/layout"; 
import Home from "@/pages/home"; 
import Clothing from "@/pages/clothing"; 

const routes = [
  {
    path: "/", 
    redirect: "/home", 
  },
  {
    path: "/",
    component: Layout, 
    children: [
      {
        path: "home",
        component: Home,
      },
      {
        path: "mens-clothing",
        component: Clothing,
        props: { isMensClothing: true }
      },
      {
        path: "womans-clothing",
        component: Clothing,
        props: { isMensClothing: false }
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/home", 
  },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
