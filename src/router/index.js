import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter);  
export const router = new VueRouter({                             
  mode: 'history',                                              
  routes:[                                                      
      //path : url 주소, component : 페이지에 보여질 컴포넌트
      {                                                         
        path: '/DPM-Controller/',
        name: 'Home',
        component: Home
      },
      {
        path: '/DPM-Controller/admin',
        name: 'admin',
        component: Admin
      }
  ]
});
