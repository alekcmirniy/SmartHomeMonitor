<template>
  <div id="app">
    <header>
      <MainNavigation />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2025 Умный дом. Все права защищены.</p>
    </footer>
  </div>
</template>

<script>
import MainNavigation from './components/MainNavigation.vue';

export default {
  name: 'App',
  components: { MainNavigation }
};
</script>

<style scoped lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

header {
  background-color: tan;
  padding: 15px;
}

main {
  flex-grow: 1;
  padding: 20px;
}

footer {
  background-color: tan;
  text-align: center;
  padding: 10px 0;
  color: white;
  font-weight: bold;
}
</style>
