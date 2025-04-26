<template>
  <section class="min-h-screen flex flex-col items-center justify-center py-12 px-4">
    <div class="container mx-auto relative">
      <!-- Фоновые декоративные элементы -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <!-- Основной контент -->
      <div class="relative z-10 text-center">
        <div class="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-4 transform hover:scale-105 transition-transform">
          {{ $t('hero.badge') }}
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
          {{ $t('hero.title') }}
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
          {{ $t('hero.description') }}
        </p>
        
        <!-- Ключевые характеристики -->
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <div v-for="(trait, index) in traits" :key="index"
            class="px-3 py-2 bg-blue-50 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-lg flex items-center shadow-sm trait-badge"
            :style="{ '--animation-order': index }">
            <component :is="trait.icon" class="h-5 w-5 mr-2" />
            <span>{{ $t(trait.label) }}</span>
          </div>
        </div>
        
        <div class="space-x-4">
          <a href="#" 
            class="button-like px-6 py-3 bg-blue-600 text-white rounded inline-block shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-400/20"
            @click="downloadResume">
            {{ $t('hero.download') }}
          </a>
          <a href="mailto:your.email@example.com" 
            class="button-like px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-50 dark:hover:bg-gray-700 inline-block">
            {{ $t('hero.contact') }}
          </a>
        </div>
      </div>
      
      <!-- Индикатор прокрутки -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400 dark:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import { BeakerIcon, CodeBracketIcon, RocketLaunchIcon, AcademicCapIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'HomeSection',
  components: {
    BeakerIcon,
    CodeBracketIcon,
    RocketLaunchIcon,
    AcademicCapIcon
  },
  data() {
    return {
      traits: [
        { label: 'hero.trait-1', icon: 'CodeBracketIcon' },
        { label: 'hero.trait-2', icon: 'BeakerIcon' },
        { label: 'hero.trait-3', icon: 'RocketLaunchIcon' },
        { label: 'hero.trait-4', icon: 'AcademicCapIcon' }
      ]
    }
  },
  methods: {
    downloadResume() {
      // TODO: Реализовать загрузку PDF
      console.log('Downloading resume...')
    }
  }
}
</script>

<style scoped>
.trait-badge {
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: calc(var(--animation-order) * 0.2s);
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.button-like {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button-like:hover {
  transform: scale(1.05);
}
</style> 