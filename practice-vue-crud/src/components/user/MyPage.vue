<template>
  <div class="my_page_main">
    <div class="my_page_container">
      <div class="my_page_content">
        <span class="my_page_main_text">안녕하세요 {{ nickname }}님</span>

        <button
          class="my_page_info_view_btn"
          :class="{ slideDownMotion: isOpened }"
          @click="togglePopUp"
        >
          내 정보 확인하기
        </button>
        <div
          v-show="isOpened && !isAuthorized"
          class="checkPasswordWrapper"
          :class="{ fadeInMotion: isOpened }"
        >
          <label for="checkPassword"
            >본인 확인을 위해 비밀번호를 입력해주세요</label
          >
          <input
            class="checkPasswordInput"
            v-model="password"
            type="password"
            @keyup.enter="checkPassword"
          />
        </div>

        <div class="my_page_info_content" v-show="isOpened && isAuthorized">
          <div class="my_page_span_wrapper">
            <span><strong>닉네임:</strong> {{ nickname }}</span>
            <span><strong>아이디:</strong> {{ email }}</span>
          </div>
          <div class="my_page_btn_wrapper">
            <button class="my_page_modify_btn" @click="openModifyForm">
              정보 수정하기
            </button>
            <button class="my_page_modify_btn" @click="togglePopUp">
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import hideString from "@/composables/utils";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const isOpened = ref(false);
const password = ref("");
const isAuthorized = ref(false);
let nickname = store.state.nickname;
let email = hideString(store.state.email);
const storePassword = store.state.password;

const checkPassword = () => {
  if (storePassword === password.value) {
    isAuthorized.value = true;
  } else {
    console.log(storePassword, password.value);
  }
};

const togglePopUp = () => {
  isOpened.value = !isOpened.value;
};

const openModifyForm = () => {
  router.push("/mypage/modify-info");
};
</script>

<style>
.my_page_main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.my_page_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 50px;
  width: 100%;
  min-height: 100%;
}
.my_page_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  margin-top: 60px;
}
.my_page_span_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 67%;
}
.my_page_span_wrapper span {
  margin-top: 10px;
}
.my_page_btn_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 33%;
}
.my_page_info_view_btn {
  position: relative;
  z-index: 10;
  width: 327px;
  border-radius: 15px;
  background-color: black;
  color: white;
  padding: 0 20px;
  height: 40px;
  margin-top: 20px;
}
.slideDownMotion {
  animation: slideDown 1s;
  animation-fill-mode: forwards;
  pointer-events: none;
}
.my_page_modify_btn {
  border-radius: 15px;
  background-color: black;
  color: white;
  border: 1px solid white;
  padding: 0 20px;
  height: 35px;
}
.my_page_modify_btn:hover {
  background-color: white;
  color: black;
}
.my_page_main_text {
  font-size: 35px;
  font-weight: 600;
}
.my_page_sub_text {
  width: 100%;
  font-weight: 600;
}
.my_page_info_content {
  padding: 30px 30px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 267px;
  height: 250px;
  animation: slideIn 1s;
  margin-top: -30px;
}
.checkPasswordWrapper,
.modifyInfoWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 45%;
  left: 50%;
  margin-left: -150px;
}
.checkPasswordInput,
.changeInput {
  width: 200px;
  height: 30px;
  padding-left: 10px;
  z-index: 30;
  background-color: black;
  color: white;
  margin-top: 10px;
}
.fadeInMotion {
  animation: fadeIn 2s;
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translate3d(0, -30%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(-20%);
  }
}
@keyframes slideDown {
  from {
    opacity: 1;
    transform: translateZ(0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 150px, 0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
