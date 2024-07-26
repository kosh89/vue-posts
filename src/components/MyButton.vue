<script setup>
import {defineProps, defineEmits} from 'vue';

const props = defineProps({
  type: {
    type: String,
  },
  classNames: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click']);

const onClick = (event) => {
  emit('click', event);
}
</script>

<template>
  <button class="btn"
      :type="props.type"
      :class="classNames"
      :disabled="disabled"
      @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.label {
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
  height: 40px;
  padding: 5px;
}
</style>