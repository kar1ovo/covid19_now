import Vue from "vue";
import App from "./App.vue";
import VCharts from "v-charts";
import router from "./router";
import store from "./store";
import './plugins/element.js'

Vue.config.productionTip = false;
Vue.use(VCharts);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
