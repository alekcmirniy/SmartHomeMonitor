<template>
  <main class="page gallery-page" aria-label="Галерея умного дома">
    <h1>Умный дом — галерея</h1>
    <MainSlider :slides="slideImages" />
  </main>
</template>

<script>
import MainSlider from '../components/MainSlider.vue';

export default {
  name: 'GalleryView',
  components: { MainSlider },
  data() {
    return {
      slideImages: [
        { src: require('../assets/gallery/1.jpg'), alt: 'Фото 1' },
        { src: require('../assets/gallery/3.jpg'), alt: 'Фото 3' },
        { src: require('../assets/gallery/2.jpg'), alt: 'Фото 2' }
      ]
    };
  }
}
</script>

<style scoped lang="scss">
.page {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding-top: 25px;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;
}

h1 {
  margin: 55px 0;
  box-shadow: 2px 2px 5px 2px;
  border: solid 2px tan;
  border-radius: 10px;
  padding: 10px;
}

p {
  margin: 10px;
  font-size: 18px;
  box-shadow: 2px 2px 5px 2px;
  border: solid 2px tan;
  border-radius: 10px;
  padding: 10px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
