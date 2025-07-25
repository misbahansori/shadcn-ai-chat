<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/cn";

interface Props {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <form
    :class="
      cn(
        'bg-background w-full divide-y overflow-hidden rounded-xl border shadow-sm',
        props.class,
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </form>
</template>
