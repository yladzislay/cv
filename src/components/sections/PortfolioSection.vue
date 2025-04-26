<template>
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10">
        {{ $t('portfolio.title') }}
      </h2>
      
      <div class="mb-8">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="px-4 py-2 rounded-full transition-colors"
            :class="{
              'bg-primary text-white': selectedCategory === category,
              'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600': selectedCategory !== category
            }"
          >
            {{ $t(`portfolio.categories.${category}`) }}
          </button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="index"
          class="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <div class="aspect-w-16 aspect-h-9">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300">
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  @click="openProject(project)"
                  class="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                >
                  {{ $t('portfolio.viewProject') }}
                </button>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-primary mb-2">
              {{ project.title }}
            </h3>
            
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(tech, tIndex) in project.technologies" 
                :key="tIndex"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Project Modal -->
      <div 
        v-if="selectedProject"
        class="fixed inset-0 z-50 overflow-y-auto"
        @click.self="closeProject"
      >
        <div class="min-h-screen px-4 text-center">
          <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
          
          <span class="inline-block h-screen align-middle">&#8203;</span>
          
          <div 
            class="inline-block w-full max-w-4xl p-6 my-8 text-left align-middle bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all"
          >
            <div class="absolute top-0 right-0 pt-4 pr-4">
              <button
                @click="closeProject"
                class="text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div class="aspect-w-16 aspect-h-9 mb-6">
              <img 
                :src="selectedProject.image" 
                :alt="selectedProject.title"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <h3 class="text-2xl font-bold text-primary mb-4">
              {{ selectedProject.title }}
            </h3>
            
            <div class="prose dark:prose-invert max-w-none mb-6">
              <p class="text-gray-700 dark:text-gray-300">
                {{ selectedProject.description }}
              </p>
            </div>
            
            <div class="mb-6">
              <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {{ $t('portfolio.technologies') }}
              </h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(tech, tIndex) in selectedProject.technologies" 
                  :key="tIndex"
                  class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div v-if="selectedProject.features" class="mb-6">
              <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {{ $t('portfolio.features') }}
              </h4>
              <ul class="list-disc list-inside space-y-2">
                <li 
                  v-for="(feature, fIndex) in selectedProject.features" 
                  :key="fIndex"
                  class="text-gray-600 dark:text-gray-400"
                >
                  {{ feature }}
                </li>
              </ul>
            </div>
            
            <div class="flex flex-wrap gap-4">
              <a 
                v-if="selectedProject.demo"
                :href="selectedProject.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>{{ $t('portfolio.liveDemo') }}</span>
              </a>
              
              <a 
                v-if="selectedProject.github"
                :href="selectedProject.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'PortfolioSection',
  setup() {
    const { t } = useI18n()
    
    const selectedCategory = ref('all')
    const selectedProject = ref(null)
    
    const projects = computed(() => {
      return t('portfolio.projects', {}, { plural: true })
    })
    
    const categories = computed(() => {
      const allCategories = ['all']
      projects.value.forEach(project => {
        if (project.category && !allCategories.includes(project.category)) {
          allCategories.push(project.category)
        }
      })
      return allCategories
    })
    
    const filteredProjects = computed(() => {
      if (selectedCategory.value === 'all') {
        return projects.value
      }
      return projects.value.filter(project => project.category === selectedCategory.value)
    })
    
    const openProject = (project) => {
      selectedProject.value = project
      document.body.style.overflow = 'hidden'
    }
    
    const closeProject = () => {
      selectedProject.value = null
      document.body.style.overflow = ''
    }
    
    return {
      selectedCategory,
      selectedProject,
      categories,
      filteredProjects,
      openProject,
      closeProject
    }
  }
}
</script> 