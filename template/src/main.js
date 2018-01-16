{{#if vue}}
import vue from 'vue';
import store from './store';
import App from './views/App.vue';

new Vue(Vue.util.extend({
  store,
  router,
}, App)).$mount('#app');
{{else}}
const mxy = {};

!function (name, defination) {
  const hasDefine = typeof window.define == 'function';
  const hasExports = typeof module !== 'undefined' && module.exports;
  if (hasDefine) {
    window.define(name, [], () => defination);
  } else if (hasExports) {
    module.exports = defination;
  } else {
    window.name = defination;
  }
}('mxy', mxy);
{{/if}}
