import Vue from "vue";
import App from "./App.vue";
import router from "@/routes/index";
import "@/assets/css/main.less";

Vue.config.productionTip = false;



new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
