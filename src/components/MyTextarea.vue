<script setup>
import {defineProps, defineEmits} from 'vue';

const props = defineProps({
  name: {
    type: String,
  },
  placeholder: {
    type: String
  },
  modelValue: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue']);

const updateValue = (value) => {
  emit('update:modelValue', value);
}
</script>

<template>
  <label class="label">
    <slot></slot>
    <textarea
           class="textarea"
           :name="props.name"
           :value="props.modelValue"
           :placeholder="props.placeholder"
           @input="updateValue($event.target.value)"
    ></textarea>
  </label>
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
.textarea {
  width: 100%;
  min-height: 150px;
  padding: 5px;
}
</style>