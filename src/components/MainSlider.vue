<template>
    <div class = "slider-container">
        <button class = "prev-btn" @click = "prevSlide">&lt;</button>
        <div class = "slide-wrapper">
            <img :src = "slides[currentIndex]" alt = "Слайд" />
        </div>
        <button class = "next-btn" @click = "nextSlide">&gt;</button>
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
        }
    },
    methods: {
        prevSlide() {
            this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
        },
        nextSlide() {
            this.currentIndex = this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
        }
    }
}
</script>

<style scoped lang = "scss">
.slider-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 800px;
    margin: auto;
}
.slide-wrapper {
    width: 100%;
    overflow: hidden;
}
img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    max-height: 50vh;
}
.prev-btn, .next-btn {
    background: rgba(0,0,0,0.5);
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    padding: 8px 12px;
    position: absolute;
    top: 50%;
    border-radius: 50%;
    transform: translateY(-50%);
}
.prev-btn {
    left: 10px;
}
.next-btn {
    right: 10px;
}
@media (max-width: 800px) {
    .prev-btn, .next-btn {
        font-size: 1.5rem;
        padding: 6px 10px;
    }
}
@media (max-width: 550px) {
    .slider-container {
        max-width: 100%;
    }
}
</style>