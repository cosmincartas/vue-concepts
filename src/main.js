import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.config.globalProperties.alert = function (message) {
    window.alert(message);
};
app.mount('#app');