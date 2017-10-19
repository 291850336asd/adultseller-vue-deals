// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import AllDeals from './AllDeals.vue';
import router from './router/alldealrouter.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#alldeals',
  router,
  template: '<AllDeals/>',
  components: { AllDeals }
});
router.push('/alldeal');

function callBackAndroid (params) {
    alert('sddsd');
};
export { callBackAndroid };
