<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/cn";

const props = defineProps<{
  from: "user" | "assistant" | "system";
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn('group', from === 'user' ? 'is-user' : 'is-assistant', props.class)
    "
    :data-from="from"
  >
    <slot />
  </div>
</template>
