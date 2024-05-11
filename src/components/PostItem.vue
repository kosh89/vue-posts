<script setup>
import {computed, defineProps} from 'vue';
import {useRootStore} from "@/stores/root.js";
import {storeToRefs} from "pinia";

const rootStore = useRootStore();
const { currentUser } = storeToRefs(rootStore);

const props = defineProps({
  id: {
    required: true,
  },
  title: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String
  },
  currentUserId: {
    required: true,
  }
})

const isAuthor = computed(() => {
  return currentUser.value.id.toString() === props.id.toString();
})
</script>

<template>
  <div class="post">
    <h2 class="post__title">{{ title }}</h2>
    <p class="post__text">
      {{ description }}
    </p>
    <div class="post__bottom">
      <span class="post__date">{{ new Date(date).toLocaleString() }}</span>

      <div class="post__buttons" v-if="currentUser.isAuthorized">
        <button class="post__btn" v-if="!isAuthor">clap</button>
        <a href="" class="post__btn" v-if="isAuthor">Изменить</a>
        <button class="post__btn" v-if="isAuthor">Удалить</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post {
  background-color: whitesmoke;
  color: #111;

  &__title {
    padding: 4px 16px;
    background-color: #2078d0;
    color: #fff;
  }

  &__text {
    padding: 16px;
  }

  &__bottom {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 16px;
  }

  &__date {
    align-self: flex-end;
    margin-right: auto;
    font-size: 12px;
    line-height: 1;
  }

  &__buttons {
    display: flex;
    gap: 8px;
  }

  &__btn {
    padding: 4px 8px;
    font-size: 14px;
    text-decoration: none;
    white-space: nowrap;
    border: none;
    background-color: lightgray;
    color: #111;
    cursor: pointer;

    &:hover {
      background-color: #bebebe;
    }
  }
}
</style>