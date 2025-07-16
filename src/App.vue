<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200 transition-colors duration-300">
    <AppHeader />

    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
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

/* Добавляем стили для фоновых элементов */
.bg-gradient-dots {
  background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.dark .bg-gradient-dots {
  background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
}

/* Стили для плавающих фигур */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.floating-shape {
  position: absolute;
  opacity: 0.5;
  animation: float 15s infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(5deg);
  }
  50% {
    transform: translateY(10px) rotate(-5deg);
  }
  75% {
    transform: translateY(-15px) rotate(3deg);
  }
}
</style>