import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// scss
import '@/style/base/globalStyle.scss'
// json editor
import 'jsoneditor/dist/jsoneditor.min.css'

app.mount('#app')
