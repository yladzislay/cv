<template>
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10">
        {{ $t('education.title') }}
      </h2>
      
      <div class="space-y-8">
        <div 
          v-for="(edu, index) in education" 
          :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold text-primary">{{ edu.degree }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ edu.institution }}</p>
            </div>
            <div class="text-sm text-gray-500 mt-2 md:mt-0">
              {{ edu.period }}
            </div>
          </div>
          
          <div class="prose dark:prose-invert max-w-none">
            <p class="text-gray-700 dark:text-gray-300">
              {{ edu.description }}
            </p>
            
            <div v-if="edu.courses" class="mt-4">
              <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {{ $t('education.courses') }}
              </h4>
              <ul class="list-disc list-inside space-y-2">
                <li 
                  v-for="(course, cIndex) in edu.courses" 
                  :key="cIndex"
                  class="text-gray-700 dark:text-gray-300"
                >
                  {{ course }}
                </li>
              </ul>
            </div>
          </div>
          
          <div v-if="edu.achievements" class="mt-4">
            <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('education.achievements') }}
            </h4>
            <ul class="list-disc list-inside space-y-2">
              <li 
                v-for="(achievement, aIndex) in edu.achievements" 
                :key="aIndex"
                class="text-gray-700 dark:text-gray-300"
              >
                {{ achievement }}
              </li>
            </ul>
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
  name: 'EducationSection',
  setup() {
    const { t } = useI18n()
    
    const education = computed(() => {
      return t('education.items', {}, { plural: true })
    })
    
    return {
      education
    }
  }
}
</script> 