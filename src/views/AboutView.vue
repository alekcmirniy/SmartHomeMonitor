<template>
  <section class="page about-page" aria-labelledby="about-title">
    <h1 id="about-title">Умный дом — о нас</h1>
    <p>Проект выполнен Мирошниченко Алексеем в рамках обучения фреймворку Vue.js</p>
    <p>Цель: практико-ориентированное освоение фреймворка</p>
  </section>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped lang="scss">
.page {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding-top: 25px;
  text-align: center;
  max-width: 700px;
  margin: auto;
}

h1 {
  margin-top: 55px;
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
</style>
