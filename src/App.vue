<script setup>
import { RouterView } from 'vue-router'
import {useRootStore} from "@/stores/root.js";
import router from "@/router/index.js";
import {storeToRefs} from "pinia";
import {computed} from "vue";

const rootStore = useRootStore();
const { currentUser } = storeToRefs(rootStore);
rootStore.getPosts();
const logout = () => {
  rootStore.clearCurrentUser();
  router.push('/auth');
}

const isWriter = computed(() => {
  return rootStore.currentUser.role === 'writer';
})
</script>

<template>
  <header class="header">
    <RouterLink to="/">Главная</RouterLink>
    <RouterLink v-if="isWriter" to="/new/">Новый пост</RouterLink>
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

  a + a {
    margin-left: 10px;
  }

  .divider {
    margin: 0 auto;
  }
}
</style>