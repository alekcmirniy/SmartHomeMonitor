<template>
  <div class = "page controls-page">
    <h1>Умный дом - управление</h1>
    <div class = "control-grid">
      <div class = "control-card" v-for = "device in devices" :key="device.id">
        <h3>{{ device.name }}</h3>
        <button @click = "toggleDevice(device.id)">
          {{ device.state ? "Выключить" : "Включить" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ControlView',
  data() {
    return {
      devices: [
        {id: 1, name: "Яндекс Алиса", state: false},
        {id: 2, name: "Холодильник", state: true},
        {id: 3, name: "Кондиционер", state: false}
      ]
    }
  },
  methods: {
    toggleDevice(id) {
      const idx = this.devices.findIndex(d => d.id === id);
      this.devices[idx].state = !this.devices[idx].state;
      //потом добавим вызов API для реального переключения
    }
  },
  mounted() {
    //сюда добавим запрос к API для получения актуальных состояний
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
.control-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.control-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
}
h1 {
  margin-top: 55px;
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