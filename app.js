import Vue from 'vue';
import Router from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './src//App.vue';
import Authorization from './src/components/auth/Authorization.vue';
import Registration from './src/components/auth/Registration.vue';

const routes = [
    {path: '/', component: Authorization},
    {path: '/registration', component: Registration}
];

Vue.use(VueAxios, axios);
Vue.use(Router);

const router = new Router({ routes: routes});
new Vue(Vue.util.extend({router}, App)).$mount('#app');