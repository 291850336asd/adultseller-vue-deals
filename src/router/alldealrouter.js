import Vue from 'vue';
import Router from 'vue-router';
import alldeal from '../components/view/alldeal.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/alldeal',
      name: 'alldeal',
      component: alldeal
    }
  ]
});
