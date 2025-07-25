<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/cn";

interface AIMessageContentProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<AIMessageContentProps>();
</script>

<template>
  <div
    :class="
      cn(
        'flex flex-col gap-2 rounded-lg px-4 py-3 text-sm',
        'bg-muted text-foreground',
        'group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground',
        props.class,
      )
    "
    v-bind="$attrs"
  >
    <div class="is-user:dark">
      <slot />
    </div>
  </div>
</template>
