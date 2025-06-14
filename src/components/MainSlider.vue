<template>
  <div class="slider-container" role="region" aria-label="Галерея изображений">
    <button
      class="prev-btn"
      @click="prevSlide"
      aria-label="Предыдущий слайд"
    >&lt;</button>

    <div class="slide-wrapper">
      <img
        :src="slides[currentIndex].src"
        :alt="slides[currentIndex].alt || 'Слайд'"
        role="img"
      />
    </div>

    <button
      class="next-btn"
      @click="nextSlide"
      aria-label="Следующий слайд"
    >&gt;</button>
  </div>
</template>

<script>
export default {
  name: 'MainSlider',
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }
  }
}
</script>

<style scoped>
.slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px auto;
  max-width: 600px;
}

button {
  cursor: pointer;
  font-size: 2rem;
  background: transparent;
  border: none;
  user-select: none;
  color: tan;
  transition: color 0.3s;
}

button:hover, button:focus {
  color: #b8860b;
  outline: none;
}

.slide-wrapper img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
}
</style>
