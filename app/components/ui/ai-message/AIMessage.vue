<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/cn";

interface AIMessageProps {
  from: "user" | "assistant";
  class?: HTMLAttributes["class"];
}

const props = defineProps<AIMessageProps>();
</script>

<template>
  <div
    :class="
      cn(
        'group flex w-full items-end justify-end gap-2 py-4',
        from === 'user'
          ? 'is-user'
          : 'is-assistant flex-row-reverse justify-end',
        '[&>div]:max-w-[80%]',
        props.class,
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
