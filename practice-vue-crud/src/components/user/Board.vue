<template>
  <div class="body_background">
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
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.userId }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
const { onMounted, ref } = require("@vue/runtime-core");
const { default: axios } = require("axios");
const data = ref();
const fetchBoardAllData = () => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    data.value = res.data;
  });
};
onMounted(() => {
  fetchBoardAllData();
});
</script>

<style>
.board_table {
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
</style>
