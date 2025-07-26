<script setup lang="ts">
import {
  LucideArrowRight,
  LucideMessageCircle,
  LucidePlus,
  LucideSearch,
} from "lucide-vue-next";
import type { SidebarProps } from "~/components/ui/sidebar";

const props = withDefaults(defineProps<SidebarProps>(), {
  variant: "inset",
});

const searchQuery = ref("");

const chats = [
  {
    id: 1,
    name: "How to build a website",
    description: "I want to build a website",
  },
  {
    id: 2,
    name: "JavaScript best practices",
    description: "Learning modern JavaScript patterns",
  },
  {
    id: 3,
    name: "React vs Vue comparison",
    description: "Which framework should I choose?",
  },
  {
    id: 4,
    name: "CSS Grid layout tutorial",
    description: "Need help with responsive grid layouts",
  },
  {
    id: 5,
    name: "API integration guide",
    description: "How to connect to external APIs",
  },
  {
    id: 6,
    name: "Database design principles",
    description: "Planning my app's data structure",
  },
  {
    id: 7,
    name: "Authentication system",
    description: "Implementing user login and security",
  },
  {
    id: 8,
    name: "Deployment strategies",
    description: "Best practices for deploying web apps",
  },
  {
    id: 9,
    name: "Performance optimization",
    description: "Making my app faster and more efficient",
  },
  {
    id: 10,
    name: "Testing strategies",
    description: "Unit testing and integration testing",
  },
  {
    id: 11,
    name: "State management patterns",
    description: "Managing app state effectively",
  },
  {
    id: 12,
    name: "Mobile responsive design",
    description: "Making my app work on all devices",
  },
  {
    id: 13,
    name: "SEO optimization tips",
    description: "Improving search engine visibility",
  },
  {
    id: 14,
    name: "Accessibility guidelines",
    description: "Making my app accessible to everyone",
  },
  {
    id: 15,
    name: "Code review best practices",
    description: "How to review code effectively",
  },
  {
    id: 16,
    name: "Git workflow strategies",
    description: "Managing version control properly",
  },
  {
    id: 17,
    name: "Microservices architecture",
    description: "Designing scalable backend systems",
  },
  {
    id: 18,
    name: "Cloud deployment options",
    description: "AWS, Azure, or Google Cloud?",
  },
  {
    id: 19,
    name: "Security best practices",
    description: "Protecting user data and preventing attacks",
  },
  {
    id: 20,
    name: "UI/UX design principles",
    description: "Creating better user experiences",
  },
];

const filteredChats = computed(() => {
  return chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>
            <a href="#">
              <div
                class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
              >
                <LucideMessageCircle class="size-4" />
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">Shadcn Chat</span>
                <span class="truncate text-xs">Chat with AI</span>
              </div>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LucidePlus class="size-4" />
              <span>New chat</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarMenu>
          <div class="relative">
            <Input
              class="peer ps-9 pe-9"
              placeholder="Search chats..."
              type="search"
              v-model="searchQuery"
            />
            <div
              class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
            >
              <LucideSearch :size="16" />
            </div>
            <button
              class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Submit search"
              type="submit"
            >
              <LucideArrowRight :size="16" aria-hidden="true" />
            </button>
          </div>
        </SidebarMenu>
        <SidebarGroupLabel class="mt-2">Chats</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem
            v-if="filteredChats.length"
            v-for="conversation in filteredChats"
            :key="conversation.id"
          >
            <SidebarMenuButton>
              <span>{{ conversation.name }}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem v-else>
            <SidebarMenuButton>
              <span class="text-muted-foreground">No chats found</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarUser
        :user="{
          name: 'John Doe',
          email: 'john.doe@example.com',
          avatar: 'https://github.com/misbahansori.png',
        }"
      />
    </SidebarFooter>
  </Sidebar>
</template>
