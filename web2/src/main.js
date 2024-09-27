import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import convert from './components/Converter.vue';
import watchCard from './components/WatchCard.vue';
import SmallCard from "./components/SmallCard.vue";

const app = createApp(App)
const pinia = createPinia();
app.use(pinia);
app.use(router)
app.component("watchCard",watchCard)
app.component("SmallCard",SmallCard);
app.component("converter", convert);
app.mount('#app')
