<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/cn";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'group flex w-full items-end justify-end gap-2 group-data-[from=assistant]:flex-row-reverse group-data-[from=user]:flex-row',
        '[&>div]:max-w-[80%]',
        props.class,
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
