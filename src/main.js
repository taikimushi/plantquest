import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            url: ''
        }
    },
})

createApp(App).use(router).use(store).mount('#app')