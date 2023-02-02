import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
// @if router
import router from './router'
// @endif

// @if router
createApp(App).use(router).mount('#app')
// @endif
// @if !router
createApp(App).mount('#app')
// @endif
