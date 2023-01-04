<template>
  <div class="body_background">
    <div v-if="data" class="article_container">
      <div class="article_header">
        <span class="article_title">{{ data.title }}</span>
        <span class="article_author_id">{{ data.userId }}</span>
      </div>
      <div class="article_content">
        <span class="article_content_text">{{ data.body }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
import { useRoute } from "vue-router";
const route = useRoute();
const data = ref();
const articleId = route.params.articleId;
const fetchBoardArticleData = () => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
    .then((res) => {
      data.value = res.data;
    });
};
onMounted(() => {
  fetchBoardArticleData();
});
</script>

<style>
.article_container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: 300px;
  background-color: beige;
  padding: 20px;
}
.article_header {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: space-between;
  border-bottom: 2px solid black;
}
.article_title {
  margin-bottom: 5px;
}
.article_content {
  display: flex;
  align-items: center;
  width: 100%;
  height: 90%;
}
</style>
