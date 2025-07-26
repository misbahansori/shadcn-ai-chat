<script setup lang="ts">
import {
  LucideCopy,
  LucideMoon,
  LucideSun,
  LucideThumbsDown,
  LucideThumbsUp,
} from "lucide-vue-next";

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
  {
    from: "user",
    content: "Can you explain how machine learning works?",
    avatar: "https://github.com/haydenbleasel.png",
    name: "Hayden Bleasel",
  },
  {
    from: "assistant",
    content:
      "Machine learning is a subset of artificial intelligence that enables computers to learn and make decisions without being explicitly programmed. It works by training algorithms on large datasets to recognize patterns and make predictions. There are three main types: supervised learning (using labeled data), unsupervised learning (finding hidden patterns), and reinforcement learning (learning through trial and error).",
    avatar: "https://github.com/openai.png",
    name: "OpenAI",
  },
  {
    from: "user",
    content: "What are the latest trends in AI?",
    avatar: "https://github.com/haydenbleasel.png",
    name: "Hayden Bleasel",
  },
  {
    from: "assistant",
    content:
      "The latest trends in AI include large language models like GPT-4, multimodal AI that can process text, images, and audio, AI-powered code generation tools, autonomous vehicles, AI in healthcare for drug discovery and diagnosis, edge AI for real-time processing, and AI ethics and responsible AI development. There's also growing interest in AI explainability and interpretability.",
    avatar: "https://github.com/openai.png",
    name: "OpenAI",
  },
  {
    from: "user",
    content: "How do I get started with React development?",
    avatar: "https://github.com/haydenbleasel.png",
    name: "Hayden Bleasel",
  },
  {
    from: "assistant",
    content:
      "To get started with React development, first install Node.js and npm. Then create a new React project using 'npx create-react-app my-app' or use Vite with 'npm create vite@latest my-app -- --template react'. Learn the basics like components, JSX, state, props, and hooks. Start with simple components and gradually build more complex applications. Use the official React documentation and tutorials as your guide.",
    avatar: "https://github.com/openai.png",
    name: "OpenAI",
  },
  {
    from: "user",
    content: "What's the difference between TypeScript and JavaScript?",
    avatar: "https://github.com/haydenbleasel.png",
    name: "Hayden Bleasel",
  },
  {
    from: "assistant",
    content:
      "TypeScript is a superset of JavaScript that adds static typing. While JavaScript is dynamically typed, TypeScript provides type checking at compile time, which helps catch errors early and improves code quality. TypeScript includes features like interfaces, enums, generics, and advanced type inference. It compiles down to JavaScript, so it can run anywhere JavaScript runs. Many modern frameworks like React, Vue, and Angular have excellent TypeScript support.",
    avatar: "https://github.com/openai.png",
    name: "OpenAI",
  },
  {
    from: "user",
    content: "Tell me about cloud computing",
    avatar: "https://github.com/haydenbleasel.png",
    name: "Hayden Bleasel",
  },
  {
    from: "assistant",
    content:
      "Cloud computing is the delivery of computing services over the internet. It includes Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Major providers include AWS, Azure, and Google Cloud. Benefits include scalability, cost-effectiveness, and global accessibility. Common services include virtual machines, storage, databases, and AI/ML tools. Cloud computing has revolutionized how businesses deploy and manage applications.",
    avatar: "https://github.com/openai.png",
    name: "OpenAI",
  },
  {
    from: "user",
    content: "How do I optimize database performance?",
    avatar: "https://github.com/haydenbleasel.png",
    name: "Hayden Bleasel",
  },
  {
    from: "assistant",
    content:
      "Database optimization involves several strategies: 1) Indexing frequently queried columns, 2) Writing efficient SQL queries and avoiding SELECT *, 3) Using appropriate data types, 4) Implementing connection pooling, 5) Regular maintenance like updating statistics and rebuilding indexes, 6) Consider read replicas for read-heavy workloads, 7) Use query optimization tools to analyze slow queries, 8) Implement caching strategies, and 9) Consider database partitioning for large tables.",
    avatar: "https://github.com/openai.png",
    name: "OpenAI",
  },
  {
    from: "user",
    content: "What are microservices?",
    avatar: "https://github.com/haydenbleasel.png",
    name: "Hayden Bleasel",
  },
  {
    from: "assistant",
    content:
      "Microservices is an architectural style where an application is built as a collection of small, independent services. Each service runs in its own process and communicates through well-defined APIs. Benefits include independent deployment, technology diversity, fault isolation, and scalability. Challenges include distributed system complexity, data consistency, and network latency. Popular frameworks include Spring Boot, Node.js, and .NET Core. Containerization with Docker and orchestration with Kubernetes are commonly used with microservices.",
    avatar: "https://github.com/openai.png",
    name: "OpenAI",
  },
  {
    from: "user",
    content: "Explain DevOps practices",
    avatar: "https://github.com/haydenbleasel.png",
    name: "Hayden Bleasel",
  },
  {
    from: "assistant",
    content:
      "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). Key practices include: 1) Continuous Integration/Continuous Deployment (CI/CD), 2) Infrastructure as Code (IaC), 3) Automated testing, 4) Monitoring and logging, 5) Collaboration and communication, 6) Version control for everything, 7) Automated security scanning, and 8) Blue-green deployments. Popular tools include Jenkins, GitLab CI, Docker, Kubernetes, Terraform, and monitoring tools like Prometheus and Grafana.",
    avatar: "https://github.com/openai.png",
    name: "OpenAI",
  },
  {
    from: "user",
    content: "What is the future of web development?",
    avatar: "https://github.com/haydenbleasel.png",
    name: "Hayden Bleasel",
  },
  {
    from: "assistant",
    content:
      "The future of web development includes: 1) WebAssembly for near-native performance in browsers, 2) Progressive Web Apps (PWAs) becoming more mainstream, 3) AI-powered development tools and code generation, 4) Increased focus on performance and Core Web Vitals, 5) More adoption of TypeScript and static typing, 6) Edge computing and serverless architectures, 7) Enhanced accessibility and inclusive design, 8) Real-time collaboration features, and 9) Integration of AR/VR technologies. The landscape is moving toward more intelligent, performant, and user-centric web experiences.",
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

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
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
          </div>
        </div>
      </header>
      <div
        class="flex max-h-[calc(100vh-4rem)] flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0"
      >
        <div class="mx-auto max-w-3xl">
          <div class="flex-1 pb-64">
            <div class="flex flex-col gap-8">
              <AIMessage
                v-for="(message, index) in messages"
                :key="index"
                :from="message.from"
                class="isolate"
              >
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
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-2 flex flex-col gap-2">
        <div class="mx-auto w-full max-w-3xl">
          <div
            v-if="!messages.length"
            class="flex flex-wrap gap-2 overflow-x-auto"
          >
            <Button
              v-for="suggestion in suggestions"
              :key="suggestion"
              variant="outline"
              class="h-auto rounded-full px-4 py-1 text-sm"
            >
              {{ suggestion }}
            </Button>
          </div>

          <ChatInput class="w-full" />
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
