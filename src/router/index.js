import { createRouter, createWebHistory } from 'vue-router'

// Заменяем маршрутизацию на одностраничную
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/MatrixView.vue'),
    meta: { title: 'Developer-Researcher' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Установка заголовка страницы на основе локализации
router.beforeEach((to, from, next) => {
  // TODO: i18n instance is not available here, need a better way to get it.
  // This logic is temporarily simplified to avoid errors.
  const baseTitle = 'CV Generator'
  document.title = to.meta.title ? `${to.meta.title} | ${baseTitle}` : baseTitle
  next()
})

export default router