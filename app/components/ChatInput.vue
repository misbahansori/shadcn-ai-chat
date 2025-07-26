<script setup lang="ts">
import { LucideGlobe, LucideMic, LucidePlus } from "lucide-vue-next";

const text = ref("asdsad");
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
  <AIInput @submit="handleSubmit">
    <AIInputTextarea v-model="text" />
    <AIInputToolbar>
      <AIInputTools>
        <AIInputButton>
          <LucidePlus class="size-4" />
        </AIInputButton>
        <AIInputButton>
          <LucideMic class="size-4" />
        </AIInputButton>
        <AIInputButton>
          <LucideGlobe class="size-4" />
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
