import { createApp, reactive } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
const prototypeState = reactive({
  darkMode: false,
})
