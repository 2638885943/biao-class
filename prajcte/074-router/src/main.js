import './main.css';

import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';

import Home from './page/Home';
import Login from './page/Login';
import Sigup from './page/Sigup';
import Detail from './page/Detail';
import Search from './page/Search';



import AdminBase from './page/admin/Base';
import User from './page/admin/User';
import Vehicle from './page/admin/Vehicle';
import Model from './page/admin/Model';
import Brand from './page/admin/Brand';
import Design from './page/admin/Design';
import Report from './page/admin/Report';









Vue.use(Router);

Vue.config.productionTip = false

// 过滤器 
Vue.filter('percentage', function (value) {
  if (!value)
    return 0;
  return (value * 100).toFixed(2) + '%';
});



const router = new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/sigup', component: Sigup },
    { path: '/detail:id', component: Detail },
    { path: '/search', component: Search },
     
    


    {
      path: '/admin',
      component: AdminBase,
      children: [
        {
          path: 'user',
          component: User,
        },
        {
          path: 'vehicle',
          component: Vehicle,
        },
        {
          path: 'model',
          component: Model,
        },
        {
          path: 'brand',
          component: Brand,
        },
        {
          path: 'design',
          component: Design,
        },
        {
          path: 'report',
          component: Report,
        },
      ],
    },
  ],
});






new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
