
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
 window.jQuery = require('jquery');
 window.$ = window.jQuery;

import _ from 'lodash';
import routes from './routes';

const Vue = require('vue');
import VueRouter from 'vue-router';
import Vuex from 'vuex';
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({ routes, mode:'history' });

function setTitle(to) {
  let parm;
  $.each(to.params, (key, val) => { parm = val; return false; });
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .filter(r => r.meta && (r.meta.title || (r.meta.title && r.meta.title[parm])))[0];
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title[parm]
      || $.isPlainObject(nearestWithTitle.meta.title)
      ? nearestWithTitle.meta.title[parm]
      : nearestWithTitle.meta.title;
  }
}

router.beforeEach( (to, from, next) => {
  setTitle(to, from);
  next();
});

const app = new Vue({
    el: '#app',
    router,
});
