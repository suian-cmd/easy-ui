import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {router} from "./router";
import './assets/svg.js'
import 'github-markdown-css'
import Markdown from "./components/Markdown.vue"


const app = createApp(App)
app.component('Markdown', Markdown)
app.use(router)
app.mount('#app')


