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
        'flex flex-col gap-2 rounded-lg px-4 py-3 text-sm/relaxed whitespace-pre-wrap',
        'bg-muted text-foreground',
        'group-data-[from=user]:bg-primary group-data-[from=user]:text-primary-foreground',
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
