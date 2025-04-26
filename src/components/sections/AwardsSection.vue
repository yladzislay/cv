<template>
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10">
        {{ $t('awards.title') }}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(award, index) in awards" 
          :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div class="flex items-start gap-4">
            <div 
              v-if="award.image"
              class="w-16 h-16 flex-shrink-0"
            >
              <img 
                :src="award.image" 
                :alt="award.title"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <div class="flex-1">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-primary">
                    {{ award.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ award.issuer }}
                  </p>
                </div>
                
                <div class="text-sm text-gray-500 mt-2 md:mt-0">
                  {{ award.date }}
                </div>
              </div>
              
              <div class="prose dark:prose-invert max-w-none mb-4">
                <p class="text-gray-700 dark:text-gray-300">
                  {{ award.description }}
                </p>
              </div>
              
              <div v-if="award.criteria" class="mb-4">
                <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {{ $t('awards.criteria') }}
                </h4>
                <ul class="list-disc list-inside space-y-2">
                  <li 
                    v-for="(criterion, cIndex) in award.criteria" 
                    :key="cIndex"
                    class="text-gray-600 dark:text-gray-400"
                  >
                    {{ criterion }}
                  </li>
                </ul>
              </div>
              
              <div v-if="award.impact" class="mb-4">
                <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {{ $t('awards.impact') }}
                </h4>
                <p class="text-gray-600 dark:text-gray-400">
                  {{ award.impact }}
                </p>
              </div>
              
              <div class="flex flex-wrap gap-4">
                <a 
                  v-if="award.certificate"
                  :href="award.certificate"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>{{ $t('awards.viewCertificate') }}</span>
                </a>
                
                <a 
                  v-if="award.url"
                  :href="award.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>{{ $t('awards.learnMore') }}</span>
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
  name: 'AwardsSection',
  setup() {
    const { t } = useI18n()
    
    const awards = computed(() => {
      return t('awards.items', {}, { plural: true })
    })
    
    return {
      awards
    }
  }
}
</script> 