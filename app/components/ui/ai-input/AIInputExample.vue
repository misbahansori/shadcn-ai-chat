<script setup lang="ts">
import { LucidePlus } from "lucide-vue-next";

const text = ref("");
const model = ref("gpt-4");
const status = ref<"submitted" | "streaming" | "ready" | "error">("ready");

const models = [
  { id: "gpt-4", name: "GPT-4" },
  { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo" },
  { id: "claude-2", name: "Claude 2" },
  { id: "claude-instant", name: "Claude Instant" },
  { id: "palm-2", name: "PaLM 2" },
  { id: "llama-2-70b", name: "Llama 2 70B" },
  { id: "llama-2-13b", name: "Llama 2 13B" },
  { id: "cohere-command", name: "Command" },
  { id: "mistral-7b", name: "Mistral 7B" },
];

const handleSubmit = (event: Event) => {
  event.preventDefault();
  if (!text.value) {
    return;
  }

  status.value = "submitted";
  setTimeout(() => {
    status.value = "streaming";
  }, 200);
  setTimeout(() => {
    status.value = "ready";
  }, 2000);
};
</script>

<template>
  <AIInput @submit="handleSubmit" class="rounded-b-none">
    <AIInputTextarea v-model="text" />
    <AIInputToolbar>
      <AIInputTools>
        <AIInputButton>
          <LucidePlus class="size-4" />
        </AIInputButton>
        <AIInputButton>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="23" />
            <line x1="8" x2="16" y1="23" y2="23" />
          </svg>
        </AIInputButton>
        <AIInputButton>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
          <span>Search</span>
        </AIInputButton>
        <Select>
          <SelectTrigger
            class="text-muted-foreground hover:bg-accent hover:text-foreground rounded-lg border-none bg-transparent px-2 py-1 font-medium shadow-none transition-colors"
          >
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem
                v-for="modelOption in models"
                :key="modelOption.id"
                :value="modelOption.id"
              >
                {{ modelOption.name }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </AIInputTools>
      <AIInputSubmit :disabled="!text" :status="status" />
    </AIInputToolbar>
  </AIInput>
</template>
