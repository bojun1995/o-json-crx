import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// scss
import '@/style/base/globalStyle.scss'
import '@/style/business/oComp.scss'
// fonts
import '@/assets/fonts/install.css'
// json editor
import 'jsoneditor/dist/jsoneditor.min.css'
// icon
import 'remixicon/fonts/remixicon.css'
// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// pinia
import { createPinia } from 'pinia'
// o-comp
import OCompInstall from '@/install/base/oComp.js'
OCompInstall(app)

app.use(createPinia())

app.mount('#app')
