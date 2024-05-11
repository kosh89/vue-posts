<script setup>

import MyInput from "@/components/MyInput.vue";
import MyTextarea from "@/components/MyTextarea.vue";
</script>

<template>
  <div class="wrapper">
    <div class="post-form">
      <h2>Новый пост</h2>

      <MyInput>Название</MyInput>
      <MyTextarea>Текст</MyTextarea>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>