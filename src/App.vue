<!-- src/App.vue -->
<script setup>
// ✅ 引入全局 Header 组件
import BHeader from './components/BHeader.vue'
</script>

<template>
  <!-- 顶部导航栏 -->
  <BHeader />

  <!-- 页面主内容区域，加载路由视图 -->
  <main class="container mt-5">
    <router-view />
  </main>
</template>

<style>
/* 设置主容器最大宽度，适配 Bootstrap 样式 */
.container {
  max-width: 800px;
}
</style>
