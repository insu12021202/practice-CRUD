<template>
  <div class="body_background">
    <button
      class="go_top_btn"
      :class="{ display_none: !isActive }"
      @click="scroll_top"
    >
      TOP
    </button>
    <div v-if="error">{{ error }}</div>
    <RotateLoader v-if="!data" :color="loadingColor"></RotateLoader>
    <table v-else class="board_table">
      <colgroup>
        <col width="10%" />
        <col width="65%" />
        <col width="25%" />
      </colgroup>
      <th>No</th>
      <th>제목</th>
      <th>앨범ID</th>
      <tr v-for="item in data" v-bind:key="item">
        <td class="board_num">
          <router-link :to="`/board-album/${item.id}`">{{
            item.id
          }}</router-link>
        </td>
        <td>
          <router-link :to="`/board-album/${item.id}`">{{
            item.title
          }}</router-link>
        </td>
        <td>
          <router-link :to="`/board-album/${item.id}`">{{
            item.albumId
          }}</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import fetchingData from "@/composables/fetchingData";
import RotateLoader from "vue-spinner/src/RotateLoader.vue";
import { onMounted, ref } from "vue";
const { data, error, load } = fetchingData(
  "https://jsonplaceholder.typicode.com/albums/1/photos"
);
const isActive = ref(false);
const loadingColor = "#000000";

onMounted(() => {
  load();
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
  border: none;
  padding: 10px;
  border-radius: 15px;
  background-color: black;
  cursor: pointer;
  color: white;
}
.display_none {
  display: none;
}
.board_num {
  font-weight: 600;
}
</style>
