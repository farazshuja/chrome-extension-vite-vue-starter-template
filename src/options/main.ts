import { createApp } from 'vue';
import 'virtual:windi.css';
import App from './Options.vue';
import '@/assets/main.css';

const app = createApp(App);
app.mount('#app');
