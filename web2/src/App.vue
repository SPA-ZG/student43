<template>
  <div class="app-container">
    <welcome msg="Hello!"/>
    <header>
      <nav class="navigation">
        <RouterLink to="/watches" class="nav-link">Watch collection</RouterLink>
        <div class="divider"></div>
        <RouterLink to="/converter" class="nav-link">Price conversion</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<script setup>
  import welcome from './components/TheWelcome.vue';
  import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
.app-container {
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin-top: 20px;
}

header {
  background-color: #333;
  color: white;
  padding: 10px;
}

.navigation {
  display: flex;
  justify-content: space-around;
  background-color: #eee;
  padding: 10px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.divider {
  width: 1px;
  height: 20px;
  background-color: #333;
  margin: 0 10px;
}

.nav-link:hover {
  color: #007BFF;
}

.currency-toggle {
  display: flex;
  align-items: center;
}

.currency-toggle button {
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  background-color: #eee;
  color: #333;
}

.currency-toggle button.active {
  background-color: #007BFF;
  color: white;
}
</style>
