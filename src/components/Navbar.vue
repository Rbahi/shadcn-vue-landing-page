<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useColorMode } from "@vueuse/core";
import { useI18n } from "vue-i18n"; // Import i18n

const mode = useColorMode();
const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

watchEffect(() => {
  mode.value = systemDarkMode.matches ? "dark" : "light";
});

// Listen for real-time system theme changes
systemDarkMode.addEventListener("change", (e) => {
  mode.value = e.matches ? "dark" : "light";
});

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { Menu } from "lucide-vue-next";
import InstagramIcon from "@/icons/InstagramIcon.vue";
import SaFlag from "@/icons/saFlag.vue";
import GbFlag from "@/icons/gbFlag.vue";
import FrFlag from "@/icons/frFlag.vue";
import EsFlag from "@/icons/esFlag.vue";
import ToggleTheme from "./ToggleTheme.vue";

const { availableLocales, locale, t } = useI18n();

const routeList = [
  {
    href: "#how-it-works",
    label: "navbar.howItWorks", // Translation key
  },
  {
    href: "#testimonials",
    label: "navbar.testimonials", // Translation key
  },
  {
    href: "#team",
    label: "navbar.team", // Translation key
  },
  {
    href: "#contact",
    label: "navbar.contact", // Translation key
  },
  {
    href: "#faq",
    label: "navbar.faq", // Translation key
  },
];

const isOpen = ref(false);

// Mapping for language codes to flag components
const languageFlags: Record<string, any> = {
  en: GbFlag,
  ar: SaFlag,
  fr: FrFlag,
  es: EsFlag,
};
const languageNames: { [key: string]: string } = {
  en: "English",
  ar: "Arabic",
  fr: "French",
  es: "Spanish",
};
</script>

<template>
  <header
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
      'w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-full flex justify-between items-center md:px-3 p-2 bg-card shadow-md': true,
    }"
  >
    <a href="/" class="font-bold text-lg flex items-center">
      <img
        :src="
          mode == 'light' ? '/round-logo-white.png' : '/round-logo-black.png'
        "
        class="w-9 h-9 mr-2"
        alt="Logo"
      />
      FMI Trading Group
    </a>

    <!-- Mobile -->
    <div class="flex items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu @click="isOpen = true" class="cursor-pointer mr-2" />
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
        >
          <div>
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center">
                <a href="/" class="flex items-center">
                  <img
                    :src="
                      mode == 'light'
                        ? '/round-logo-white.png'
                        : '/round-logo-black.png'
                    "
                    class="w-9 h-9 mr-2"
                    alt="Logo"
                  />
                  FMI Trading Group
                </a>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-2">
              <Button
                v-for="{ href, label } in routeList"
                :key="label"
                as-child
                variant="ghost"
                class="justify-start text-base"
              >
                <a @click="isOpen = false" :href="href">{{ $t(label) }}</a>
              </Button>
            </div>
          </div>

          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Select
              v-model="$i18n.locale"
              class="w-full bg-transparent text-base p-2 rounded-md"
            >
              <SelectTrigger class="w-full text-left p-2 bg-transparent mb-2">
                <!-- Dynamically set the flag based on selected language -->
                <component
                  :is="languageFlags[locale]"
                  class="w-9 h-9 inline-block mr-2"
                />
                <span class="text-sm font-semibold w-full text-left">
                  {{ languageNames[locale] }}
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  v-for="lang in availableLocales"
                  :key="lang"
                  :value="lang"
                >
                  <component
                    :is="languageFlags[lang]"
                    class="w-6 h-6 inline-block mr-2"
                  />
                  {{
                    lang === "en"
                      ? "English"
                      : lang === "ar"
                      ? "العربية"
                      : lang === "fr"
                      ? "Français"
                      : lang === "es"
                      ? "Español"
                      : t(`languages.${lang}`)
                  }}
                </SelectItem>
              </SelectContent>
            </Select>
            <Separator class="mb-2" />
            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop -->
    <NavigationMenu class="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button
              v-for="{ href, label } in routeList"
              :key="label"
              as-child
              variant="ghost"
              class="justify-start text-base"
            >
              <a :href="href">{{ $t(label) }}</a>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <!-- Icons -->
    <div class="hidden lg:flex">
      <Select
        v-model="$i18n.locale"
        class="bg-transparent text-base p-2 rounded-md"
      >
        <SelectTrigger class="text-left p-2 h-9 bg-transparent">
          <!-- Dynamically set the flag based on selected language -->
          <component
            :is="languageFlags[locale]"
            class="w-7 h-7 inline-block mr-2"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            v-for="lang in availableLocales"
            :key="lang"
            :value="lang"
          >
            <component
              :is="languageFlags[lang]"
              class="w-6 h-6 inline-block mr-2"
            />
            {{
              lang === "en"
                ? "English"
                : lang === "ar"
                ? "العربية"
                : lang === "fr"
                ? "Français"
                : lang === "es"
                ? "Español"
                : t(`languages.${lang}`)
            }}
          </SelectItem>
        </SelectContent>
      </Select>
      <ToggleTheme />
      <Button
        as-child
        size="sm"
        variant="ghost"
        aria-label="Visit our Instagram"
      >
        <a
          aria-label="Visit our Instagram"
          href="https://instagram.com/fmitradinggroup"
          target="_blank"
        >
          <InstagramIcon class="size-5" />
        </a>
      </Button>
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>
