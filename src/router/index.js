import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/view/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'hello',
      component: HelloWorld
    }
  ]
});
