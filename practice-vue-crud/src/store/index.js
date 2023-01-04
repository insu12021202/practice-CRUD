import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    email: "",
    nickname: "",
    password: "",
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    setNickname(state, nickname) {
      state.nickname = nickname;
    },
    setPassword(state, password) {
      state.password = password;
    },
  },
  plugins: [
    createPersistedState({
      paths: ["email", "password", "nickname"],
    }),
  ],
});

export default store;
