import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from 'vee-validate';
import "./registerServiceWorker";
import i18n from './i18n'


// setup vee-validator on spanish
const VueValidationEs = require('vee-validate/dist/locale/es');
Vue.use(VeeValidate, {
  locale: 'es',
  dictionary: {
    es: VueValidationEs
  }
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
    i18n,
  render: h => h(App)
}).$mount("#app");
