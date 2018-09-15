// import 'iview/dist/styles/iview.css';
import './main.css'

import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import iView from 'iview';


import Home from './page/Home'
import Login from './page/Login'
import Setting from './page/Setting'
import Signup from './page/Signup'
import Profile from './page/Profile'


Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Router)
Vue.use(iView)

const router = new Router({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/setting',
            component: Setting
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/signup',
            component: Signup
        },
    ]
})

const store = new Vuex.Store({




})

new Vue({
    router,
    render: h => h(App),

    store,
}).$mount('#app')