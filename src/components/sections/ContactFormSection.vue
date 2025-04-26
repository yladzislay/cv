<template>
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10">
        {{ $t('contactForm.title') }}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <form @submit.prevent="handleSubmit">
            <div class="space-y-6">
              <div>
                <label 
                  for="name"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {{ $t('contactForm.name') }} *
                </label>
                <input 
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  :placeholder="$t('contactForm.namePlaceholder')"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  :class="{ 'border-red-500 focus:ring-red-500': errors.name }"
                />
                <p v-if="errors.name" class="mt-1 text-sm text-red-500">
                  {{ errors.name }}
                </p>
              </div>
              
              <div>
                <label 
                  for="email"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {{ $t('contactForm.email') }} *
                </label>
                <input 
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  :placeholder="$t('contactForm.emailPlaceholder')"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  :class="{ 'border-red-500 focus:ring-red-500': errors.email }"
                />
                <p v-if="errors.email" class="mt-1 text-sm text-red-500">
                  {{ errors.email }}
                </p>
              </div>
              
              <div>
                <label 
                  for="subject"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {{ $t('contactForm.subject') }} *
                </label>
                <input 
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  :placeholder="$t('contactForm.subjectPlaceholder')"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  :class="{ 'border-red-500 focus:ring-red-500': errors.subject }"
                />
                <p v-if="errors.subject" class="mt-1 text-sm text-red-500">
                  {{ errors.subject }}
                </p>
              </div>
              
              <div>
                <label 
                  for="message"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {{ $t('contactForm.message') }} *
                </label>
                <textarea 
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  :placeholder="$t('contactForm.messagePlaceholder')"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  :class="{ 'border-red-500 focus:ring-red-500': errors.message }"
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-500">
                  {{ errors.message }}
                </p>
              </div>
              
              <div class="flex items-center">
                <input 
                  id="privacy"
                  v-model="form.privacy"
                  type="checkbox"
                  required
                  class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  :class="{ 'border-red-500': errors.privacy }"
                />
                <label 
                  for="privacy"
                  class="ml-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  {{ $t('contactForm.privacyText') }}
                  <a 
                    :href="$t('contactForm.privacyLink')"
                    class="text-primary hover:text-primary-dark transition-colors"
                  >
                    {{ $t('contactForm.privacyLinkText') }}
                  </a>
                </label>
              </div>
              <p v-if="errors.privacy" class="mt-1 text-sm text-red-500">
                {{ errors.privacy }}
              </p>
              
              <div>
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                    <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ $t('contactForm.sending') }}
                  </span>
                  <span v-else>
                    {{ $t('contactForm.submit') }}
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
        
        <div class="space-y-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold text-primary mb-4">
              {{ $t('contactForm.contactInfo') }}
            </h3>
            
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500">{{ $t('contactForm.email') }}</p>
                  <a 
                    :href="`mailto:${$t('contactForm.emailValue')}`"
                    class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {{ $t('contactForm.emailValue') }}
                  </a>
                </div>
              </div>
              
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500">{{ $t('contactForm.phone') }}</p>
                  <a 
                    :href="`tel:${$t('contactForm.phoneValue')}`"
                    class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {{ $t('contactForm.phoneValue') }}
                  </a>
                </div>
              </div>
              
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500">{{ $t('contactForm.location') }}</p>
                  <p class="text-gray-700 dark:text-gray-300">
                    {{ $t('contactForm.locationValue') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold text-primary mb-4">
              {{ $t('contactForm.socialMedia') }}
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
                  class="w-5 h-5 text-primary"
                />
                <span class="text-gray-700 dark:text-gray-300">
                  {{ social.name }}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Success Modal -->
      <div 
        v-if="showSuccessModal"
        class="fixed inset-0 z-50 overflow-y-auto"
        @click.self="showSuccessModal = false"
      >
        <div class="min-h-screen px-4 text-center">
          <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
          
          <span class="inline-block h-screen align-middle">&#8203;</span>
          
          <div 
            class="inline-block w-full max-w-md p-6 my-8 text-left align-middle bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all"
          >
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 class="text-xl font-bold text-primary mb-2">
                {{ $t('contactForm.successTitle') }}
              </h3>
              
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                {{ $t('contactForm.successMessage') }}
              </p>
              
              <button
                @click="showSuccessModal = false"
                class="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
              >
                {{ $t('contactForm.close') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  GithubIcon,
  DribbbleIcon
} from '@heroicons/vue/24/outline'

export default {
  name: 'ContactFormSection',
  components: {
    LinkedinIcon,
    TwitterIcon,
    FacebookIcon,
    InstagramIcon,
    GithubIcon,
    DribbbleIcon
  },
  setup() {
    const { t } = useI18n()
    
    const form = reactive({
      name: '',
      email: '',
      subject: '',
      message: '',
      privacy: false
    })
    
    const errors = reactive({
      name: '',
      email: '',
      subject: '',
      message: '',
      privacy: ''
    })
    
    const isSubmitting = ref(false)
    const showSuccessModal = ref(false)
    
    const socialMedia = computed(() => {
      return [
        {
          name: 'LinkedIn',
          icon: 'LinkedinIcon',
          url: t('contactForm.social.linkedin')
        },
        {
          name: 'Twitter',
          icon: 'TwitterIcon',
          url: t('contactForm.social.twitter')
        },
        {
          name: 'GitHub',
          icon: 'GithubIcon',
          url: t('contactForm.social.github')
        },
        {
          name: 'Dribbble',
          icon: 'DribbbleIcon',
          url: t('contactForm.social.dribbble')
        }
      ]
    })
    
    const validateForm = () => {
      let isValid = true
      
      // Reset errors
      Object.keys(errors).forEach(key => {
        errors[key] = ''
      })
      
      // Name validation
      if (!form.name.trim()) {
        errors.name = t('contactForm.errors.nameRequired')
        isValid = false
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!form.email.trim()) {
        errors.email = t('contactForm.errors.emailRequired')
        isValid = false
      } else if (!emailRegex.test(form.email)) {
        errors.email = t('contactForm.errors.emailInvalid')
        isValid = false
      }
      
      // Subject validation
      if (!form.subject.trim()) {
        errors.subject = t('contactForm.errors.subjectRequired')
        isValid = false
      }
      
      // Message validation
      if (!form.message.trim()) {
        errors.message = t('contactForm.errors.messageRequired')
        isValid = false
      }
      
      // Privacy validation
      if (!form.privacy) {
        errors.privacy = t('contactForm.errors.privacyRequired')
        isValid = false
      }
      
      return isValid
    }
    
    const handleSubmit = async () => {
      if (!validateForm()) return
      
      isSubmitting.value = true
      
      try {
        // Here you would typically make an API call to send the form data
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
        
        // Reset form
        Object.keys(form).forEach(key => {
          form[key] = key === 'privacy' ? false : ''
        })
        
        showSuccessModal.value = true
      } catch (error) {
        console.error('Error submitting form:', error)
        // Handle error (show error message, etc.)
      } finally {
        isSubmitting.value = false
      }
    }
    
    return {
      form,
      errors,
      isSubmitting,
      showSuccessModal,
      socialMedia,
      handleSubmit
    }
  }
}
</script> 