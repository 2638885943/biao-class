import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Home from './page/Home.vue'
import Detail from './page/Detail.vue'
import Search from './page/Search.vue'

import Admin from './page/admin/Admin.vue'
import Category from './page/admin/Category.vue'
import Breed from './page/admin/Breed.vue'
import Order from './page/admin/Order.vue'
import Pet from './page/admin/Pet.vue'
import User from './page/admin/User.vue'
import NewOrder from './page/admin/NewOrder.vue'
import Payment from './page/admin/Payment.vue'
import Color from './page/admin/Color.vue'
import Character from './page/admin/Character.vue'









Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/detail',
      component: Detail
    }, {
      path: '/search',
      component: Search
    },
    {
      path: '/admin', component: Admin,
      children: [
        {
          path: 'category',
          component: Category,
        },
        {
          path: 'breed',
          component: Breed,
        },
        {
          path: 'order',
          component: Order,
        },
        {
          path: 'pet',
          component: Pet,
        },
        {
          path: 'user',
          component: User,
        },
        {
          path: 'neworder',
          component: NewOrder
        },
        {
          path: 'payment',
          component: Payment
        },
        {
          path: 'color',
          component: Color
        },
        {
          path: 'character',
          component: Character
        },
      ]
    },
  ]
})



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,

}).$mount('#app')
