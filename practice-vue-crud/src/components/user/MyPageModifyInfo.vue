<template>
  <div class="my_page_modify_info_main">
    <div class="my_page_modify_info_content">
      <label class="modify_info_input_wrapper">
        닉네임 변경
        <div class="modify_info_input_btn_wrapper">
          <input type="text" v-model="newNickname" /><button
            @click="changeNickname"
          >
            변경
          </button>
        </div>
      </label>
      <label class="modify_info_input_wrapper">
        이메일 변경
        <div class="modify_info_input_btn_wrapper">
          <input type="text" v-model="newEmail" /><button @click="changeEmail">
            변경
          </button>
        </div>
        <span v-if="emailFormHasError">이메일 형식이 올바르지 않습니다.</span>
      </label>
      <label class="modify_info_input_wrapper">
        비밀번호 변경
        <div class="modify_info_input_btn_wrapper">
          <input type="text" v-model="newPassword" /><button
            @click="changePassword"
          >
            변경
          </button>
        </div>
        <span v-if="passwordFormHasError"
          >비밀번호는 8~16자, 영어와 특수문자를 포함해주세요.</span
        >
      </label>
      <button
        class="modify_back_btn"
        @click="
          () => {
            router.go(-1);
          }
        "
      >
        뒤로 가기
      </button>
    </div>
  </div>
</template>

<script setup>
import { checkEmail, checkPassword } from "@/composables/checkInput";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const orgNickname = ref(store.state.nickname);
const newNickname = ref(orgNickname);
const orgEmail = ref(store.state.email);
const newEmail = ref(orgEmail);
const orgPassword = ref(store.state.password);
const newPassword = ref(orgPassword);
const emailFormHasError = ref(false);
const passwordFormHasError = ref(false);

const changeNickname = () => {
  store.commit("setNickname", newNickname);
  window.alert("닉네임이 변경되었습니다.");
  orgNickname.value = store.state.nickname;
};

const changeEmail = () => {
  if (emailFormHasError.value) {
    window.alert("이메일 형식을 다시 확인해주세요.");
  } else {
    store.commit("setEmail", newEmail);
    window.alert("이메일이 변경되었습니다.");
    orgEmail.value = store.state.email;
  }
};

const changePassword = () => {
  if (passwordFormHasError.value) {
    window.alert("비밀번호 형식을 다시 확인해주세요");
  } else {
    store.commit("setPassword", newPassword);
    window.alert("비밀번호가 변경되었습니다.");
    orgPassword.value = store.state.password;
  }
};

const checkEmailForm = () => {
  emailFormHasError.value = checkEmail(newEmail);
};
const checkPasswordForm = () => {
  passwordFormHasError.value = checkPassword(newPassword);
};

watch(newEmail, checkEmailForm);
watch(newPassword, checkPasswordForm);
</script>

<style>
.my_page_modify_info_main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modify_info_input_wrapper {
  display: flex;
  flex-direction: column;
}
.my_page_modify_info_content {
  padding: 30px 30px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 267px;
  height: auto;
}
.modify_info_input_wrapper input {
  margin-top: 10px;
  width: 80%;
  height: 30px;
  padding: 0 0 0 10px;
}
.modify_info_input_wrapper span {
  font-size: 11px;
}
.modify_info_input_btn_wrapper {
  display: flex;
  align-items: center;
}
.modify_info_input_btn_wrapper button {
  margin: 10px 0 5px 0;
  height: 30px;
  width: 20%;
  border: 1px solid white;
  background-color: black;
  color: white;
}
.modify_back_btn {
  height: 35px;
  border-radius: 15px;
  margin-top: 25px;
  margin-bottom: 15px;
  border: 1px solid white;
  background-color: black;
  color: white;
}
.modify_back_btn:hover {
  background: white;
  color: black;
}
</style>
