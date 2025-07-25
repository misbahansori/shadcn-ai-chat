<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Button, type ButtonVariants } from "~/components/ui/button";
import { cn } from "~/utils/cn";

interface Props {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  status?: "submitted" | "streaming" | "ready" | "error";
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "icon",
  status: "ready",
});
</script>

<template>
  <Button
    :class="cn('gap-1.5 rounded-lg', props.class)"
    :size="size"
    type="submit"
    :variant="variant"
    v-bind="$attrs"
  >
    <slot>
      <svg
        v-if="status === 'submitted'"
        class="animate-spin"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
      <svg
        v-else-if="status === 'streaming'"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      </svg>
      <svg
        v-else-if="status === 'error'"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m22 2-7 20-4-9-9-4 20-7z" />
        <path d="M22 2 11 13" />
      </svg>
    </slot>
  </Button>
</template>
