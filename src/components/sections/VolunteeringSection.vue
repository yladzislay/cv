<template>
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10">
        {{ $t('volunteering.title') }}
      </h2>
      
      <div class="space-y-8">
        <div 
          v-for="(activity, index) in volunteering" 
          :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div class="flex flex-col md:flex-row gap-6">
            <div 
              v-if="activity.image"
              class="w-full md:w-48 flex-shrink-0"
            >
              <img 
                :src="activity.image" 
                :alt="activity.organization"
                class="w-full h-48 md:h-full object-cover rounded-lg"
              />
            </div>
            
            <div class="flex-1">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-primary">
                    {{ activity.role }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ activity.organization }}
                  </p>
                </div>
                
                <div class="text-sm text-gray-500 mt-2 md:mt-0">
                  {{ activity.period }}
                </div>
              </div>
              
              <div class="prose dark:prose-invert max-w-none mb-4">
                <p class="text-gray-700 dark:text-gray-300">
                  {{ activity.description }}
                </p>
              </div>
              
              <div v-if="activity.achievements" class="mb-4">
                <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {{ $t('volunteering.achievements') }}
                </h4>
                <ul class="list-disc list-inside space-y-2">
                  <li 
                    v-for="(achievement, aIndex) in activity.achievements" 
                    :key="aIndex"
                    class="text-gray-600 dark:text-gray-400"
                  >
                    {{ achievement }}
                  </li>
                </ul>
              </div>
              
              <div v-if="activity.skills" class="mb-4">
                <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {{ $t('volunteering.skills') }}
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="(skill, sIndex) in activity.skills" 
                    :key="sIndex"
                    class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
              
              <div v-if="activity.impact" class="mb-4">
                <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {{ $t('volunteering.impact') }}
                </h4>
                <p class="text-gray-600 dark:text-gray-400">
                  {{ activity.impact }}
                </p>
              </div>
              
              <div class="flex flex-wrap gap-4">
                <a 
                  v-if="activity.website"
                  :href="activity.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>{{ $t('volunteering.visitWebsite') }}</span>
                </a>
                
                <a 
                  v-if="activity.certificate"
                  :href="activity.certificate"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>{{ $t('volunteering.viewCertificate') }}</span>
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
  name: 'VolunteeringSection',
  setup() {
    const { t } = useI18n()
    
    const volunteering = computed(() => {
      return t('volunteering.items', {}, { plural: true })
    })
    
    return {
      volunteering
    }
  }
}
</script> 