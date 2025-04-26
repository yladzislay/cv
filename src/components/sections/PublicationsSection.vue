<template>
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10">
        {{ $t('publications.title') }}
      </h2>
      
      <div class="space-y-8">
        <div 
          v-for="(publication, index) in publications" 
          :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div class="flex flex-col md:flex-row gap-6">
            <div 
              v-if="publication.image"
              class="w-full md:w-48 flex-shrink-0"
            >
              <img 
                :src="publication.image" 
                :alt="publication.title"
                class="w-full h-48 md:h-full object-cover rounded-lg"
              />
            </div>
            
            <div class="flex-1">
              <h3 class="text-xl font-bold text-primary mb-2">
                {{ publication.title }}
              </h3>
              
              <div class="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{{ publication.date }}</span>
                </div>
                
                <div v-if="publication.journal" class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>{{ publication.journal }}</span>
                </div>
                
                <div v-if="publication.doi" class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span>DOI: {{ publication.doi }}</span>
                </div>
              </div>
              
              <div class="prose dark:prose-invert max-w-none mb-4">
                <p class="text-gray-700 dark:text-gray-300">
                  {{ publication.abstract }}
                </p>
              </div>
              
              <div v-if="publication.authors" class="mb-4">
                <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {{ $t('publications.authors') }}
                </h4>
                <p class="text-gray-600 dark:text-gray-400">
                  {{ publication.authors.join(', ') }}
                </p>
              </div>
              
              <div v-if="publication.keywords" class="mb-4">
                <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {{ $t('publications.keywords') }}
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="(keyword, kIndex) in publication.keywords" 
                    :key="kIndex"
                    class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
                  >
                    {{ keyword }}
                  </span>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-4">
                <a 
                  v-if="publication.url"
                  :href="publication.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>{{ $t('publications.readMore') }}</span>
                </a>
                
                <a 
                  v-if="publication.pdf"
                  :href="publication.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>PDF</span>
                </a>
                
                <a 
                  v-if="publication.citation"
                  :href="publication.citation"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>{{ $t('publications.cite') }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'PublicationsSection',
  setup() {
    const { t } = useI18n()
    
    const publications = computed(() => {
      return t('publications.items', {}, { plural: true })
    })
    
    return {
      publications
    }
  }
}
</script> 