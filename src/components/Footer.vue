<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import Separator from "./ui/separator/Separator.vue";

const mode = useColorMode();
</script>

<template>
  <footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div
        class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8"
      >
        <!-- Logo Section -->
        <div class="col-span-full xl:col-span-2">
          <a href="#" class="flex font-bold items-center">
            <img
              :src="
                mode == 'light'
                  ? './src/assets/round-logo-white.png'
                  : './src/assets/round-logo-black.png'
              "
              class="w-9 h-9 mr-2"
              alt="Logo"
            />
            <h3 class="text-2xl">{{ $t("footer.logo.title") }}</h3>
          </a>
        </div>

        <!-- Contact Section -->
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ $t("footer.contact.title") }}</h3>
          <div>
            <a
              target="_blank"
              href="https://wa.me/8615157190084"
              class="opacity-60 hover:opacity-100"
            >
              {{ $t("footer.contact.whatsapp") }}
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://m.me/131814057009755"
              class="opacity-60 hover:opacity-100"
            >
              {{ $t("footer.contact.facebook") }}
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://ig.me/m/fmitradinggroup"
              class="opacity-60 hover:opacity-100"
            >
              {{ $t("footer.contact.instagram") }}
            </a>
          </div>
        </div>

        <!-- Help Section -->
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ $t("footer.help.title") }}</h3>
          <div>
            <a href="#contact" class="opacity-60 hover:opacity-100">
              {{ $t("footer.help.contactUs") }}
            </a>
          </div>
          <div>
            <a href="#faq" class="opacity-60 hover:opacity-100">
              {{ $t("footer.help.faq") }}
            </a>
          </div>
          <div>
            <a href="#testimonials" class="opacity-60 hover:opacity-100">
              {{ $t("footer.help.feedback") }}
            </a>
          </div>
        </div>

        <!-- Socials Section -->
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ $t("footer.socials.title") }}</h3>
          <div>
            <a
              target="_blank"
              href="https://www.facebook.com/fmitradinggroup"
              class="opacity-60 hover:opacity-100"
            >
              {{ $t("footer.socials.facebook") }}
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.instagram.com/fmitradinggroup"
              class="opacity-60 hover:opacity-100"
            >
              {{ $t("footer.socials.instagram") }}
            </a>
          </div>
        </div>
      </div>

      <!-- Separator -->
      <Separator class="my-6" />

      <!-- Footer Disclaimer -->
      <section>
        <h3>
          © 2025
          <a
            target="_blank"
            href="https://instagram.com/"
            class="text-primary transition-all border-primary hover:border-b-2"
          >
            {{ $t("footer.disclaimer.companyName") }}
          </a>
          {{ $t("footer.disclaimer.rightsReserved") }}
        </h3>
      </section>
    </div>
  </footer>
</template>
