<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About -->
        <div class="col-span-1 md:col-span-2">
          <h3 class="text-lg font-bold text-primary mb-4">
            {{ $t('footer.about.title') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            {{ $t('footer.about.description') }}
          </p>
          <div class="flex space-x-4">
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
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold text-primary mb-4">
            {{ $t('footer.quickLinks.title') }}
          </h3>
          <ul class="space-y-2">
            <li v-for="(link, index) in quickLinks" :key="index">
              <a 
                :href="link.url"
                class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-bold text-primary mb-4">
            {{ $t('footer.contact.title') }}
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a 
                :href="`mailto:${$t('footer.contact.email')}`"
                class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {{ $t('footer.contact.email') }}
              </a>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a 
                :href="`tel:${$t('footer.contact.phone')}`"
                class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {{ $t('footer.contact.phone') }}
              </a>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-gray-600 dark:text-gray-400">
                {{ $t('footer.contact.address') }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
          </p>
          
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <a 
              v-for="(link, index) in legalLinks" 
              :key="index"
              :href="link.url"
              class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {{ link.name }}
            </a>
          </div>
          
          <div class="flex items-center gap-2">
            <button
              @click="toggleTheme"
              class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg 
                v-if="isDark"
                class="w-5 h-5 text-gray-600 dark:text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg 
                v-else
                class="w-5 h-5 text-gray-600 dark:text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            
            <select
              v-model="currentLocale"
              class="text-sm text-gray-600 dark:text-gray-400 bg-transparent border-none focus:ring-0"
            >
              <option 
                v-for="locale in availableLocales"
                :key="locale.code"
                :value="locale.code"
              >
                {{ locale.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'
import {
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  GithubIcon,
  DribbbleIcon
} from '@heroicons/vue/24/outline'

export default {
  name: 'FooterSection',
  components: {
    LinkedinIcon,
    TwitterIcon,
    FacebookIcon,
    InstagramIcon,
    GithubIcon,
    DribbbleIcon
  },
  setup() {
    const { t, locale, availableLocales } = useI18n()
    const { isDark, toggleTheme } = useTheme()
    
    const currentLocale = computed({
      get: () => locale.value,
      set: (value) => {
        locale.value = value
      }
    })
    
    const socialMedia = computed(() => {
      return [
        {
          name: 'LinkedIn',
          icon: 'LinkedinIcon',
          url: t('footer.social.linkedin')
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: t('footer.social.twitter')
        },
        {
          name: 'GitHub',
          icon: 'GithubIcon',
          url: t('footer.social.github')
        },
        {
          name: 'Dribbble',
          icon: 'DribbbleIcon',
          url: t('footer.social.dribbble')
        }
      ]
    })
    
    const quickLinks = computed(() => {
      return t('footer.quickLinks.items', {}, { plural: true })
    })
    
    const legalLinks = computed(() => {
      return t('footer.legalLinks', {}, { plural: true })
    })
    
    return {
      currentLocale,
      availableLocales,
      isDark,
      toggleTheme,
      socialMedia,
      quickLinks,
      legalLinks
    }
  }
}
</script> 