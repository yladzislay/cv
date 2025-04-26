<template>
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-10">
        {{ $t('testimonials.title') }}
      </h2>
      
      <div class="relative">
        <!-- Navigation Buttons -->
        <button 
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
          :disabled="currentSlide === 0"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
          :disabled="currentSlide === testimonials.length - 1"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide === testimonials.length - 1 }"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <!-- Testimonials Slider -->
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="index"
              class="w-full flex-shrink-0 px-4"
            >
              <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <div class="flex items-center gap-4 mb-6">
                  <div 
                    v-if="testimonial.image"
                    class="w-16 h-16 flex-shrink-0"
                  >
                    <img 
                      :src="testimonial.image" 
                      :alt="testimonial.name"
                      class="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-bold text-primary">
                      {{ testimonial.name }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      {{ testimonial.position }}
                    </p>
                    <p class="text-gray-500 text-sm">
                      {{ testimonial.company }}
                    </p>
                  </div>
                </div>
                
                <div class="flex items-center gap-1 mb-4">
                  <svg 
                    v-for="star in 5" 
                    :key="star"
                    class="w-5 h-5"
                    :class="{
                      'text-yellow-400': star <= testimonial.rating,
                      'text-gray-300 dark:text-gray-600': star > testimonial.rating
                    }"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                
                <blockquote class="text-gray-700 dark:text-gray-300 italic mb-6">
                  "{{ testimonial.text }}"
                </blockquote>
                
                <div v-if="testimonial.project" class="text-sm text-gray-500">
                  {{ $t('testimonials.project') }}: {{ testimonial.project }}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Dots Navigation -->
        <div class="flex justify-center gap-2 mt-6">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            @click="currentSlide = index"
            class="w-3 h-3 rounded-full transition-colors"
            :class="{
              'bg-primary': currentSlide === index,
              'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500': currentSlide !== index
            }"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'TestimonialsSection',
  setup() {
    const { t } = useI18n()
    
    const currentSlide = ref(0)
    
    const testimonials = computed(() => {
      return t('testimonials.items', {}, { plural: true })
    })
    
    const prevSlide = () => {
      if (currentSlide.value > 0) {
        currentSlide.value--
      }
    }
    
    const nextSlide = () => {
      if (currentSlide.value < testimonials.value.length - 1) {
        currentSlide.value++
      }
    }
    
    // Auto-advance slides
    let autoplayInterval
    const startAutoplay = () => {
      autoplayInterval = setInterval(() => {
        if (currentSlide.value < testimonials.value.length - 1) {
          currentSlide.value++
        } else {
          currentSlide.value = 0
        }
      }, 5000) // Change slide every 5 seconds
    }
    
    const stopAutoplay = () => {
      clearInterval(autoplayInterval)
    }
    
    // Start autoplay when component is mounted
    onMounted(() => {
      startAutoplay()
    })
    
    // Clean up interval when component is unmounted
    onUnmounted(() => {
      stopAutoplay()
    })
    
    return {
      currentSlide,
      testimonials,
      prevSlide,
      nextSlide
    }
  }
}
</script> 