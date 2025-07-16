<template>
  <div class="matrix-view">
    <!-- Навигационные стрелки -->
    <div class="nav-arrows">
      <button @click="navigate('prev')" class="nav-arrow nav-prev" :class="{ 'hidden': !canNavigate('prev') }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button @click="navigate('next')" class="nav-arrow nav-next" :class="{ 'hidden': !canNavigate('next') }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    
    <!-- Индикатор прогресса -->
    <div class="progress-indicator">
      <div class="progress-row" v-for="(row, rowIndex) in viewMatrix" :key="'row-' + rowIndex">
        <div 
          v-for="(view, colIndex) in row" 
          :key="'dot-' + rowIndex + '-' + colIndex"
          class="progress-dot"
          :class="{ 'active': currentPosition.row === rowIndex && currentPosition.col === colIndex, 'empty': !view }"
          @click="goToPosition(rowIndex, colIndex)"
        ></div>
      </div>
    </div>
    
    <!-- Контейнер представлений -->
    <div class="views-container">
      <component 
        :is="currentView" 
        :class="['view', transitionClass]"
        @animationend="onAnimationEnd"
      ></component>
    </div>
  </div>
</template>

<script>
import HomeSection from '../components/sections/HomeSection.vue'
import ExperienceSection from '../components/sections/ExperienceSection.vue'
import SkillsSection from '../components/sections/SkillsSection.vue'
import ResearchSection from '../components/sections/ResearchSection.vue'
import InterestsSection from '../components/sections/InterestsSection.vue'

