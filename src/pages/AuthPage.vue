<script setup>
import MyInput from "@/components/MyInput.vue";
import MyButton from "@/components/MyButton.vue";
import {ref} from "vue";
import {useRootStore} from "@/stores/root.js";
import axios from "axios";
import router from "@/router/index.js";
import FormError from "@/components/FormError.vue";

const rootStore = useRootStore();

const email = ref('');
const password = ref('');
const error = ref('');

const login = async () => {
  error.value = '';

  const response = await axios(`http://localhost:3000/users?login=${email.value}`)
  const user = response.data[0];

  if (!user) {
    error.value = 'Пользователь не найден';
    return;
  }

  if (user.password.toString() === password.value) {
    rootStore.setCurrentUser(response.data[0])
    router.push('/');
  } else {
    error.value = 'Неверный пароль';
  }
}
</script>

<template>

  <div class="auth">
    <form action="" @submit.prevent="login" class="auth__form">
      <MyInput :placeholder="'your email'" :name="'email'" v-model="email">Email</MyInput>
      <MyInput :placeholder="'password'" :name="'password'" v-model="password">Password</MyInput>
      <MyButton :type="'submit'" :class="'btn--green'" :disabled="!email || !password">Войти</MyButton>
      <FormError v-if="error">{{ error }}</FormError>
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