<template>
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10">
        {{ $t('contact.title') }}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-primary mb-4">
            {{ $t('contact.contactInfo') }}
          </h3>
          
          <div class="space-y-4">
            <div v-for="(item, index) in contactItems" :key="index" class="flex items-center gap-3">
              <component 
                :is="item.icon" 
                class="w-6 h-6 text-primary flex-shrink-0"
              />
              <div>
                <p class="text-gray-600 dark:text-gray-400">{{ item.label }}</p>
                <a 
                  v-if="item.href"
                  :href="item.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {{ item.value }}
                </a>
                <p v-else class="text-gray-700 dark:text-gray-300">{{ item.value }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-primary mb-4">
            {{ $t('contact.socialMedia') }}
          </h3>
          
          <div class="grid grid-cols-2 gap-4">
            <a 
              v-for="(social, index) in socialMedia" 
              :key="index"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <component 
                :is="social.icon" 
                class="w-6 h-6 text-primary"
              />
              <span class="text-gray-700 dark:text-gray-300">{{ social.name }}</span>
            </a>
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
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon
} from '@heroicons/vue/24/outline'

export default {
  name: 'ContactSection',
  components: {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    GlobeAltIcon,
    LinkedinIcon,
    TwitterIcon,
    FacebookIcon,
    InstagramIcon
  },
  setup() {
    const { t } = useI18n()
    
    const contactItems = computed(() => {
      return [
        {
          icon: 'EnvelopeIcon',
          label: t('contact.email'),
          value: t('contact.emailValue'),
          href: `mailto:${t('contact.emailValue')}`
        },
        {
          icon: 'PhoneIcon',
          label: t('contact.phone'),
          value: t('contact.phoneValue'),
          href: `tel:${t('contact.phoneValue')}`
        },
        {
          icon: 'MapPinIcon',
          label: t('contact.location'),
          value: t('contact.locationValue')
        },
        {
          icon: 'GlobeAltIcon',
          label: t('contact.website'),
          value: t('contact.websiteValue'),
          href: t('contact.websiteValue')
        }
      ]
    })
    
    const socialMedia = computed(() => {
      return [
        {
          name: 'LinkedIn',
          icon: 'LinkedinIcon',
          url: t('contact.social.linkedin')
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: t('contact.social.twitter')
        },
        {
          name: 'Facebook',
          icon: 'FacebookIcon',
          url: t('contact.social.facebook')
        },
        {
          name: 'Instagram',
          icon: 'InstagramIcon',
          url: t('contact.social.instagram')
        }
      ]
    })
    
    return {
      contactItems,
      socialMedia
    }
  }
}
</script> 