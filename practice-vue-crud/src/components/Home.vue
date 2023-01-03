<template>
  <div class="body_background">
    <button @click="checkID">아이디 확인</button>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const email = ref("");
const password = ref("");

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
</style>
