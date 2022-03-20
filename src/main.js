import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify"; // path to vuetify export
import router from "./router";
import UUID from "vue-uuid";

Vue.use(UUID);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
