<script setup>
import {defineProps} from "vue";

const props = defineProps({
  classNames: {
    type: String
  }
})
</script>

<template>
  <button :class="props.classNames"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<style scoped>

</style>