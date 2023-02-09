import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
// @if i18n
import locale from './locale'
// @endif
// @if router
import router from './router'
// @endif

const app = createApp(App)

// @if i18n
app.use(locale)
// @endif
// @if router
app.use(router)
// @endif
app.mount('#app')
