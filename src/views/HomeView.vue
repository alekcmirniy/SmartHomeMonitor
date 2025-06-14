<template>
  <main class="home-page" aria-label="Главная страница умного дома">
    <div class="content">
      <div class="text-container">
        <h1>Умный дом — главная</h1>
        <p>Добро пожаловать в ваш умный дом!</p>
      </div>
      <img src="../assets/home-logo.png" alt="Логотип системы умного дома" />
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped lang="scss">
.home-page {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 80px 20px;
}

.content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.text-container {
  max-width: 400px;
  text-align: center;
}

h1 {
  margin-top: 0;
  box-shadow: 2px 2px 5px 2px;
  border: solid 2px tan;
  border-radius: 10px;
  padding: 10px;
}

p {
  margin: 10px 0;
  font-size: 18px;
  box-shadow: 2px 2px 5px 2px;
  border: solid 2px tan;
  border-radius: 10px;
  padding: 10px;
}

img {
  max-width: 250px;
  height: auto;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 2px;
}
</style>
