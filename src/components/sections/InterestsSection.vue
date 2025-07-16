<template>
  <section class="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative" aria-labelledby="interests-title">
    <!-- SVG динамический фон -->
    <svg aria-hidden="true" class="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <defs>
        <linearGradient id="bg-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#a78bfa" />
          <stop offset="100%" stop-color="#f472b6" />
        </linearGradient>
      </defs>
      <path fill="url(#bg-gradient)" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
    </svg>
    <div class="container mx-auto max-w-6xl px-4 relative z-10">
      <h2 id="interests-title" class="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800 dark:text-gray-100">{{ $t('interests.title') }}</h2>
      <p class="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">{{ $t('about-text') }}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div v-for="(interest, index) in interests" :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
          :aria-labelledby="'interest-title-' + index" :aria-describedby="'interest-desc-' + index" tabindex="0">
          <div class="flex items-center mb-4">
            <div :class="`bg-${interest.color}-100 dark:bg-${interest.color}-900/30 p-3 rounded-lg mr-4`">
              <component :is="interest.icon" :class="`h-6 w-6 text-${interest.color}-600 dark:text-${interest.color}-400`" />
            </div>
            <h3 :id="'interest-title-' + index" class="text-lg font-semibold text-gray-800 dark:text-gray-200">{{ $t(interest.title) }}</h3>
          </div>
          <p :id="'interest-desc-' + index" class="text-gray-700 dark:text-gray-300 mb-4">{{ $t(interest.description) }}</p>
          <div v-if="interest.activities && interest.activities.length" class="mt-4">
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('interests.activities') }}:</h4>
            <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
              <li v-for="(activity, actIndex) in interest.activities" :key="actIndex" class="mb-1">
                {{ $t(activity) }}
              </li>
            </ul>
          </div>
          <div v-if="interest.achievements && interest.achievements.length" class="mt-4">
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('interests.achievements') }}:</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="(achievement, achIndex) in interest.achievements" :key="achIndex"
                :class="`inline-block px-2 py-1 text-xs rounded-full bg-${interest.color}-100 text-${interest.color}-800 dark:bg-${interest.color}-900/20 dark:text-${interest.color}-300`">
                {{ $t(achievement) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { LightBulbIcon, BookOpenIcon, CubeIcon, BeakerIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'InterestsSection',
  components: {
    LightBulbIcon,
    BookOpenIcon,
    CubeIcon,
    BeakerIcon,
    ChartBarIcon
  },
  data() {
    return {
      interests: [
        {
          title: 'interests.autonomous',
          description: 'interests.autonomous-desc',
          icon: 'LightBulbIcon',
          color: 'purple',
          activities: [
            'interests.autonomous-act-1',
            'interests.autonomous-act-2',
            'interests.autonomous-act-3'
          ],
          achievements: [
            'interests.autonomous-ach-1',
            'interests.autonomous-ach-2'
          ]
        },
        {
          title: 'interests.education',
          description: 'interests.education-desc',
          icon: 'BookOpenIcon',
          color: 'pink',
          activities: [
            'interests.education-act-1',
            'interests.education-act-2',
            'interests.education-act-3'
          ],
          achievements: [
            'interests.education-ach-1',
            'interests.education-ach-2'
          ]
        },
        {
          title: 'interests.architecture',
          description: 'interests.architecture-desc',
          icon: 'CubeIcon',
          color: 'blue',
          activities: [
            'interests.architecture-act-1',
            'interests.architecture-act-2',
            'interests.architecture-act-3'
          ],
          achievements: [
            'interests.architecture-ach-1',
            'interests.architecture-ach-2'
          ]
        }
      ]
    }
  }
}
</script>