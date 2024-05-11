<script setup>
import MyInput from "@/components/MyInput.vue";
import {ref} from "vue";
import {useRootStore} from "@/stores/root.js";
import axios from "axios";
import router from "@/router/index.js";

const rootStore = useRootStore();

const email = ref('');
const password = ref('');

const login = async () => {
  const response = await axios(`http://localhost:3000/users?login=${email.value}`)
  const user = response.data[0];

  if (user?.password.toString() === password.value) {
    rootStore.setCurrentUser(response.data[0])
    router.push('/');
  }
}
</script>

<template>

  <div class="auth">
    <form action="" @submit.prevent="login" class="auth__form">
      <MyInput placeholder="your email" name="email" v-model="email">Email</MyInput>
      <MyInput placeholder="password" name="password" v-model="password">Password</MyInput>
      <button type="submit">Войти</button>
    </form>
  </div>

</template>

<style lang="scss" scoped>
.auth {
  padding: 45px 20px;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>