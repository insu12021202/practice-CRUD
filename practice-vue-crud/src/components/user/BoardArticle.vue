<template>
  <div class="body_background">
    <div v-if="error">{{ error }}</div>
    <RotateLoader v-if="!data" :color="loadingColor"></RotateLoader>
    <div v-else class="article_container">
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
import loadingColor from "@/common/color";
import fetchingData from "@/composables/fetchingData";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
import { useRoute } from "vue-router";
import RotateLoader from "vue-spinner/src/RotateLoader.vue";

const route = useRoute();
const articleId = route.params.articleId;
const { data, error, load } = fetchingData(
  `https://jsonplaceholder.typicode.com/posts/${articleId}`
);

onMounted(() => {
  load();
});
</script>

<style>
.article_container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: 500px;
  background-color: black;
  padding: 20px;
}
.article_header {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: space-between;
  border-bottom: 2px solid white;
}
.article_title {
  margin-bottom: 5px;
  color: white;
}
.article_author_id {
  color: white;
}
.article_content {
  display: flex;
  align-items: center;
  width: 100%;
  height: 90%;
  color: white;
}
</style>
