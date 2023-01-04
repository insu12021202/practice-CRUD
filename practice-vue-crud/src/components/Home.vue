<template>
  <div class="body_background">
    <div class="home_container">
      <h1 v-if="authState === '1'">{{ nickname }}님 환영합니다.</h1>
      <h1 v-else>로그인이 필요합니다.</h1>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
const nickname = ref("");
const authState = ref("");

onMounted(() => {
  nickname.value = computed(() => store.state.nickname);
  authState.value = localStorage.getItem("authState");
});

const store = useStore();
</script>

<style>
.home_container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
</style>
