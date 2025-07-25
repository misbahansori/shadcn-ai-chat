<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/cn";

interface Props {
  modelValue?: string;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "What would you like to know?",
  minHeight: 48,
  maxHeight: 164,
});

const emits = defineEmits<{
  (e: "update:modelValue", payload: string): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
});

const textareaRef = ref<HTMLTextAreaElement>();

const adjustHeight = (reset?: boolean) => {
  const textarea = textareaRef.value;
  if (!textarea) {
    return;
  }

  if (reset) {
    textarea.style.height = `${props.minHeight}px`;
    return;
  }

  // Temporarily shrink to get the right scrollHeight
  textarea.style.height = `${props.minHeight}px`;

  // Calculate new height
  const newHeight = Math.max(
    props.minHeight,
    Math.min(
      textarea.scrollHeight,
      props.maxHeight ?? Number.POSITIVE_INFINITY,
    ),
  );
  textarea.style.height = `${newHeight}px`;
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
    e.preventDefault();
    const form = (e.target as HTMLTextAreaElement).form;
    if (form) {
      form.requestSubmit();
    }
  }
};

const handleInput = () => {
  adjustHeight();
};

onMounted(() => {
  // Set initial height
  const textarea = textareaRef.value;
  if (textarea) {
    textarea.style.height = `${props.minHeight}px`;
  }
});

// Adjust height on window resize
onMounted(() => {
  const handleResize = () => adjustHeight();
  window.addEventListener("resize", handleResize);
  onUnmounted(() => window.removeEventListener("resize", handleResize));
});
</script>

<template>
  <textarea
    ref="textareaRef"
    v-model="modelValue"
    name="message"
    :placeholder="placeholder"
    :class="
      cn(
        'w-full resize-none rounded-none border-none p-4 shadow-none ring-0 outline-none',
        'bg-transparent dark:bg-transparent',
        'focus-visible:ring-0',
        props.class,
      )
    "
    @input="handleInput"
    @keydown="handleKeyDown"
    v-bind="$attrs"
  />
</template>
