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
});

const logout = () => {
  localStorage.removeItem("authState");
  window.alert("로그아웃 되었습니다.");
  window.location.assign("/");
};
</script>

<style>
.nav {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  z-index: 1;
}
.nav_item {
  box-shadow: inset 0 0 0 0 white;
  width: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: 600;
  margin-right: 15px;
  margin-left: 15px;
  cursor: pointer;
  color: white;
  z-index: 1;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.nav_item:hover {
  background-color: black;
  color: black;
  box-shadow: inset 0 100px 0 0 white;
}
a {
  text-decoration: none;
  color: black;
}
</style>
