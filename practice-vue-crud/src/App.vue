<template>
  <Header></Header>
</template>
<script setup>
import Header from "./components/Header.vue";
import store from "./store";
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
body::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
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
.body_background {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  z-index: 0;
}
</style>
