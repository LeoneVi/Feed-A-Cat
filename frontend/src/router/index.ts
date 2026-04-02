import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
      name: "signup",
      path: "/signup",
      component: () => import("../views/Signup.vue"),
    },
    {
      name: "login",
      path: "/login",
      component: () => import("../views/Login.vue")
    },
    {
      name: "home",
      path: "/home",
      component: () => import("../views/Home.vue")
    },
  ]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
