<template>
  <div class = "page info-page">
    <h1>Умный дом - информация</h1>
    <p>Система мониторинга - совокупность свойств и методов управления умным домом</p>
  </div>
</template>

<script>
export default {
  name: 'InfoView'
}
</script>

<style scoped lang = "scss">
* {  
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.page {
  padding-top: 25px;
  text-align: center;
  max-width: 800px;
  margin: auto;
  line-height: 1.6;
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