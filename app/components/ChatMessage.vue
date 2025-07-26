<script setup lang="ts">
import { LucideCopy, LucideThumbsDown, LucideThumbsUp } from "lucide-vue-next";

interface Message {
  from: "user" | "assistant";
  content: string;
  avatar: string;
  name: string;
}
const { message } = defineProps<{
  message: Message;
}>();
</script>
<template>
  <AIMessage :from="message.from" class="isolate">
    <AIMessageContainer>
      <AIMessageContent>{{ message.content }}</AIMessageContent>
      <AIMessageAvatar :name="message.name" :src="message.avatar" />
    </AIMessageContainer>
    <AIMessageActions
      v-if="message.from === 'assistant'"
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
