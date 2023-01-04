<template>
  <div class="body_background">
    <form class="login_form_container" @submit.prevent>
      <div class="login_input_container">
        <label for="username" class="input_label">Email</label>
        <input
          class="input_safe"
          name="username"
          type="text"
          v-model="username"
          placeholder="E-mail"
        />
        <label for="password" class="input_label">Password</label>
        <input
          class="input_safe"
          name="password"
          type="password"
          v-model="password"
          placeholder="password"
        />
        <button class="valid_btn" @click="checkInfo" :disabled="!isValid">
          Log In
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import router from "@/router";
import { computed, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const username = ref("");
const password = ref("");
const isValid = ref(false);
const userEmail = computed(() => store.state.email);
const userPassword = computed(() => store.state.password);

//사용자의 입력 정보와 기존 유저 정보를 비교
const checkInfo = () => {
  if (username.value === userEmail.value) {
    if (password.value === userPassword.value) {
      window.alert("로그인 성공");
      localStorage.setItem("authState", 1);
      window.location.assign("/");
    } else {
      window.alert("비밀번호를 다시 확인하세요.");
    }
  } else {
    window.alert("이메일을 다시 확인하세요.");
  }
};

const checkValid = () => {
  if (username.value && password.value) {
    isValid.value = true;
  }
};

watch([username, password], checkValid, {
  immediate: true, // 초기 렌더링 시점 호출 여부 설정
  deep: true, // 중첩 데이터 감시 여부 설정
});
</script>

<style>
.login_form_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 400px;
}
.login_input_container {
  display: flex;
  width: 60%;
  flex-direction: column;
}
.valid_btn {
  margin-top: 20px;
  border: none;
  height: 35px;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
}
.input_label {
  font-weight: 600;
  margin-bottom: 5px;
}
</style>
