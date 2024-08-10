<script lang="ts" setup>
import { useData } from "vitepress";

const { title } = useData();
</script>
<template>
  <div class="layout">
    <van-nav-bar :title="title" />
    <Content />
  </div>
</template>
<style lang="scss" scoped></style>
