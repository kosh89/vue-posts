<script setup>
import { RouterView } from 'vue-router'
import {useRootStore} from "@/stores/root.js";
import router from "@/router/index.js";
import {storeToRefs} from "pinia";

const rootStore = useRootStore();
const { currentUser } = storeToRefs(rootStore);
rootStore.getPosts();
const logout = () => {
  rootStore.clearCurrentUser();
  router.push('/auth');
}
</script>

<template>
  <header class="header">
    <RouterLink v-if="!currentUser" to="/new/">Новый пост</RouterLink>
    <div class="divider"></div>
    <RouterLink v-if="!currentUser" to="/auth/">Логин</RouterLink>
    <a v-if="currentUser" class="" @click="logout">Выйти</a>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: flex-end;
  height: 50px;
  padding: 10px;
  background-color: #13477a;

  a {
    color: #fff;
    text-decoration: none;
  }

  .divider {
    margin: 0 auto;
  }
}
</style>