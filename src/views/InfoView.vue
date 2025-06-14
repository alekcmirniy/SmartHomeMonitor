<template>
  <article class="info-page" aria-labelledby="info-title">
    <h1 id="info-title">Умный дом — дополнительная информация</h1>
    <p>Система умного дома помогает управлять устройствами и следить за состоянием помещения.</p>
    <ul>
      <li>Автоматизация бытовых процессов</li>
      <li>Мониторинг состояния датчиков</li>
      <li>Управление устройствами в реальном времени</li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'InfoView'
};
</script>

<style scoped lang="scss">
.info-page {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding-top: 25px;
  max-width: 700px;
  margin: auto;
  text-align: center;
}

h1 {
  margin-top: 55px;
  box-shadow: 2px 2px 5px 2px;
  border: solid 2px tan;
  border-radius: 10px;
  padding: 10px;
}

p, ul {
  margin: 10px;
  font-size: 18px;
  box-shadow: 2px 2px 5px 2px;
  border: solid 2px tan;
  border-radius: 10px;
  padding: 10px;
  text-align: left;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}
</style>
