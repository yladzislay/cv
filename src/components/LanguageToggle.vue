<template>
  <div class="fixed top-5 left-5 z-50">
    <select 
      v-model="currentLocale" 
      @change="changeLocale"
      class="bg-white dark:bg-dark-bg text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code">
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'LanguageToggle',
  setup() {
    const { locale, availableLocales: i18nLocales } = useI18n()
    const currentLocale = ref(locale.value)
    
    const availableLocales = computed(() => {
      return [
        { code: 'ru', name: 'Русский' },
        { code: 'en', name: 'English' }
      ]
    })
    
    const changeLocale = () => {
      locale.value = currentLocale.value
      localStorage.setItem('language', currentLocale.value)
      document.documentElement.setAttribute('lang', currentLocale.value)
    }
    
    return {
      currentLocale,
      availableLocales,
      changeLocale
    }
  }
}
</script> 