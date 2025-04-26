<template>
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10">
        {{ $t('skills.title') }}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 class="text-xl font-bold text-primary mb-4">
            {{ category.title }}
          </h3>
          
          <div class="space-y-4">
            <div 
              v-for="(skill, sIndex) in category.skills" 
              :key="sIndex"
              class="space-y-2"
            >
              <div class="flex justify-between items-center">
                <span class="text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
                <span class="text-sm text-gray-500">{{ skill.level }}%</span>
              </div>
              
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  class="bg-primary h-2.5 rounded-full transition-all duration-500"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-8">
        <h3 class="text-xl font-bold text-primary mb-4 text-center">
          {{ $t('skills.otherSkills') }}
        </h3>
        
        <div class="flex flex-wrap justify-center gap-3">
          <span 
            v-for="(skill, index) in otherSkills" 
            :key="index"
            class="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'SkillsSection',
  setup() {
    const { t } = useI18n()
    
    const skillCategories = computed(() => {
      return t('skills.categories', {}, { plural: true })
    })
    
    const otherSkills = computed(() => {
      return t('skills.other', {}, { plural: true })
    })
    
    return {
      skillCategories,
      otherSkills
    }
  }
}
</script> 