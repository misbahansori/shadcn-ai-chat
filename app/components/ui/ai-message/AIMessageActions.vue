<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/cn";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn('mt-0.5 ml-8 flex items-center px-2', props.class)">
    <slot />
  </div>
</template>
