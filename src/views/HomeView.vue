<template>
  <section class = "home-container">
    <div class = "intro">
      <h1>Система мониторинга умного дома</h1>
      <p>Позволяет следить за температурой, влажностью, освещенностью...</p>
    </div>
    <div class = "home-image">
      <img src = "../assets/logo.png" alt = "Логотип умного дома" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped lang = "scss">
* {  
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.home-container {
  padding-top: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
.intro {
  flex: 1;
  padding: 20px;
}
.home-image {
  flex:1;
  text-align: center;
}
}
h1 {
  font-size: 28px;
  box-shadow: 2px 2px 5px 2px;
  border: solid 2px tan;
  border-radius: 10px;
}
p {
  margin-top: 15px;
  font-size: 18px;
    box-shadow: 2px 2px 5px 2px;
  border: solid 2px tan;
  border-radius: 10px;
}
@media (max-width: 1200px) {
  .home-container {
    flex-direction: column;
  }
  .home-image {
    margin-top: 20px;
  }
}
@media (max-width: 550px) {
  .intro h1 {
    font-size: 1.5rem;
  }
}
</style>