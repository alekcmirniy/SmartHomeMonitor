<template>
  <main class="monitor-page" aria-labelledby="monitor-title">
    <h1 id="monitor-title">Умный дом — мониторинг</h1>
    <section class="sensor-list" aria-live="polite" aria-atomic="true">
      <article
        class="sensor-card"
        v-for="sensor in sensors"
        :key="sensor.id"
      >
        <img :src="sensor.icon" :alt="sensor.name + ' иконка'" />
        <h3>{{ sensor.name }}</h3>
        <p>{{ sensor.value }}</p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'MonitorView',
  data() {
    return {
      sensors: [
        {
          id: 1,
          name: "Температура",
          value: "20°C",
          icon: require('../assets/icons/temperature.png')
        },
        {
          id: 2,
          name: "Влажность",
          value: "55%",
          icon: require('../assets/icons/humidity.png')
        },
        {
          id: 3,
          name: "Датчик движения",
          value: "Активен",
          icon: require('../assets/icons/motion.png')
        }
      ]
    };
  }
}
</script>

<style scoped lang="scss">
.monitor-page {
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

.sensor-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
}

.sensor-card {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 7px rgba(0,0,0,0.1);
  width: 180px;
  text-align: center;
}

.sensor-card img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.sensor-card h3 {
  margin: 10px 0 5px 0;
  font-weight: bold;
}

.sensor-card p {
  font-size: 18px;
  color: #333;
}
</style>
