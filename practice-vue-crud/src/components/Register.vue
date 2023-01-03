<template>
  <div class="body_background">
    <form class="login_form_container" @submit.prevent>
      <div class="login_input_container">
        <label for="username" :class="{ title_danger: emailHasError }"
          >이메일 주소 입력</label
        >
        <input
          @change="checkValidateEmail"
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
  checkPassword,
  checkRepeatPassword,
  isValidate,
} from "@/api/checkInput";

const { ref } = require("@vue/reactivity");
const { watch } = require("@vue/runtime-core");
const { useStore } = require("vuex");

const store = useStore();

const username = ref("");
const password = ref("");
const repeatPassword = ref("");
const isValid = ref(false);
const emailHasError = ref(true);
const passwordHasError = ref(true);
const repeatPasswordHasError = ref(true);

const handleEmail = () => {
  const result = checkEmail(username);
  emailHasError.value = result;
  isValid.value = isValidate(username, password, repeatPassword);
};

const handlePassword = () => {
  const result = checkPassword(password);
  passwordHasError.value = result;
  isValid.value = isValidate(username, password, repeatPassword);
};

const handleRepeatPassword = () => {
  const result = checkRepeatPassword(password, repeatPassword);
  repeatPasswordHasError.value = result;
  isValid.value = isValidate(username, password, repeatPassword);
};

const registerUser = () => {
  isValid.value = isValidate(username, password, repeatPassword);
  if (isValid.value) {
    store.commit("setEmail", username.value);
    store.commit("setPassword", password.value);
    console.log("등록 완료");
    console.log(`username: ${username.value} password: ${password.value}`);
  } else {
    window.alert("입력 정보를 다시 확인해주세요.");
  }
};

watch(username, handleEmail);
watch(password, handlePassword);
watch(repeatPassword, handleRepeatPassword);
</script>

<style>
.title_danger {
  font-weight: 600;
  color: red;
  margin-bottom: 5px;
}
.input_safe {
  border-bottom: 1px solid black;
}
.input_danger {
  border-bottom: 1px solid red;
}
.input_error_msg {
  margin: 5px 0 20px 0;
  color: red;
  font-size: 12px;
}
.display_none {
  display: none;
}
</style>
