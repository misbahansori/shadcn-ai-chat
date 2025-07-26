<script setup lang="ts">
import { LucideMessageCircle, LucidePlus } from "lucide-vue-next";
import type { SidebarProps } from "~/components/ui/sidebar";

const props = withDefaults(defineProps<SidebarProps>(), {
  variant: "inset",
});

const pastConversations = [
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
        <SidebarGroupLabel>Chats</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem
            v-for="conversation in pastConversations"
            :key="conversation.id"
          >
            <SidebarMenuButton>
              <span>{{ conversation.name }}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuSeparator />
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
