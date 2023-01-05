<template>
  <div class="body_background">
    <div v-if="error">{{ error }}</div>
    <RotateLoader v-if="!data" :color="loadingColor"></RotateLoader>
    <div v-else class="article_container">
      <div class="article_header">
        <span class="article_title">{{ data.title }}</span>
        <span class="article_author_id">{{ data.albumId }}</span>
      </div>
      <div class="article_content">
        <img class="article_img" :src="data.url" />
      </div>
    </div>
  </div>
</template>

<script setup>
import loadingColor from "@/common/color";
import fetchingData from "@/composables/fetchingData";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import RotateLoader from "vue-spinner/src/RotateLoader.vue";
const route = useRoute();
const articleId = route.params.articleId;
const { data, error, load } = fetchingData(
  `https://jsonplaceholder.typicode.com/photos/${articleId}`
);
onMounted(() => {
  load();
});
</script>

<style>
.article_img {
  width: 200px;
  height: 200px;
}
</style>
