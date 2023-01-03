<template>
  <div class="body_background">
    <form class="login_form_container" @submit.prevent>
      <div class="login_input_container">
        <label for="username" :class="{ title_danger: emailHasError }"
          >Email</label
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
          >Password</label
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
          >Reapeat Password</label
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
        <button class="submit_btn" @click="registerUser">Register</button>
      </div>
    </form>
  </div>
</template>

<script setup>
const { ref } = require("@vue/reactivity");
const { watch } = require("@vue/runtime-core");

const username = ref("");
const valid = ref({
  email: false,
  password: false,
  repeatPassword: false,
});
const password = ref("");
const repeatPassword = ref("");
const isValidate = ref(false);
const emailHasError = ref(true);
const passwordHasError = ref(true);
const repeatPasswordHasError = ref(true);

const checkEmail = () => {
  // eslint-disable-next-line
  const validateEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!validateEmail.test(username.value) || !username.value) {
    valid.value.email = true;
    emailHasError.value = true;
  } else {
    valid.value.email = false;
    emailHasError.value = false;
  }
};

const checkPassword = () => {
  const validatePassword =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  if (!validatePassword.test(password.value || !password.value)) {
    valid.value.password = true;
    passwordHasError.value = true;
  } else {
    valid.value.password = false;
    passwordHasError.value = false;
  }
};

const checkRepeatPassword = () => {
  if (password.value !== repeatPassword.value || !repeatPassword.value) {
    repeatPasswordHasError.value = true;
    valid.value.repeatPassword = true;
  } else {
    repeatPasswordHasError.value = false;
    valid.value.repeatPassword = false;
  }
};

const registerUser = () => {
  if (
    emailHasError &&
    passwordHasError &&
    repeatPasswordHasError &&
    username.value &&
    password.value &&
    repeatPassword.value
  ) {
    console.log("등록 완료");
    console.log(`username: ${username.value} password: ${password.value}`);
  } else {
    window.alert("입력 정보를 다시 확인해주세요.");
  }
};

watch(username, checkEmail);
watch(password, checkPassword);
watch(repeatPassword, checkRepeatPassword);
</script>

<style>
.title_danger {
  color: red;
  margin-bottom: 5px;
}
.input_safe {
  border-bottom: 1.5px solid black;
}
.input_danger {
  border-bottom: 1.5px solid red;
}
.input_error_msg {
  margin: 5px;
  color: red;
  font-size: 12px;
}
.display_none {
  display: none;
}
</style>