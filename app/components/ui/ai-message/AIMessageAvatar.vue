<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { cn } from "~/utils/cn";

const props = defineProps<{
  src: string;
  name?: string;
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Avatar :class="cn('size-8', props.class)" v-bind="$attrs">
    <AvatarImage alt="" class="mt-0 mb-0" :src="src" />
    <AvatarFallback>{{ name?.slice(0, 2) || "ME" }}</AvatarFallback>
  </Avatar>
</template>
