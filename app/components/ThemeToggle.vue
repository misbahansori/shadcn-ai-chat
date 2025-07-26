<script setup lang="ts">
import { LucideMoon, LucideSun } from "lucide-vue-next";

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    class="size-7"
    @click="toggleTheme"
    :aria-label="`Switch to ${colorMode.preference === 'dark' ? 'light' : 'dark'} mode`"
  >
    <LucideMoon
      class="size-4 shrink-0 scale-0 opacity-0 transition-all dark:scale-100 dark:opacity-100"
      aria-hidden="true"
    />
    <LucideSun
      class="absolute size-4 shrink-0 scale-100 opacity-100 transition-all dark:scale-0 dark:opacity-0"
      aria-hidden="true"
    />
  </Button>
</template>
