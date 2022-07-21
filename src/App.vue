<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Bookstore</RouterLink>
        <RouterLink to="/carrinho">Carrinho</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  height: 100vh;
  
}

header {
  height: 10%;
  background-color: #2596be;
  color: whitesmoke;
  font-size: 1.5em;
  display: flex;
  align-items: center;
}



main {
  padding: 10px;
}
</style>