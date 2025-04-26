<template>
  <section class="py-12">
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-center">
        {{ $t('research.title') }}
      </h1>

      <!-- Области интересов -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          {{ $t('research.interests') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="(area, index) in researchAreas" 
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full mr-3">
                <component :is="area.icon" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 class="text-xl font-medium">{{ area.title }}</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300">{{ area.description }}</p>
          </div>
        </div>
      </div>

      <!-- Публикации -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          {{ $t('research.publications') }}
        </h2>
        <div class="space-y-6">
          <div 
            v-for="(publication, index) in publications" 
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <h3 class="text-xl font-medium mb-2">{{ publication.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-3">
              <span class="font-medium">{{ publication.authors }}</span> • {{ publication.year }}
            </p>
            <p class="text-gray-700 dark:text-gray-300 mb-4">{{ publication.abstract }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="(tag, tagIndex) in publication.tags" 
                :key="tagIndex"
                class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm"
              >
                {{ tag }}
              </span>
            </div>
            <a 
              v-if="publication.url" 
              :href="publication.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              {{ $t('research.readMore') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Конференции -->
      <div>
        <h2 class="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          {{ $t('research.conferences') }}
        </h2>
        <div class="space-y-4">
          <div 
            v-for="(conference, index) in conferences" 
            :key="index"
            class="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <div class="md:w-32 w-full bg-blue-600 dark:bg-blue-800 text-white p-4 flex flex-col justify-center items-center">
              <span class="text-2xl font-bold">{{ conference.month }}</span>
              <span class="text-lg">{{ conference.year }}</span>
            </div>
            <div class="p-6 flex-1">
              <h3 class="text-xl font-medium mb-2">{{ conference.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-3">{{ conference.location }}</p>
              <p class="text-gray-700 dark:text-gray-300">{{ conference.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResearchSection',
  data() {
    return {
      researchAreas: [
        {
          title: 'Искусственный интеллект',
          description: 'Исследование методов машинного обучения и нейронных сетей для решения сложных задач',
          icon: {
            template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>`
          }
        },
        {
          title: 'Распределенные системы',
          description: 'Разработка и оптимизация архитектур для высоконагруженных и распределенных приложений',
          icon: {
            template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>`
          }
        },
        {
          title: 'Безопасность данных',
          description: 'Исследование методов защиты данных и обеспечения конфиденциальности в современных системах',
          icon: {
            template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>`
          }
        }
      ],
      publications: [
        {
          title: 'Оптимизация алгоритмов машинного обучения для задач обработки естественного языка',
          authors: 'Владислав Д., Иванов И.И.',
          year: '2024',
          abstract: 'В данной работе представлены методы оптимизации алгоритмов машинного обучения для решения задач обработки естественного языка с фокусом на понимание контекста и семантики.',
          tags: ['NLP', 'Machine Learning', 'Optimization'],
          url: '#'
        },
        {
          title: 'Архитектура микросервисов: преимущества и недостатки в высоконагруженных системах',
          authors: 'Владислав Д., Петров П.П.',
          year: '2023',
          abstract: 'Исследование посвящено анализу архитектурных паттернов микросервисов и их применению в высоконагруженных системах с оценкой производительности и масштабируемости.',
          tags: ['Microservices', 'Architecture', 'High-Load'],
          url: '#'
        }
      ],
      conferences: [
        {
          title: 'International Conference on Machine Learning',
          month: 'Июль',
          year: '2024',
          location: 'Вена, Австрия',
          description: 'Презентация исследования по оптимизации нейронных сетей для задач обработки естественного языка'
        },
        {
          title: 'Web Development Summit',
          month: 'Март',
          year: '2023',
          location: 'Берлин, Германия',
          description: 'Участие в панельной дискуссии о будущем веб-разработки и новых технологических трендах'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Дополнительные стили при необходимости */
</style> 