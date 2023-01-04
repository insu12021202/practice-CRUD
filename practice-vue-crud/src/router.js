import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Board from "./components/user/Board.vue";
import BoardArticle from "./components/user/BoardArticle.vue";
import MyPage from "./components/user/MyPage.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "LogIn", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/board", name: "Board", component: Board },
  { path: "/board/:articleId", name: "BoardArticle", component: BoardArticle },
  { path: "/mypage", name: "Mypage", component: MyPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
