<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/cn";

interface Props {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <div
    :class="
      cn(
        'flex items-center gap-1',
        '[&_button:first-child]:rounded-bl-xl',
        props.class,
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
