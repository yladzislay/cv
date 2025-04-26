<template>
  <nav class="bg-white dark:bg-gray-900 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo and Brand -->
        <div class="flex items-center">
          <a href="/" class="flex items-center">
            <img 
              :src="$t('navigation.logo')" 
              alt="Logo"
              class="h-8 w-auto"
            />
            <span class="ml-2 text-xl font-bold text-primary">
              {{ $t('navigation.brand') }}
            </span>
          </a>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:space-x-8">
          <a 
            v-for="(item, index) in navigationItems"
            :key="index"
            :href="item.url"
            class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            :class="{ 'text-primary': isActive(item.url) }"
          >
            {{ item.name }}
          </a>
          
          <div class="flex items-center space-x-4">
            <!-- Theme Toggle -->
            <button
              @click="toggleTheme"
              class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg 
                v-if="isDark"
                class="w-5 h-5 text-gray-600 dark:text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg 
                v-else
                class="w-5 h-5 text-gray-600 dark:text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            
            <!-- Language Selector -->
            <select
              v-model="currentLocale"
              class="text-sm text-gray-600 dark:text-gray-400 bg-transparent border-none focus:ring-0"
            >
              <option 
                v-for="locale in availableLocales"
                :key="locale.code"
                :value="locale.code"
              >
                {{ locale.name }}
              </option>
            </select>
            
            <!-- Download CV Button -->
            <a 
              :href="$t('navigation.cvLink')"
              download
              class="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
            >
              {{ $t('navigation.downloadCV') }}
            </a>
          </div>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary focus:outline-none"
          >
            <svg 
              v-if="!isMenuOpen"
              class="h-6 w-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              v-else
              class="h-6 w-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div 
      v-if="isMenuOpen"
      class="md:hidden"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a 
          v-for="(item, index) in navigationItems"
          :key="index"
          :href="item.url"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :class="{ 'text-primary bg-gray-100 dark:bg-gray-800': isActive(item.url) }"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </a>
        
        <div class="px-3 py-2 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <!-- Theme Toggle -->
              <button
                @click="toggleTheme"
                class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <svg 
                  v-if="isDark"
                  class="w-5 h-5 text-gray-600 dark:text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg 
                  v-else
                  class="w-5 h-5 text-gray-600 dark:text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
              
              <!-- Language Selector -->
              <select
                v-model="currentLocale"
                class="text-sm text-gray-600 dark:text-gray-400 bg-transparent border-none focus:ring-0"
              >
                <option 
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  :value="locale.code"
                >
                  {{ locale.name }}
                </option>
              </select>
            </div>
            
            <!-- Download CV Button -->
            <a 
              :href="$t('navigation.cvLink')"
              download
              class="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
            >
              {{ $t('navigation.downloadCV') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'

export default {
  name: 'NavigationSection',
  setup() {
    const { t, locale, availableLocales } = useI18n()
    const { isDark, toggleTheme } = useTheme()
    
    const isMenuOpen = ref(false)
    const currentSection = ref('')
    
    const currentLocale = computed({
      get: () => locale.value,
      set: (value) => {
        locale.value = value
      }
    })
    
    const navigationItems = computed(() => {
      return t('navigation.items', {}, { plural: true })
    })
    
    const isActive = (url) => {
      return url === currentSection.value
    }
    
    // Update current section based on scroll position
    const updateCurrentSection = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.pageYOffset
      
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 100
        const sectionId = section.getAttribute('id')
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          currentSection.value = `#${sectionId}`
        }
      })
    }
    
    // Close mobile menu when window is resized to desktop view
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen.value) {
        isMenuOpen.value = false
      }
    }
    
    onMounted(() => {
      window.addEventListener('scroll', updateCurrentSection)
      window.addEventListener('resize', handleResize)
      updateCurrentSection()
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', updateCurrentSection)
      window.removeEventListener('resize', handleResize)
    })
    
    return {
      isMenuOpen,
      currentLocale,
      availableLocales,
      isDark,
      toggleTheme,
      navigationItems,
      isActive
    }
  }
}
</script> 