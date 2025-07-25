<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { cn } from "~/utils/cn";

interface AIMessageAvatarProps {
  src: string;
  name?: string;
  class?: HTMLAttributes["class"];
}

const props = defineProps<AIMessageAvatarProps>();
</script>

<template>
  <Avatar :class="cn('size-8', props.class)" v-bind="$attrs">
    <AvatarImage alt="" class="mt-0 mb-0" :src="src" />
    <AvatarFallback>{{ name?.slice(0, 2) || "ME" }}</AvatarFallback>
  </Avatar>
</template>
