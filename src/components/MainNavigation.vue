<template>
  <nav class="nav-bar" role="navigation" aria-label="Основная навигация">
    <ul class="nav-list">
      <li class="nav-item" v-for="link in links" :key="link.name">
        <router-link
          :to="link.path"
          class="nav-link"
          active-class="router-link-active"
          aria-current="page"
        >
          {{ link.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainNavigation",
  data() {
    return {
      links: [
        { name: "home", path: "/", label: "Главная" },
        { name: "monitor", path: "/monitor", label: "Мониторинг" },
        { name: "control", path: "/control", label: "Управление" },
        { name: "gallery", path: "/gallery", label: "Галерея" },
        { name: "info", path: "/info", label: "Информация" },
        { name: "contacts", path: "/contacts", label: "Контакты" },
        { name: "about", path: "/about", label: "О проекте" }
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.nav-bar {
  background-color: $color-primary;
  padding: 10px 20px;
}
.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}
.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 6px 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
.nav-link:hover,
.router-link-active {
  background-color: darken($color-primary, 10%);
  color: white;
}
</style>
