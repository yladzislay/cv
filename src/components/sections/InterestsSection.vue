<template>
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10">
        {{ $t('interests.title') }}
      </h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div 
          v-for="(interest, index) in interests" 
          :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <component 
                :is="interest.icon" 
                class="w-6 h-6 text-primary"
              />
            </div>
            
            <h3 class="text-xl font-bold text-primary">
              {{ interest.name }}
            </h3>
          </div>
          
          <p class="text-gray-700 dark:text-gray-300">
            {{ interest.description }}
          </p>
          
          <div v-if="interest.activities" class="mt-4">
            <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('interests.activities') }}
            </h4>
            <ul class="list-disc list-inside space-y-1">
              <li 
                v-for="(activity, aIndex) in interest.activities" 
                :key="aIndex"
                class="text-gray-600 dark:text-gray-400"
              >
                {{ activity }}
              </li>
            </ul>
          </div>
          
          <div v-if="interest.achievements" class="mt-4">
            <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('interests.achievements') }}
            </h4>
            <ul class="list-disc list-inside space-y-1">
              <li 
                v-for="(achievement, achIndex) in interest.achievements" 
                :key="achIndex"
                class="text-gray-600 dark:text-gray-400"
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
import {
  BookOpenIcon,
  MusicalNoteIcon,
  CameraIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  BeakerIcon,
  PaintBrushIcon,
  UserGroupIcon,
  HeartIcon
} from '@heroicons/vue/24/outline'

export default {
  name: 'InterestsSection',
  components: {
    BookOpenIcon,
    MusicalNoteIcon,
    CameraIcon,
    GlobeAltIcon,
    ComputerDesktopIcon,
    BeakerIcon,
    PaintBrushIcon,
    UserGroupIcon,
    HeartIcon
  },
  setup() {
    const { t } = useI18n()
    
    const interests = computed(() => {
      return t('interests.items', {}, { plural: true })
    })
    
    return {
      interests
    }
  }
}
</script> 