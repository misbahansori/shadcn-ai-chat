<script setup lang="ts">
import {
  AIMessage,
  AIMessageAvatar,
  AIMessageContent,
} from "~/components/ui/ai-message";

interface Message {
  from: "user" | "assistant";
  content: string;
  avatar: string;
  name: string;
}

const messages: Message[] = [
  {
    from: "user",
    content: "Hello, how are you?",
    avatar: "https://github.com/haydenbleasel.png",
    name: "Hayden Bleasel",
  },
  {
    from: "assistant",
    content: "I am fine, thank you! How can I help you today?",
    avatar: "https://github.com/openai.png",
    name: "OpenAI",
  },
  {
    from: "user",
    content: "What is the weather in Tokyo?",
    avatar: "https://github.com/haydenbleasel.png",
    name: "Hayden Bleasel",
  },
  {
    from: "assistant",
    content:
      "The weather in Tokyo is sunny with a temperature of 22°C. It's a beautiful day for sightseeing!",
    avatar: "https://github.com/openai.png",
    name: "OpenAI",
  },
];
</script>

<template>
  <div class="bg-background min-h-screen p-8">
    <div class="mx-auto max-w-2xl">
      <h1 class="mb-8 text-3xl font-bold">AI Message Component Test</h1>

      <div class="bg-card space-y-4 rounded-lg border p-6">
        <AIMessage
          v-for="(message, index) in messages"
          :key="index"
          :from="message.from"
        >
          <AIMessageContent>{{ message.content }}</AIMessageContent>
          <AIMessageAvatar :name="message.name" :src="message.avatar" />
        </AIMessage>
      </div>
    </div>
  </div>
</template>
