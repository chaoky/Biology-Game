import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import boardStore from "./store";

Vue.use(Vuex);

Vue.config.productionTip = false;

let store = new Vuex.Store(boardStore);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
