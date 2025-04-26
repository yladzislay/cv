<template>
  <section class="py-12 bg-primary">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-white mb-4">
          {{ $t('subscribe.title') }}
        </h2>
        
        <p class="text-lg text-white/80 mb-8">
          {{ $t('subscribe.description') }}
        </p>
        
        <form @submit.prevent="handleSubmit" class="max-w-md mx-auto">
          <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex-1">
              <div class="relative">
                <input 
                  v-model="email"
                  type="email"
                  required
                  :placeholder="$t('subscribe.emailPlaceholder')"
                  class="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-colors"
                  :class="{ 'border-red-400 focus:ring-red-400': error }"
                />
                <p v-if="error" class="absolute left-0 -bottom-6 text-sm text-red-400">
                  {{ error }}
                </p>
              </div>
            </div>
            
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-8 py-3 bg-white text-primary rounded-full hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ $t('subscribe.subscribing') }}
              </span>
              <span v-else>
                {{ $t('subscribe.submit') }}
              </span>
            </button>
          </div>
        </form>
        
        <p class="mt-4 text-sm text-white/60">
          {{ $t('subscribe.privacyText') }}
          <a 
            :href="$t('subscribe.privacyLink')"
            class="text-white hover:text-white/80 transition-colors"
          >
            {{ $t('subscribe.privacyLinkText') }}
          </a>
        </p>
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
                {{ $t('subscribe.successTitle') }}
              </h3>
              
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                {{ $t('subscribe.successMessage') }}
              </p>
              
              <button
                @click="showSuccessModal = false"
                class="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
              >
                {{ $t('subscribe.close') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'SubscribeSection',
  setup() {
    const { t } = useI18n()
    
    const email = ref('')
    const error = ref('')
    const isSubmitting = ref(false)
    const showSuccessModal = ref(false)
    
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
    
    const handleSubmit = async () => {
      error.value = ''
      
      if (!email.value.trim()) {
        error.value = t('subscribe.errors.emailRequired')
        return
      }
      
      if (!validateEmail(email.value)) {
        error.value = t('subscribe.errors.emailInvalid')
        return
      }
      
      isSubmitting.value = true
      
      try {
        // Here you would typically make an API call to subscribe the user
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
        
        email.value = ''
        showSuccessModal.value = true
      } catch (error) {
        console.error('Error subscribing:', error)
        error.value = t('subscribe.errors.general')
      } finally {
        isSubmitting.value = false
      }
    }
    
    return {
      email,
      error,
      isSubmitting,
      showSuccessModal,
      handleSubmit
    }
  }
}
</script> 