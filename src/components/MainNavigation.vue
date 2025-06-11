<template>
    <nav class = "nav-bar">
        <ul class = "nav-list">
            <li class = "nav-item">
                <router-link to="/" class = "nav-link">Главная</router-link>
            </li>
            <li class = "nav-item">
                <router-link to="/info" class = "nav-link">Информация</router-link>
            </li>
            <li class = "nav-item">
                <router-link to = "/gallery" class = "nav-link">Галерея</router-link>
            </li>
            <li class = "nav-item">
                <router-link to = "/monitor" class = "nav-link">Мониторинг</router-link>
            </li>
            <li class = "nav-item">
                <router-link to = "/control" class = "nav-link">Управление</router-link>
            </li>
            <li class = "nav-item">
                <router-link to = "/contacts" class = "nav-link">Контакты</router-link>
            </li>
            <li class = "nav-item">
                <router-link to = "/about" class = "nav-link">О нас</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'MainNavigation'
}
</script>

<style scoped lang = "scss">
.nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;;
    height: 60px;
    background-color: rosybrown;
    display: flex;
    align-items: center;
    z-index: 100;
}
.nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0 20px;
}
.nav-item {
    margin-right: 15px;
}
.nav-list a {
    color: white;
    text-decoration: none;
    font-weight: 500;
}
.nav-list a.router-link-active {
    border-bottom: 2px solid violet;
}
</style>