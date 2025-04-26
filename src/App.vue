<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200 transition-colors duration-300">
    <AppHeader />

    <main class="container mx-auto px-4 py-8 flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
}

html.dark {
  --primary-color: #60a5fa;
  --secondary-color: #34d399;
}

.text-primary {
  color: var(--primary-color);
}

.bg-primary {
  background-color: var(--primary-color);
}

.text-secondary {
  color: var(--secondary-color);
}

.bg-secondary {
  background-color: var(--secondary-color);
}

.dark-bg {
  background-color: #1f2937;
}
</style> 