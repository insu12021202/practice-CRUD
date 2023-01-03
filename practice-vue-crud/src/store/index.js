import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    email: "",
    password: "",
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    setPassword(state, password) {
      state.password = password;
    },
  },
  plugins: [
    createPersistedState({
      paths: ["email", "password"],
    }),
  ],
});

export default store;
