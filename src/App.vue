<template>
  <div id = "app">
    <MainNavigation />
    <main class = "content-wrapper">
      <!-- Здесь рендерится текущая вьюха -->
       <router-view />
    </main>
  </div>
</template>

<script>
  import MainNavigation from './components/MainNavigation.vue';

export default {
  name: 'App',
  components: {
    MainNavigation
  }
}
</script>

<style lang = "scss">
@import '../src/styles/variables.scss';
@import '../src/styles/main.scss';

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content-wrapper {
  flex: 1;
  padding: 20px;
}
</style>