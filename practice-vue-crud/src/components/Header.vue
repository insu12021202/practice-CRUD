<template>
  <nav class="nav">
    <router-link to="/" class="nav_item">Home</router-link> |
    <router-link to="/login" class="nav_item">Log In</router-link> |
    <router-link to="/register" class="nav_item">Register</router-link>
  </nav>
  <router-view />
</template>

<script setup></script>

<style>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: antiquewhite;
}
.nav_item {
  margin-right: 10px;
  margin-left: 10px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
