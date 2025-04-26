import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import messages from './i18n'
import './assets/css/tailwind.css'

// Создаем экземпляр i18n
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'ru',
  fallbackLocale: 'ru',
  messages
})

// Создаем и монтируем приложение
const app = createApp(App)

// Подключение плагинов
app.use(createPinia())
app.use(router)
app.use(i18n)

// Монтирование приложения
app.mount('#app') 