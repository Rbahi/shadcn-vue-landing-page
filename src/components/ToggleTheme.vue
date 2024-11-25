<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-vue-next";

// Initialize the color mode
const mode = useColorMode({
  storageKey: "vueuse-color-scheme", // Key to save the preference
  emitAuto: true, // Allow fallback to auto
});

// Automatically detect the user's system theme
const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

// Listen for real-time system theme changes and update only when in "auto"
systemDarkMode.addEventListener("change", (e) => {
  if (mode.value === "auto") {
    mode.value = e.matches ? "dark" : "light";
  }
});

// Toggle theme manually
const toggleTheme = () => {
  if (mode.value === "dark") mode.value = "light";
  else if (mode.value === "light") mode.value = "dark";
  else mode.value = systemDarkMode.matches ? "dark" : "light"; // Handle "auto"
};
</script>

<template>
  <Button
    @click="toggleTheme"
    size="sm"
    variant="ghost"
    class="w-full justify-start"
  >
    <!-- Display icon and text dynamically based on the current theme -->
    <div v-if="mode === 'light'" class="flex gap-2">
      <Moon class="size-5" />
      <span class="block lg:hidden">Dark</span>
    </div>
    <div v-else-if="mode === 'dark'" class="flex gap-2">
      <Sun class="size-5" />
      <span class="block lg:hidden">Light</span>
    </div>
    <div v-else class="flex gap-2">
      <Moon class="size-5" />
      <span class="block lg:hidden">Auto</span>
    </div>
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
