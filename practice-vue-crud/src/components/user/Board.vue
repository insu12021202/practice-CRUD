<template>
  <div class="body_background">
    <button
      class="go_top_btn"
      :class="{ display_none: !isActive }"
      @click="scroll_top"
    >
      위로 가기
    </button>
    <table class="board_table">
      <colgroup>
        <col width="10%" />
        <col width="65%" />
        <col width="25%" />
      </colgroup>
      <th>No</th>
      <th>제목</th>
      <th>작성자</th>

      <tr v-for="item in data" v-bind:key="item">
        <td>
          <router-link :to="`/board/${item.id}`">{{ item.id }}</router-link>
        </td>
        <td>
          <router-link :to="`/board/${item.id}`">{{ item.title }}</router-link>
        </td>
        <td>
          <router-link :to="`/board/${item.id}`">{{ item.userId }}</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
const { onMounted, ref } = require("@vue/runtime-core");
const { default: axios } = require("axios");
const data = ref();
const isActive = ref(false);
const fetchBoardAllData = () => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    data.value = res.data;
  });
};
onMounted(() => {
  fetchBoardAllData();
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    isActive.value = true;
  } else {
    isActive.value = false;
  }
});
const scroll_top = () => {
  window.scrollTo(0, 0);
};
</script>

<style>
.board_table {
  margin-top: 20px;
  width: 80%;
  border-collapse: collapse;
  border-spacing: 0;
}
.board_table td,
.board_table th {
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid black;

  white-space: nowrap;
}
.go_top_btn {
  position: fixed;
  bottom: 50px;
  right: 20px;
}
.display_none {
  display: none;
}
</style>
