import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter);  

export const router = new VueRouter({                             
  mode: 'history',
  base: process.env.BASE_URL,                                             
  routes:[                                                      
      //path : url 주소, component : 페이지에 보여질 컴포넌트
      {                                                         
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/admin',
        name: 'admin',
        component: Admin
      }
  ]
});
