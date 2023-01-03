import { ref } from "vue";

const valid = ref({
  email: false,
  password: false,
  repeatPassword: false,
});
const emailHasError = ref(true);
const passwordHasError = ref(true);
const repeatPasswordHasError = ref(true);
const isValid = ref(false);

const checkEmail = (username) => {
  // eslint-disable-next-line
  const validateEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!validateEmail.test(username.value) || !username.value) {
    valid.value.email = true;
    emailHasError.value = true;
    return true;
  } else {
    valid.value.email = false;
    emailHasError.value = false;
    return false;
  }
};

const checkPassword = (password) => {
  const validatePassword =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  if (!validatePassword.test(password.value || !password.value)) {
    valid.value.password = true;
    passwordHasError.value = true;
    return true;
  } else {
    valid.value.password = false;
    passwordHasError.value = false;
    return false;
  }
};

const checkRepeatPassword = (password, repeatPassword) => {
  if (password.value !== repeatPassword.value || !repeatPassword.value) {
    valid.value.repeatPassword = true;
    repeatPasswordHasError.value = true;
    return true;
  } else {
    valid.value.repeatPassword = false;
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
