<template>
  <div class = "page gallery-page">
    <h1>Умный дом - галерея</h1>
    <MainSlider :slides="slideImages" />
  </div>
</template>

<script>

import MainSlider from '../components/MainSlider.vue';
export default {
  name: 'GalleryView',
  components: { MainSlider },
  data() {
    return {
      slideImages: [
        require('../assets/gallery/1.jpg'),
        require('../assets/gallery/3.jpg'),
        require('../assets/gallery/2.jpg')
      ]
    }
  }
}
</script>

<style scoped lang = "scss">
* {  
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.page {
  padding-top: 25px;
  text-align: center;
}
h1 {
  margin: 55px 0;
  font-size: 28px;
  box-shadow: 2px 2px 5px 2px;
  border: solid 2px tan;
  border-radius: 10px;
}
p {
  margin:10px;
  font-size: 18px;
  box-shadow: 2px 2px 5px 2px;
  border: solid 2px tan;
  border-radius: 10px;
}
</style>