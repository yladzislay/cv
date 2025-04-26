<template>
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10">
        {{ $t('experience.title') }}
      </h2>
      
      <div class="space-y-8">
        <div 
          v-for="(job, index) in jobs" 
          :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold text-primary">{{ job.position }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ job.company }}</p>
            </div>
            <div class="text-sm text-gray-500 mt-2 md:mt-0">
              {{ job.period }}
            </div>
          </div>
          
          <div class="prose dark:prose-invert max-w-none">
            <ul class="list-disc list-inside space-y-2">
              <li 
                v-for="(responsibility, rIndex) in job.responsibilities" 
                :key="rIndex"
                class="text-gray-700 dark:text-gray-300"
              >
                {{ responsibility }}
              </li>
            </ul>
          </div>
          
          <div class="mt-4 flex flex-wrap gap-2">
            <span 
              v-for="(skill, sIndex) in job.skills" 
              :key="sIndex"
              class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
            >
              {{ skill }}
            </span>
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
  name: 'ExperienceSection',
  setup() {
    const { t } = useI18n()
    
    const jobs = computed(() => {
      return t('experience.jobs', {}, { plural: true })
    })
    
    return {
      jobs
    }
  }
}
</script> 