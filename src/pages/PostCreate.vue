<script setup>
import MyInput from "@/components/MyInput.vue";
import MyTextarea from "@/components/MyTextarea.vue";
import MyButton from "@/components/MyButton.vue";
import {useRootStore} from "@/stores/root.js";
import {computed, ref} from "vue";
import {storeToRefs} from "pinia";
const rootStore = useRootStore();

const { currentUser } = storeToRefs(rootStore);

const title = ref('');
const text = ref('');

const isDisabled = computed(() => {
  return title.value === '' || text.value === '';
})
const createPost = () => {
  const post = {
    "id": Date.now().toString(),
    "title": title.value,
    "description": text.value,
    "claps": 0,
    "createdAt": new Date(),
    "updateAt": new Date(),
    "userId": currentUser.value.id
  }

  rootStore.addPost(post);
}
</script>

<template>
  <div class="wrapper">
    <div class="post-form">
      <h2>Новый пост</h2>

      <MyInput :name="'title'" v-model="title">Название</MyInput>
      <MyTextarea :name="'text'" v-model="text">Текст</MyTextarea>
      <MyButton @click="createPost" :class="'btn--green'" :disabled="isDisabled">Создать</MyButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-form {
  display: flex;
  flex-direction: column;
}

.label {
  margin-bottom: 8px;
}

.btn {
  align-self: flex-end;
}
</style>