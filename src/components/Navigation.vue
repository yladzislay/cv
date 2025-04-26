<template>
  <nav class="fixed top-0 left-0 right-0 z-50 p-4 flex justify-center">
    <div class="bg-white dark:bg-dark-bg rounded-full shadow-lg px-2 py-1">
      <ul class="flex space-x-1">
        <li 
          v-for="(section, index) in sections" 
          :key="section.name"
          class="relative"
        >
          <button 
            @click="$emit('change-section', index)"
            class="px-4 py-2 rounded-full transition duration-300 text-sm sm:text-base"
            :class="[
              activeSection === index 
                ? 'bg-primary text-white' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            ]"
          >
            {{ $t(`navigation.${section.name}`) }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    sections: {
      type: Array,
      required: true
    },
    activeSection: {
      type: Number,
      required: true
    }
  },
  emits: ['change-section']
}
</script> 