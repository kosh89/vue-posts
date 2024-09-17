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
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 3px 12px;
  color: #111;
  border: 1px solid #111;
  border-radius: 4px;
  font-size: 15px;
  line-height: 23px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &--green {
    background-color: #137A2B;
    border: 1px solid #137A2B;
    color: #fff;

    &:hover {
      background-color: #fff;
      border: 1px solid #137A2B;
      color: #137A2B;
    }
  }

  &[disabled] {
    background-color: #dedede;
    border: 1px solid #dedede;
    color: #a1a1a1;
    pointer-events: none;
  }
}
</style>