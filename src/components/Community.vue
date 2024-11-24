<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import WhatsappIcon from "@/icons/WhatsappIcon.vue";
import TelegramIcon from "@/icons/TelegramIcon.vue";
</script>

<template>
  <section id="community" class="py-12">
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="lg:w-[60%] mx-auto">
        <Card
          class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0"
        >
          <CardHeader>
            <CardTitle class="text-4xl md:text-5xl font-bold">
              <div class="flex justify-center gap-10">
                <Component
                  class="w-20 h-20 mb-4 fill-whatsapp hover:scale-105 transition-all duration-300"
                  :is="WhatsappIcon"
                />
                <Component
                  class="w-20 h-20 mb-4 fill-telegram hover:scale-105 transition-all duration-300"
                  :is="TelegramIcon"
                />
              </div>
              {{ $t("community.latestDeals") }}
            </CardTitle>
          </CardHeader>
          <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            {{ $t("community.description") }}
          </CardContent>

          <CardFooter class="gap-4">
            <Button as-child class="bg-whatsapp/75 text-md hover:bg-whatsapp">
              <a href="https://wa.me/1234567890" target="_blank">
                {{ $t("community.joinWhatsApp") }}
              </a>
            </Button>
            <Button as-child class="bg-telegram/75 text-md hover:bg-telegram">
              <a href="https://t.me/yourgroup" target="_blank">
                {{ $t("community.joinTelegram") }}
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    <hr />
  </section>
</template>
