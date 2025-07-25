<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/cn";

interface Props {
  modelValue?: string;
  placeholder?: string;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "What would you like to know?",
});

const { textarea, input } = useTextareaAutosize({
  input: props.modelValue,
});

watch(input, (value) => emits("update:modelValue", value));

const emits = defineEmits<{
  (e: "update:modelValue", payload: string): void;
}>();
</script>

<template>
  <textarea
    ref="textarea"
    v-model="input"
    name="message"
    :placeholder="placeholder"
    :class="
      cn(
        'max-h-40 w-full resize-none rounded-none border-none p-4 text-sm shadow-none ring-0 outline-none',
        'bg-transparent dark:bg-transparent',
        'focus-visible:ring-0',
        props.class,
      )
    "
    rows="1"
    v-bind="$attrs"
  />
</template>

<style scoped>
textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

textarea::-webkit-scrollbar {
  display: none;
}
</style>
