<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Button } from "~/components/ui/button";
import { cn } from "~/utils/cn";

interface Props {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "ghost",
});

const hasMultipleChildren = computed(() => {
  return !!useSlots().default?.();
});
</script>

<template>
  <Button
    :class="
      cn(
        'shrink-0 gap-1.5 rounded-lg',
        variant === 'ghost' && 'text-muted-foreground',
        (size ?? hasMultipleChildren) === 'default' && 'px-3',
        props.class,
      )
    "
    :size="(size ?? hasMultipleChildren) ? 'default' : 'icon'"
    type="button"
    :variant="variant"
    v-bind="$attrs"
  >
    <slot />
  </Button>
</template>
