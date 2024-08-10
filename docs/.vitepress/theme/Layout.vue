<script lang="ts" setup>
import { useData } from "vitepress";

import LayoutFooter from "./compontents/Footer.vue";

const { title } = useData();
</script>
<template>
  <div class="layout">
    <van-nav-bar :title="title" />
    <Content class="markdown-body" />
    <LayoutFooter />
  </div>
</template>
<style lang="scss" scoped>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
