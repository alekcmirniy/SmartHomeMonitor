<template>
  <section class = "monitor-page">
  <h1>Умный дом - мониторинг</h1>
  <p>Состояние элементов</p>
  <div class = "cards-wrapper">
    <div class = "card" lang="ru" title="Карточка">
      <p><span class="card-name">Яндекс Алиса</span></p>
      <img src = "../assets/ya-alice.png" />
    </div>
    <div class = "card" lang="ru" title="Карточка">
      <p><span class="card-name">Умный холодильник </span></p>
      <img src = "../assets/fridge.png" />
    </div>
    <div class = "card" lang="ru" title="Карточка">
      <p><span class="card-name">Кондиционер</span></p>
      <img src = "../assets/conditioner.png" />
    </div>
  </div>
  <div class = "sensors-list">
    <div class = "sensor-card" v-for = "sensor in sensors" :key = "sensor.id">
      <h3> {{ sensor.name }}</h3>
      <p>Значение: {{ sensor.value }} из {{ sensor.max_value }}</p>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'MonitorView',
  data() {
    return {
      //пока статический массив, потом заменим запросом
      sensors: [
        {id: 1, name: "Громкость Алисы", value: 8, max_value: 10},
        {id: 2, name: "Температура холодильника", value: -5, max_value: -20},
        {id: 3, name: "Температура кондиционера", value: 10, max_value: 25}
      ]
    }
  },
  mounted() {
    //сюда позже добавим fetch/axios к настоящему API.
  }
}
</script>

<style scoped lang = "scss">
* {  
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.cards-wrapper {
  padding-top: 25px;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.card {
  display: flex;
  justify-content: space-around;
  max-width: 25vw;
}
.card-name::before {
  content: "Предмет:";
  font-size: 1.25rem;
  display: block;
  margin: 0.5rem 0;
}
.card-name::after {
  content: "Состояние:...";
  font-size: 1.25rem;
  display: block;
  margin: 0.5rem 0;
}
.card-name {
  
  font-size: 1.5rem;
}
.card img {
  max-width: 50%;
  border-radius: 10px;
}
.sensors-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.sensor-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
}
h1 {
  padding: 10px;
  margin-top: 55px;
  font-size: 28px;
  box-shadow: 2px 2px 5px 2px;
  border: solid 2px tan;
  border-radius: 10px;
}
p {
  padding: 10px;
  margin: 10px;
  font-size: 18px;
    box-shadow: 2px 2px 5px 2px;
  border: solid 2px tan;
  border-radius: 10px;
}
@media (max-width: 1200px) {
  .cards-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .card {
    margin: 15px 0;
  }
}
</style>