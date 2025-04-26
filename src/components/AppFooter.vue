<template>
  <footer class="bg-gray-100 dark:bg-gray-900 py-8 mt-10">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Информация об авторе и проекте -->
        <div class="text-center md:text-left mb-4 md:mb-0">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">{{ $t('footer.madeBy') }}</h3>
          <p class="text-gray-600 dark:text-gray-400 mt-1">
            {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
          </p>
        </div>

        <!-- Ссылки -->
        <div class="flex flex-wrap justify-center md:justify-end gap-4">
          <a 
            v-for="link in links" 
            :key="link.url" 
            :href="link.url" 
            class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {{ $t(link.label) }}
          </a>
        </div>
      </div>

      <!-- Дополнительная информация -->
      <div class="mt-6 text-center text-sm text-gray-500 dark:text-gray-500">
        <p>{{ $t('footer.techStack') }}</p>
        <div class="flex flex-wrap justify-center gap-2 mt-2">
          <span v-for="tech in technologies" :key="tech" class="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-md">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      links: [
        { label: 'footer.sourceCode', url: 'https://github.com/yladzislay/cv-generator' },
        { label: 'footer.contact', url: 'https://linkedin.com/in/' }
      ],
      technologies: [
        'Vue.js', 'Tailwind CSS', 'Vue Router', 'Vue I18n', 'Vite'
      ]
    }
  }
}
</script>

<style scoped>
/* Дополнительные стили для футера при необходимости */
</style> 