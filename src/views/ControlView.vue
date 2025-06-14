<template>
  <main class="page controls-page" aria-labelledby="control-title">
    <h1 id="control-title">Умный дом — управление</h1>
    <div class="control-grid">
      <div class="control-card" v-for="device in devices" :key="device.id">
        <h3>{{ device.name }}</h3>
        <button
          @click="toggleDevice(device.id)"
          :aria-pressed="device.state.toString()"
          :class="{ active: device.state }"
        >
          {{ device.state ? "Выключить" : "Включить" }}
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ControlView',
  data() {
    return {
      devices: [
        { id: 1, name: "Яндекс Алиса", state: false },
        { id: 2, name: "Холодильник", state: true },
        { id: 3, name: "Кондиционер", state: false }
      ]
    };
  },
  methods: {
    toggleDevice(id) {
      const idx = this.devices.findIndex(d => d.id === id);
      // Обновим состояние реактивно
      this.devices[idx].state = !this.devices[idx].state;
    }
  }
}
</script>

<style scoped lang="scss">
.page {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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

button {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 6px;
  border: 2px solid tan;
  background-color: white;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

button:hover,
button:focus {
  outline: none;
  background-color: tan;
  color: white;
}

button.active {
  background-color: tan;
  color: white;
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
