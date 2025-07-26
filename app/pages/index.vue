<script setup lang="ts">
import { Chat } from "@ai-sdk/vue";

const input = ref("");
const chat = new Chat({});

const handleSubmit = () => {
  chat.sendMessage({ text: input.value });

  input.value = "";
};
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="bg-background absolute inset-x-0 top-0 z-10 rounded-t-lg">
        <div
          class="flex h-12 w-full shrink-0 items-center justify-between gap-2"
        >
          <div class="flex w-full items-center gap-2 px-4">
            <SidebarTrigger class="-ml-1" />
            <Separator
              orientation="vertical"
              class="data-[orientation=vertical]:h-4"
            />
            <span class="text-sm font-medium">Shadcn Chat</span>
          </div>
          <div class="flex items-center gap-2 px-4">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div
        class="flex max-h-[calc(100vh-4rem)] flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0"
      >
        <div class="mx-auto max-w-3xl">
          <div class="flex-1 pb-64">
            <div class="flex flex-col gap-8">
              <ChatMessage
                v-for="(message, index) in chat.messages"
                :key="message.id ?? index"
                :message="message"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-2 flex flex-col gap-2">
        <div class="mx-auto w-full max-w-3xl">
          <ChatInput v-model="input" @submit="handleSubmit" class="w-full" />
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
