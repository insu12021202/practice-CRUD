import { ref } from "vue";

const emailHasError = ref(true);
const passwordHasError = ref(true);
const repeatPasswordHasError = ref(true);

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

const isValidate = (username, password, repeatPassword) => {
  if (
    !emailHasError.value &&
    !passwordHasError.value &&
    !repeatPasswordHasError.value &&
    username.value &&
    password.value &&
    repeatPassword.value
  ) {
    return true;
  } else {
    return false;
  }
};

export { checkEmail, checkPassword, checkRepeatPassword, isValidate };
