import { createRouter, createWebHistory } from 'vue-router'
import HomeSection from '../components/sections/HomeSection.vue'
import ExperienceSection from '../components/sections/ExperienceSection.vue'
import EducationSection from '../components/sections/EducationSection.vue'
import SkillsSection from '../components/sections/SkillsSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import ResearchSection from '../components/sections/ResearchSection.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeSection,
    meta: { title: 'Главная' }
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceSection,
    meta: { title: 'Опыт работы' }
  },
  {
    path: '/education',
    name: 'education',
    component: EducationSection,
    meta: { title: 'Образование' }
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsSection,
    meta: { title: 'Навыки' }
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsSection,
    meta: { title: 'Проекты' }
  },
  {
    path: '/research',
    name: 'research',
    component: ResearchSection,
    meta: { title: 'Исследования' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactSection,
    meta: { title: 'Контакты' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Установка заголовка страницы на основе локализации
router.beforeEach((to, from, next) => {
  const i18n = router.app?.config?.globalProperties?.$i18n
  const locale = i18n?.locale?.value || 'ru'
  
  // Формируем заголовок в зависимости от языка и маршрута
  let title = to.meta.title
  if (i18n && locale === 'en') {
    // Примитивное преобразование заголовков для английского языка
    const titles = {
      'Главная': 'Home',
      'Опыт работы': 'Experience',
      'Образование': 'Education',
      'Навыки': 'Skills',
      'Проекты': 'Projects',
      'Исследования': 'Research',
      'Контакты': 'Contact'
    }
    title = titles[to.meta.title] || to.meta.title
  }
  
  document.title = `${title} | CV Generator`
  next()
})

export default router 