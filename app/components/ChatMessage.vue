<script setup lang="ts">
import type { UIMessage } from "ai";
import { LucideCopy, LucideThumbsDown, LucideThumbsUp } from "lucide-vue-next";

const { message } = defineProps<{
  message: UIMessage;
}>();
</script>
<template>
  <AIMessage :from="message.role" class="isolate">
    <AIMessageContainer>
      <AIMessageContent>
        <div
          v-for="(part, index) in message.parts"
          :key="`${message.id}-${part.type}-${index}`"
        >
          <div v-if="part.type === 'text'">{{ part.text }}</div>
        </div>
      </AIMessageContent>
      <AIMessageAvatar :name="message.role" :src="message.role" />
    </AIMessageContainer>
    <AIMessageActions
      v-if="message.role === 'assistant'"
      class="mt-0.5 ml-8 flex items-center px-2"
    >
      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            variant="ghost"
            size="icon"
            class="text-muted-foreground size-7"
          >
            <LucideCopy class="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Copy</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            variant="ghost"
            size="icon"
            class="text-muted-foreground size-7"
          >
            <LucideThumbsUp class="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Good answer</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            variant="ghost"
            size="icon"
            class="text-muted-foreground size-7"
          >
            <LucideThumbsDown class="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Bad answer</TooltipContent>
      </Tooltip>
    </AIMessageActions>
  </AIMessage>
</template>
