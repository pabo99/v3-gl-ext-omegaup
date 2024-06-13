import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Import dark mode CSS
import './assets/dark-mode.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
