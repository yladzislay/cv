<template>
  <header class="bg-white dark:bg-gray-900 shadow-md py-4 sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <!-- Логотип/Имя -->
        <router-link 
          to="/" 
          class="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          {{ $t('header.name') }}
        </router-link>

        <!-- Основная навигация -->
        <nav class="hidden md:flex items-center space-x-6">
          <router-link 
            v-for="item in navItems" 
            :key="item.route" 
            :to="item.route"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {{ $t(item.label) }}
          </router-link>
        </nav>

        <!-- Социальные сети, язык и тема -->
        <div class="flex items-center space-x-4">
          <!-- Социальные сети -->
          <a href="https://github.com/yladzislay" target="_blank" rel="noopener noreferrer" 
            class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" 
            class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <!-- Переключатели языка и темы -->
          <LanguageToggle />
          <ThemeToggle />

          <!-- Мобильное меню (кнопка) -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            aria-label="Меню"
          >
            <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Мобильная навигация -->
      <div v-if="mobileMenuOpen" class="md:hidden pt-4 pb-2">
        <router-link 
          v-for="item in navItems" 
          :key="item.route" 
          :to="item.route"
          class="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          @click="mobileMenuOpen = false"
        >
          {{ $t(item.label) }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import ThemeToggle from './ThemeToggle.vue'
import LanguageToggle from './LanguageToggle.vue'

export default {
  name: 'AppHeader',
  components: {
    ThemeToggle,
    LanguageToggle
  },
  data() {
    return {
      mobileMenuOpen: false,
      navItems: [
        { route: '/', label: 'nav.home' },
        { route: '/experience', label: 'nav.experience' },
        { route: '/skills', label: 'nav.skills' },
        { route: '/projects', label: 'nav.projects' },
        { route: '/research', label: 'nav.research' }
      ]
    }
  }
}
</script>

<style scoped>
.router-link-active {
  color: var(--primary-color);
  font-weight: 600;
}
</style> 