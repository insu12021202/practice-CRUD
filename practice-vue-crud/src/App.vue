<template>
  <Header></Header>
</template>
<script setup>
import Header from "./components/Header.vue";
import store from "./store";
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
input {
  outline: none;
  border: none;
  height: 25px;
  margin-bottom: 5px;
}
button:disabled {
  background-color: rgb(211, 211, 211);
  color: white;
}
</style>
