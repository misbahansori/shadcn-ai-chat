<script setup lang="ts"></script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="flex-1">
      <div class="mx-auto max-w-3xl px-4">
        <div class="flex h-screen flex-col gap-4">
          <div class="flex-1"></div>
          <AIInputExample />
        </div>
      </div>
    </main>
  </SidebarProvider>
</template>
