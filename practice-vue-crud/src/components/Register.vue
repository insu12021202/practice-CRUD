<template>
  <div class="body_background">
    <form class="login_form_container" @submit.prevent>
      <div class="login_input_container">
        <label
          for="username"
          class="title_safe"
          :class="{ title_danger: emailHasError }"
          >이메일 주소 입력</label
        >
        <input
          name="username"
          type="text"
          v-model="username"
          placeholder="E-mail"
          class="input_safe"
          :class="{ input_danger: emailHasError }"
        />
        <p class="input_error_msg" :class="{ display_none: !emailHasError }">
          이메일 주소를 정확히 입력해주세요.
        </p>

        <label
          for="nickname"
          :class="{ title_danger: nicknameHasError || !nickname }"
          >닉네임 입력</label
        >
        <input
          name="nickname"
          type="text"
          v-model="nickname"
          placeholder="nickname"
          class="input_safe"
          :class="{ input_danger: nicknameHasError || !nickname }"
        />
        <p class="input_error_msg" :class="{ display_none: nickname }">
          닉네임을 입력해주세요.
        </p>
        <p class="input_error_msg" :class="{ display_none: !nicknameHasError }">
          닉네임 중복 확인이 필요합니다.
        </p>
        <button class="check_nick_dup_btn" @click="handleNickname">
          중복 체크
        </button>

        <label for="password" :class="{ title_danger: passwordHasError }"
          >비밀번호 입력</label
        >
        <input
          name="password"
          type="password"
          v-model="password"
          placeholder="password"
          class="input_safe"
          :class="{ input_danger: passwordHasError }"
        />
        <p class="input_error_msg" :class="{ display_none: !passwordHasError }">
          영문, 숫자, 특수문자를 조합하여 입력해주세요. (8~16자)
        </p>
        <label
          for="repeat_password"
          :class="{ title_danger: repeatPasswordHasError }"
          >비밀번호 재입력</label
        >
        <input
          name="repeat_password"
          type="password"
          v-model="repeatPassword"
          placeholder="repeat password"
          class="input_safe"
          :class="{ input_danger: repeatPasswordHasError }"
        />
        <p
          class="input_error_msg"
          :class="{ display_none: !repeatPasswordHasError }"
        >
          비밀번호가 일치하지 않습니다.
        </p>
        <button class="valid_btn" @click="registerUser" :disabled="!isValid">
          회원가입
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {
  checkEmail,
  checkNickDup,
  checkNicknameIsNotEmpty,
  checkPassword,
  checkRepeatPassword,
  isValidate,
} from "@/api/checkInput";
import router from "@/router";

const { ref } = require("@vue/reactivity");
const { watch, watchEffect } = require("@vue/runtime-core");
const { useStore } = require("vuex");

const store = useStore();

const username = ref("");
const nickname = ref("");
const password = ref("");
const repeatPassword = ref("");
const isValid = ref(false);
const emailHasError = ref(true);
const nicknameHasError = ref(true);
const passwordHasError = ref(true);
const repeatPasswordHasError = ref(true);

const handleEmail = () => {
  const result = checkEmail(username);
  emailHasError.value = result;
  isValid.value = isValidate(username, nickname, password, repeatPassword);
};

const handlePassword = () => {
  const result = checkPassword(password);
  passwordHasError.value = result;
  isValid.value = isValidate(username, nickname, password, repeatPassword);
};

const handleRepeatPassword = () => {
  const result = checkRepeatPassword(password, repeatPassword);
  repeatPasswordHasError.value = result;
  isValid.value = isValidate(username, nickname, password, repeatPassword);
};

const handleNickname = () => {
  const result = checkNickDup(nickname); //중복되지 않으면 false 반환
  nicknameHasError.value = result;
  isValid.value = isValidate(username, nickname, password, repeatPassword);
  console.log("is", isValid.value);
  console.log("error", nicknameHasError.value);
};

const registerUser = () => {
  isValid.value = isValidate(username, nickname, password, repeatPassword);
  if (isValid.value) {
    store.commit("setEmail", username.value);
    store.commit("setNickname", nickname.value);
    store.commit("setPassword", password.value);
    localStorage.setItem(nickname.value, true);

    window.alert("정상적으로 회원가입 되었습니다.");
    router.push("/login");
  } else {
    window.alert("입력 정보를 다시 확인해주세요.");
  }
};

watch(username, handleEmail);
watch(password, handlePassword);
watch(repeatPassword, handleRepeatPassword);
watchEffect(nickname, checkNicknameIsNotEmpty(nickname));
</script>

<style>
.title_safe {
  font-weight: 600;
  margin: 10px 0 5px 0;
}
.title_danger {
  font-weight: 600;
  color: rgb(231, 33, 33);
  margin: 10px 0 5px 0;
}
.input_safe {
  font-weight: 600;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
}
.input_danger {
  border-bottom: 1px solid rgb(231, 33, 33);
}
.input_error_msg {
  margin: 5px 0 5px 0;
  color: rgb(231, 33, 33);
  font-size: 12px;
}
.display_none {
  display: none;
}
.check_nick_dup_btn {
  cursor: pointer;
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 5px;
  width: 70px;
  margin-bottom: 15px;
  border: none;
  background-color: black;
  color: white;
  margin-top: 5px;
}
</style>
