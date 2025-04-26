<template>
  <section class="relative py-20 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Content -->
        <div class="flex-1 text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            <span class="block">{{ $t('hero.greeting') }}</span>
            <span class="block text-primary">{{ $t('hero.name') }}</span>
            <span class="block">
              {{ $t('hero.iAm') }}
              <TypeWriter 
                :strings="$t('hero.roles', {}, { plural: true })"
                :typeSpeed="50"
                :backSpeed="30"
                :loop="true"
              />
            </span>
          </h1>
          
          <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
            {{ $t('hero.description') }}
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              :href="$t('hero.ctaLink')"
              class="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors w-full sm:w-auto text-center"
            >
              {{ $t('hero.cta') }}
            </a>
            
            <a 
              :href="$t('hero.secondaryCtaLink')"
              class="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors w-full sm:w-auto text-center"
            >
              {{ $t('hero.secondaryCta') }}
            </a>
          </div>
          
          <div class="mt-8 flex items-center justify-center lg:justify-start gap-6">
            <a 
              v-for="(social, index) in socialMedia"
              :key="index"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-primary transition-colors"
            >
              <component 
                :is="social.icon" 
                class="w-6 h-6"
              />
              <span class="sr-only">{{ social.name }}</span>
            </a>
          </div>
        </div>
        
        <!-- Image -->
        <div class="flex-1 relative">
          <div class="relative w-full max-w-lg mx-auto">
            <!-- Background Shapes -->
            <div class="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div class="absolute -left-4 top-20 w-72 h-72 bg-tertiary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            
            <!-- Profile Image -->
            <div class="relative">
              <img 
                :src="$t('hero.image')" 
                :alt="$t('hero.name')"
                class="relative rounded-2xl shadow-2xl"
              />
              
              <!-- Experience Badge -->
              <div class="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full shadow-lg p-4">
                <div class="text-center">
                  <span class="block text-2xl font-bold text-primary">
                    {{ $t('hero.experience.years') }}+
                  </span>
                  <span class="block text-sm text-gray-600 dark:text-gray-400">
                    {{ $t('hero.experience.label') }}
                  </span>
                </div>
              </div>
              
              <!-- Skills Badge -->
              <div class="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4">
                <div class="flex items-center gap-3">
                  <div class="flex -space-x-2">
                    <div 
                      v-for="(skill, index) in featuredSkills"
                      :key="index"
                      class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center"
                      :style="{ zIndex: featuredSkills.length - index }"
                    >
                      <img 
                        :src="skill.icon" 
                        :alt="skill.name"
                        class="w-5 h-5"
                      />
                    </div>
                  </div>
                  <div class="text-sm">
                    <span class="block font-semibold text-gray-900 dark:text-white">
                      {{ $t('hero.skills.title') }}
                    </span>
                    <span class="block text-gray-600 dark:text-gray-400">
                      {{ $t('hero.skills.count') }}+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a 
          href="#about"
          class="flex flex-col items-center text-gray-400 hover:text-primary transition-colors"
        >
          <span class="text-sm mb-2">{{ $t('hero.scrollText') }}</span>
          <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TypeWriter from '@/components/common/TypeWriter.vue'
import {
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  DribbbleIcon
} from '@heroicons/vue/24/outline'

export default {
  name: 'HeroSection',
  components: {
    TypeWriter,
    LinkedinIcon,
    TwitterIcon,
    GithubIcon,
    DribbbleIcon
  },
  setup() {
    const { t } = useI18n()
    
    const socialMedia = computed(() => {
      return [
        {
          name: 'LinkedIn',
          icon: 'LinkedinIcon',
          url: t('hero.social.linkedin')
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: t('hero.social.twitter')
        },
        {
          name: 'GitHub',
          icon: 'GithubIcon',
          url: t('hero.social.github')
        },
        {
          name: 'Dribbble',
          icon: 'DribbbleIcon',
          url: t('hero.social.dribbble')
        }
      ]
    })
    
    const featuredSkills = computed(() => {
      return t('hero.featuredSkills', {}, { plural: true })
    })
    
    return {
      socialMedia,
      featuredSkills
    }
  }
}
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px);
  background-size: 24px 24px;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
</style> 