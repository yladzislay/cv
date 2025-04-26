<template>
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10">
        {{ $t('recommendations.title') }}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(recommendation, index) in recommendations" 
          :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div class="flex items-start gap-4">
            <div 
              v-if="recommendation.image"
              class="w-16 h-16 flex-shrink-0"
            >
              <img 
                :src="recommendation.image" 
                :alt="recommendation.name"
                class="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-1">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="text-gray-500 text-sm">{{ recommendation.rating }}/5</span>
              </div>
              
              <blockquote class="text-gray-700 dark:text-gray-300 italic mb-4">
                "{{ recommendation.text }}"
              </blockquote>
              
              <div>
                <h3 class="font-bold text-primary">{{ recommendation.name }}</h3>
                <p class="text-gray-600 dark:text-gray-400">{{ recommendation.position }}</p>
                <p class="text-gray-500 text-sm">{{ recommendation.company }}</p>
              </div>
              
              <div v-if="recommendation.relationship" class="mt-4">
                <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {{ $t('recommendations.relationship') }}
                </h4>
                <p class="text-gray-600 dark:text-gray-400">
                  {{ recommendation.relationship }}
                </p>
              </div>
              
              <div v-if="recommendation.projects" class="mt-4">
                <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {{ $t('recommendations.projects') }}
                </h4>
                <ul class="list-disc list-inside space-y-1">
                  <li 
                    v-for="(project, pIndex) in recommendation.projects" 
                    :key="pIndex"
                    class="text-gray-600 dark:text-gray-400"
                  >
                    {{ project }}
                  </li>
                </ul>
              </div>
              
              <div class="mt-4">
                <a 
                  v-if="recommendation.linkedin"
                  :href="recommendation.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>{{ $t('recommendations.viewProfile') }}</span>
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
  name: 'RecommendationsSection',
  setup() {
    const { t } = useI18n()
    
    const recommendations = computed(() => {
      return t('recommendations.items', {}, { plural: true })
    })
    
    return {
      recommendations
    }
  }
}
</script> 