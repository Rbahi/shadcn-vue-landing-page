<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useColorMode } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-vue-next";

// Initialize the color mode
const mode = useColorMode();

// Automatically detect the user's system theme
const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

watchEffect(() => {
  mode.value = systemDarkMode.matches ? "dark" : "light";
});

// Update the mode in real time as the system theme changes
systemDarkMode.addEventListener("change", (e) => {
  mode.value = e.matches ? "dark" : "light";
});
</script>

<template>
  <Button
    @click="mode = mode === 'dark' ? 'light' : 'dark'"
    size="sm"
    variant="ghost"
    class="w-full justify-start"
  >
    <!-- Display icon and text dynamically based on the current theme -->
    <div v-if="mode === 'light'" class="flex gap-2">
      <Moon class="size-5" />
      <span class="block lg:hidden">Dark</span>
    </div>
    <div v-else class="flex gap-2">
      <Sun class="size-5" />
      <span class="block lg:hidden">Light</span>
    </div>
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
