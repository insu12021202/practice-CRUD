import { ref } from "vue";

const emailHasError = ref(true);
const passwordHasError = ref(true);
const repeatPasswordHasError = ref(true);
const nicknameHasError = ref(true);

const checkEmail = (username) => {
  // eslint-disable-next-line
  const validateEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!validateEmail.test(username.value) || !username.value) {
    emailHasError.value = true;
    return true;
  } else {
    emailHasError.value = false;
    return false;
  }
};

const checkNickDup = (nickname) => {
  const originNickname = localStorage.getItem(nickname.value);
  console.log(originNickname, nickname.value);
  if (originNickname !== "true" && nickname.value) {
    //중복되지 않고 닉네임이 있으면 false 반환
    nicknameHasError.value = false;
    return false;
  } else {
    //그렇지 않으면 true 반환
    nicknameHasError.value = true;
    return true;
  }
};

const checkNicknameIsNotEmpty = (nickname) => {
  if (!nickname.value) {
    return;
  }
};

const checkPassword = (password) => {
  const validatePassword =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  if (!validatePassword.test(password.value || !password.value)) {
    passwordHasError.value = true;
    return true;
  } else {
    passwordHasError.value = false;
    return false;
  }
};

const checkRepeatPassword = (password, repeatPassword) => {
  if (password.value !== repeatPassword.value || !repeatPassword.value) {
    repeatPasswordHasError.value = true;
    return true;
  } else {
    repeatPasswordHasError.value = false;
    return false;
  }
};

const isValidate = (username, nickname, password, repeatPassword) => {
  if (
    !emailHasError.value &&
    !passwordHasError.value &&
    !repeatPasswordHasError.value &&
    !nicknameHasError.value &&
    username.value &&
    nickname.value &&
    password.value &&
    repeatPassword.value
  ) {
    return true;
  } else {
    return false;
  }
};

export {
  checkEmail,
  checkNickDup,
  checkNicknameIsNotEmpty,
  checkPassword,
  checkRepeatPassword,
  isValidate,
};
