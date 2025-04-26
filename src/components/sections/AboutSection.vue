<template>
  <section id="about" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
          {{ $t('about.title') }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('about.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
        <!-- Profile Image -->
        <div class="md:col-span-4 lg:col-span-5">
          <div class="relative">
            <img 
              :src="$t('about.image')" 
              :alt="$t('about.imageAlt')" 
              class="w-full h-auto rounded-lg shadow-xl object-cover"
            />
            <div class="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <a 
                :href="$t('about.cvLink')" 
                class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                download
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                {{ $t('about.downloadCV') }}
              </a>
              <a 
                :href="$t('about.contactLink')" 
                class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                {{ $t('about.contact') }}
              </a>
            </div>
            
            <!-- Stats -->
            <div class="mt-8 grid grid-cols-2 gap-4">
              <div v-for="(stat, index) in $t('about.stats')" :key="index" class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md">
                <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{{ stat.value }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-300">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Info and details -->
        <div class="md:col-span-8 lg:col-span-7">
          <div class="prose dark:prose-invert max-w-none">
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {{ $t('about.description') }}
            </p>
            
            <!-- Key points -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div v-for="(point, key) in $t('about.keyPoints')" :key="key" class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ point.title }}</h3>
                <p class="text-gray-600 dark:text-gray-300">{{ point.description }}</p>
              </div>
            </div>
            
            <!-- Personal info -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{{ $t('contact-title') }}</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div v-for="(info, key) in $t('about.personalInfo')" :key="key" class="flex items-start">
                  <div class="mr-2 mt-1">
                    <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ info.label }}</span>
                    <p class="text-gray-900 dark:text-white">{{ info.value }}</p>
                  </div>
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
export default {
  name: 'AboutSection',
}
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px);
  background-size: 24px 24px;
}
</style> 