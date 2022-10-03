import Vue from 'vue';
import Router from 'vue-router';
import store from '../vuex/store.js'

import { SiteName, TitleSeparator, RouterMode } from '@Config';

import Home from '@View/Home.vue';

import PrivacyPolicy from '@View/PrivacyPolicy.vue';
import Refunds from '@View/Refunds.vue';
import Terms from '@View/Terms.vue';

Vue.use(Router);

const router = new Router({
  mode: RouterMode,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/privacy-policy',
      component: PrivacyPolicy,
    },
    {
      path: '/refunds',
      component: Refunds,
    },
    {
      path: '/terms',
      component: Terms,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  // document.title = to.meta.title + TitleSeparator + SiteName;
  next();
});

export default router;
