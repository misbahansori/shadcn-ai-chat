<script setup lang="ts">
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
    content: "I am fine, thank you!",
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
    content: "The weather in Tokyo is sunny.",
    avatar: "https://github.com/openai.png",
    name: "OpenAI",
  },
];

const suggestions = [
  "What are the latest trends in AI?",
  "How does machine learning work?",
  "Explain quantum computing",
  "Best practices for React development",
  "Tell me about TypeScript benefits",
  "How to optimize database queries?",
  "What is the difference between SQL and NoSQL?",
  "Explain cloud computing basics",
];
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="flex-1">
      <div class="mx-auto max-w-3xl px-4">
        <div class="flex h-screen flex-col gap-4">
          <div class="flex-1">
            <div class="space-y-4">
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
          <div class="flex flex-col gap-1">
            <ScrollArea class="pb-3 whitespace-nowrap">
              <Badge
                v-for="suggestion in suggestions"
                :key="suggestion"
                variant="outline"
                class="rounded-full px-4 py-1 text-sm"
              >
                {{ suggestion }}
              </Badge>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ChatInput />
          </div>
        </div>
      </div>
    </main>
  </SidebarProvider>
</template>
