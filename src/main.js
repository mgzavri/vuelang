import Vue from 'vue'
import App from './App.vue'
import VueLang from './plugins/vue-lang/VueLang';

Vue.use(VueLang)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