export default {
  name: 'MatrixView',
  components: {
    HomeSection,
    ExperienceSection,
    SkillsSection,
    ResearchSection,
    InterestsSection
  },
  data() {
    return {
      // Матрица представлений (2x3)
      viewMatrix: [
        ['hero', 'experience', 'lab'],
        ['skills', 'interests', null]  // null для пустой ячейки
      ],
      // Текущая позиция
      currentPosition: { row: 0, col: 0 },
      // Предыдущая позиция для определения направления
      previousPosition: { row: 0, col: 0 },
      // Класс перехода
      transitionClass: '',
      // Флаг анимации
      isAnimating: false
    }
  },
  computed: {
    // Текущий компонент представления
    currentView() {
      const viewId = this.viewMatrix[this.currentPosition.row][this.currentPosition.col]
      switch(viewId) {
        case 'hero': return HomeSection
        case 'experience': return ExperienceSection
        case 'lab': return ResearchSection
        case 'skills': return SkillsSection
        case 'interests': return InterestsSection
        default: return HomeSection
      }
    }
  },
  mounted() {
    // Добавляем обработчики клавиш и колеса мыши
    window.addEventListener('keydown', this.handleKeyNavigation)
    window.addEventListener('wheel', this.handleWheel)
    
    // Инициализация свайпов для мобильных устройств
    this.initSwipeDetection()
  },
  beforeUnmount() {
    // Удаляем обработчики
    window.removeEventListener('keydown', this.handleKeyNavigation)
    window.removeEventListener('wheel', this.handleWheel)
  },
  methods: {
    // Навигация по направлению
    navigate(direction) {
      if (this.isAnimating) return
      
      this.previousPosition = {...this.currentPosition}
      
      switch(direction) {
        case 'prev':
          if (this.currentPosition.col > 0) {
            this.currentPosition.col--
          }
          break
        case 'next':
          if (this.currentPosition.col < this.viewMatrix[0].length - 1 && 
              this.viewMatrix[this.currentPosition.row][this.currentPosition.col + 1] !== null) {
            this.currentPosition.col++
          }
          break
        case 'up':
          if (this.currentPosition.row > 0) {
            this.currentPosition.row--
          }
          break
        case 'down':
          if (this.currentPosition.row < this.viewMatrix.length - 1 && 
              this.viewMatrix[this.currentPosition.row + 1][this.currentPosition.col] !== null) {
            this.currentPosition.row++
          }
          break
      }
      
      // Если позиция изменилась, запускаем анимацию
      if (this.previousPosition.row !== this.currentPosition.row || 
          this.previousPosition.col !== this.currentPosition.col) {
        this.setTransitionClass()
        this.isAnimating = true
      }
    },
    
    // Переход к конкретной позиции
    goToPosition(row, col) {
      if (this.isAnimating || 
          this.viewMatrix[row][col] === null || 
          (row === this.currentPosition.row && col === this.currentPosition.col)) {
        return
      }
      
      this.previousPosition = {...this.currentPosition}
      this.currentPosition = { row, col }
      
      this.setTransitionClass()
      this.isAnimating = true
    },
    
    // Установка класса перехода на основе направления
    setTransitionClass() {
      if (this.previousPosition.row < this.currentPosition.row) {
        this.transitionClass = 'transition-down'
      } else if (this.previousPosition.row > this.currentPosition.row) {
        this.transitionClass = 'transition-up'
      } else if (this.previousPosition.col < this.currentPosition.col) {
        this.transitionClass = 'transition-right'
      } else {
        this.transitionClass = 'transition-left'
      }
    },
    
    // Обработка окончания анимации
    onAnimationEnd() {
      this.isAnimating = false
      this.transitionClass = ''
    },
    
    // Проверка возможности навигации в указанном направлении
    canNavigate(direction) {
      switch(direction) {
        case 'prev':
          return this.currentPosition.col > 0
        case 'next':
          return this.currentPosition.col < this.viewMatrix[0].length - 1 && 
                 this.viewMatrix[this.currentPosition.row][this.currentPosition.col + 1] !== null
        case 'up':
          return this.currentPosition.row > 0
        case 'down':
          return this.currentPosition.row < this.viewMatrix.length - 1 && 
                 this.viewMatrix[this.currentPosition.row + 1][this.currentPosition.col] !== null
      }
      return false
    },
    
    // Обработка навигации с клавиатуры
    handleKeyNavigation(event) {
      if (this.isAnimating) return
      
      switch(event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          this.navigate('prev')
          break
        case 'ArrowRight':
          event.preventDefault();
          this.navigate('next')
          break
        case 'ArrowUp':
          event.preventDefault();
          this.navigate('up')
          break
        case 'ArrowDown':
          event.preventDefault();
          this.navigate('down')
          break
      }
    },
    
    // Обработка колеса мыши
    handleWheel(event) {
      if (this.isAnimating) return
      
      // Добавляем задержку для предотвращения слишком частых срабатываний
      if (this.wheelTimeout) return
      
      this.wheelTimeout = setTimeout(() => {
        this.wheelTimeout = null
      }, 500)
      
      if (event.deltaY > 0) {
        // Прокрутка вниз
        if (this.currentPosition.row < this.viewMatrix.length - 1 && 
            this.viewMatrix[this.currentPosition.row + 1][this.currentPosition.col] !== null) {
          this.navigate('down')
        } else {
          this.navigate('next')
        }
      } else {
        // Прокрутка вверх
        if (this.currentPosition.row > 0) {
          this.navigate('up')
        } else {
          this.navigate('prev')
        }
      }
    },
    
    // Инициализация обнаружения свайпов
    initSwipeDetection() {
      let touchStartX = 0
      let touchStartY = 0
      let touchEndX = 0
      let touchEndY = 0
      
      document.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX
        touchStartY = event.changedTouches[0].screenY
      }, false)
      
      document.addEventListener('touchend', (event) => {
        if (this.isAnimating) return
        
        touchEndX = event.changedTouches[0].screenX
        touchEndY = event.changedTouches[0].screenY
        
        const diffX = touchStartX - touchEndX
        const diffY = touchStartY - touchEndY
        
        // Определяем направление свайпа
        if (Math.abs(diffX) > Math.abs(diffY)) {
          // Горизонтальный свайп
          if (diffX > 50) {
            this.navigate('next')
          } else if (diffX < -50) {
            this.navigate('prev')
          }
        } else {
          // Вертикальный свайп
          if (diffY > 50) {
            this.navigate('down')
          } else if (diffY < -50) {
            this.navigate('up')
          }
        }
      }, false)
    }
  }
}
</script>

<style scoped>
/* Стили для матричного представления */
.matrix-view {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* Стили для навигационных стрелок */
.nav-arrows {
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: 10;
}

.nav-arrow {
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dark .nav-arrow {
  background-color: rgba(31, 41, 55, 0.8);
  color: #fff;
}

.nav-arrow:hover {
  transform: scale(1.1);
}

.nav-arrow.hidden {
  opacity: 0;
  pointer-events: none;
}

/* Стили для индикатора прогресса */
.progress-indicator {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 10;
}

.progress-row {
  display: flex;
  gap: 0.5rem;
}

.progress-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dark .progress-dot {
  background-color: rgba(31, 41, 55, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.progress-dot.active {
  background-color: #3b82f6;
  transform: scale(1.2);
}

.progress-dot.empty {
  opacity: 0.3;
  cursor: default;
}

/* Стили для контейнера представлений */
.views-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

/* Классы переходов */
.transition-right {
  animation: slideInRight 0.5s forwards;
}

.transition-left {
  animation: slideInLeft 0.5s forwards;
}

.transition-up {
  animation: slideInUp 0.5s forwards;
}

.transition-down {
  animation: slideInDown 0.5s forwards;
}

/* Анимации */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInDown {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Адаптивные стили */
@media (max-width: 768px) {
  .nav-arrow {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .progress-dot {
    width: 0.6rem;
    height: 0.6rem;
  }
}
</style>