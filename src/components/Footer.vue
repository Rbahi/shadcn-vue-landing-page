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
        <div class="col-span-full xl:col-span-2">
          <a href="#" class="flex font-bold items-center">
            <img
              :src="
                mode == 'light'
                  ? '/round-logo-white.png'
                  : '/round-logo-black.png'
              "
              class="w-9 h-9 mr-2"
              alt="Logo"
            />

            <h3 class="text-2xl">FMI Trading Group</h3>
          </a>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Contact</h3>

          <div>
            <a
              target="_blank"
              href="https://wa.me/8615157190084"
              class="opacity-60 hover:opacity-100"
            >
              WhatsApp
            </a>
          </div>

          <div>
            <a
              target="_blank"
              href="https://m.me/131814057009755"
              class="opacity-60 hover:opacity-100"
            >
              Facebook
            </a>
          </div>

          <div>
            <a
            target="_blank"
              href="https://ig.me/m/fmitradinggroup"
              class="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Help</h3>
          <div>
            <a href="#contact" class="opacity-60 hover:opacity-100">
              Contact Us
            </a>
          </div>

          <div>
            <a href="#faq" class="opacity-60 hover:opacity-100"> FAQ </a>
          </div>

          <div>
            <a href="#testimonials" class="opacity-60 hover:opacity-100">
              Feedback
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Socials</h3>
          <div>
            <a
              target="_blank"
              href="https://www.facebook.com/fmitradinggroup"
              class="opacity-60 hover:opacity-100"
            >
              Facebook
            </a>
          </div>

          <div>
            <a
              target="_blank"
              href="https://www.instagram.com/fmitradinggroup"
              class="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <Separator class="my-6" />
      <section className="">
        <h3 class="">
          © 2025<a
            target="_blank"
            href="https://instagram.com/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            FMI Trading Group Ltd.
          </a>
          All Rights Reserved
        </h3>
      </section>
    </div>
  </footer>
</template>
