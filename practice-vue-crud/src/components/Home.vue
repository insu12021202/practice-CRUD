<template>
  <div class="body_background">
    <div class="home_container">
      <h1 v-if="authState === 1">{{ nickname }}님 환영합니다.</h1>
      <h1 v-if="authState === 0">로그인이 필요합니다.</h1>
      <button @click="checkID">아이디 확인</button>
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
});

const store = useStore();

const checkID = () => {
  const email = computed(() => store.state.email);
  const password = computed(() => store.state.password);
  console.log(email.value, password.value);
};
</script>

<style>
.body_background {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
}
.home_container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
</style>
