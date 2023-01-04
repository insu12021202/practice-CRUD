<template>
  <nav v-if="authState === '1'" class="nav">
    <router-link
      v-for="menu in nav_user"
      :to="`${menu.url}`"
      class="nav_item"
      v-bind:key="menu"
      >{{ menu.name }}</router-link
    >
    <p class="nav_item" @click="logout">로그아웃</p>
  </nav>
  <nav v-else class="nav">
    <router-link
      v-for="menu in nav_not_logined"
      :to="`${menu.url}`"
      class="nav_item"
      v-bind:key="menu"
      >{{ menu.name }}</router-link
    >
  </nav>
  <router-view />
</template>

<script setup>
import { nav_user, nav_not_logined } from "@/const/nav_menu";
import router from "@/router";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
const authState = ref(0);
onMounted(() => {
  authState.value = localStorage.getItem("authState");
  console.log(authState.value);
});

const logout = () => {
  localStorage.removeItem("authState");
  window.alert("로그아웃 되었습니다.");
  authState.value = "0";
};
</script>

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
