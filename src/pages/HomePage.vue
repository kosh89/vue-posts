<script setup>
import PostItem from "@/components/PostItem.vue";
import {useRootStore} from "@/stores/root.js";
import {storeToRefs} from "pinia";

const rootStore = useRootStore();
const { currentUser, posts } = storeToRefs(rootStore);


</script>

<template>
  <div class="wrapper">
    <div class="posts">
      <ul class="posts__list">
        <li class="posts__item" v-for="post in posts">
          <PostItem
              :id="post.id"
              :title="post.title"
              :description="post.description"
              :date="post.createdAt"
              :currentUserId="currentUser.id"
          ></PostItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.posts {
  &__list {
    max-width: 600px;
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }

  &__item {
    margin-bottom: 16px;
  }
}
</style>