<template>
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10">
        {{ $t('languages.title') }}
      </h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div 
          v-for="(language, index) in languages" 
          :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold text-primary">{{ language.name }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ language.level }}</p>
            </div>
            
            <div 
              class="w-12 h-12 rounded-full border-4 border-primary flex items-center justify-center"
            >
              <span class="text-lg font-bold text-primary">
                {{ language.score }}
              </span>
            </div>
          </div>
          
          <div class="space-y-4">
            <div v-if="language.certificates" class="space-y-2">
              <h4 class="font-semibold text-gray-700 dark:text-gray-300">
                {{ $t('languages.certificates') }}
              </h4>
              <ul class="list-disc list-inside space-y-1">
                <li 
                  v-for="(cert, cIndex) in language.certificates" 
                  :key="cIndex"
                  class="text-gray-600 dark:text-gray-400"
                >
                  {{ cert.name }}
                  <span v-if="cert.date" class="text-sm text-gray-500">
                    ({{ cert.date }})
                  </span>
                </li>
              </ul>
            </div>
            
            <div class="space-y-2">
              <h4 class="font-semibold text-gray-700 dark:text-gray-300">
                {{ $t('languages.skills') }}
              </h4>
              <div class="grid grid-cols-2 gap-2">
                <div 
                  v-for="(skill, sIndex) in language.skills" 
                  :key="sIndex"
                  class="flex items-center gap-2"
                >
                  <div class="w-2 h-2 rounded-full" :class="{
                    'bg-primary': skill.level === 'advanced',
                    'bg-primary/75': skill.level === 'intermediate',
                    'bg-primary/50': skill.level === 'basic'
                  }"></div>
                  <span class="text-sm text-gray-600 dark:text-gray-400">
                    {{ skill.name }}
                  </span>
                </div>
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
  name: 'LanguagesSection',
  setup() {
    const { t } = useI18n()
    
    const languages = computed(() => {
      return t('languages.items', {}, { plural: true })
    })
    
    return {
      languages
    }
  }
}
</script> 