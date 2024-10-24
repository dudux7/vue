<template>
  <Navbar :logo="logo_src" :alt="app_name"/>
  <Router-View/>
</template>

<script>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';


export default {
components: {
  Navbar,
},
data() {
  return {
    logo_src: "/img/logo.png",
    app_name: "rick and morty"
  }
}
}
</script>

<style>



@import url('https://fonts.googleapis.com/css2?family=Creepster&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: "Creepster", system-ui;
  font-weight: 500;
  font-style: normal;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}

body {
  background-image: url('../public/img/backgound.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.main-container {
  margin: 50px;
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>