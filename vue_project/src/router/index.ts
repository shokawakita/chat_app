import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/friend',
      name: 'friend',
      component: () => import('../views/FriendView.vue')
    },
    {
      path: '/talk',
      name: 'talk',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TalkView.vue')
    },
    {
      path: '/add_friend',
      name: 'add_friend',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddFriendView.vue')
    },
    {
      path: '/option',
      name: 'option',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OptionView.vue')
    }
  ]
})

//  以下のようにすれば複数のルーティングが作れそう
// const router_2 = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/friend',
//       name: 'friend',
//       component: () => import('../views/FriendView.vue')
//     },
//     {
//       path: '/talk',
//       name: 'talk',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/TalkView.vue')
//     },
//     {
//       path: '/add_friend',
//       name: 'add_friend',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AddFriendView.vue')
//     },
//     {
//       path: '/option',
//       name: 'option',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/OptionView.vue')
//     }
//   ]
// })

export default router
// export default {router, router_2}
// export default
