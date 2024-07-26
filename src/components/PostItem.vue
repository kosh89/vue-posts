<script setup>
import {computed, defineProps} from 'vue';
import {useRootStore} from "@/stores/root.js";
import {storeToRefs} from "pinia";
import MyButton from "@/components/MyButton.vue";

const rootStore = useRootStore();
const { currentUser } = storeToRefs(rootStore);

const props = defineProps({
  id: {
    required: true,
  },
  userId: {
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
  return currentUser.value.id.toString() === props.userId.toString();
})

const deleteClick = () => {
  rootStore.deletePost(props.id);
}
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
        <MyButton :class="'btn--blue'" v-if="!isAuthor">clap</MyButton>
        <MyButton :class="'btn--blue'" v-if="isAuthor">Изменить</MyButton>
        <MyButton :class="'btn--blue'" v-if="isAuthor" @click="deleteClick">Удалить</MyButton>
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
}
</style>