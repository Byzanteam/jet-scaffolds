import { createPinia } from 'pinia'
import { createApp } from 'vue'

import './app.css'

const App = createApp({
  name: 'RootApp',
  // onShow(_options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())

export default App
