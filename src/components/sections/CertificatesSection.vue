<template>
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10">
        {{ $t('certificates.title') }}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(cert, index) in certificates" 
          :key="index"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div class="flex items-start gap-4">
            <div 
              v-if="cert.image"
              class="w-24 h-24 flex-shrink-0"
            >
              <img 
                :src="cert.image" 
                :alt="cert.name"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <div class="flex-1">
              <h3 class="text-xl font-bold text-primary mb-2">
                {{ cert.name }}
              </h3>
              
              <p class="text-gray-600 dark:text-gray-400 mb-2">
                {{ cert.issuer }}
              </p>
              
              <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{{ cert.date }}</span>
                </div>
                
                <div v-if="cert.expiry" class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{{ $t('certificates.expires') }}: {{ cert.expiry }}</span>
                </div>
                
                <div v-if="cert.id" class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>ID: {{ cert.id }}</span>
                </div>
              </div>
              
              <p v-if="cert.description" class="mt-4 text-gray-700 dark:text-gray-300">
                {{ cert.description }}
              </p>
              
              <div v-if="cert.skills" class="mt-4">
                <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {{ $t('certificates.skills') }}
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="(skill, sIndex) in cert.skills" 
                    :key="sIndex"
                    class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
              
              <div class="mt-4">
                <a 
                  v-if="cert.url"
                  :href="cert.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>{{ $t('certificates.verify') }}</span>
                </a>
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
  name: 'CertificatesSection',
  setup() {
    const { t } = useI18n()
    
    const certificates = computed(() => {
      return t('certificates.items', {}, { plural: true })
    })
    
    return {
      certificates
    }
  }
}
</script> 