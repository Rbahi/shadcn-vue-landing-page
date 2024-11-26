<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import LinkedInIcon from "@/icons/LinkedInIcon.vue";
import XIcon from "@/icons/XIcon.vue";
import WhatsappIcon from "@/icons/WhatsappIcon.vue";
import WechatIcon from "@/icons/WechatIcon.vue";
import InstagramIcon from "@/icons/InstagramIcon.vue";

import { useI18n } from "vue-i18n"; // Translation setup
import Popover from "./ui/popover/Popover.vue";
import PopoverTrigger from "./ui/popover/PopoverTrigger.vue";
import PopoverContent from "./ui/popover/PopoverContent.vue";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url?: string;
  imageUrl?: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/team/ayoub.jpg",
    firstName: "Ayoub",
    lastName: "Rbahi",
    positions: ["Quality Assurance Specialist", "Operations Coordinator"],
    socialNetworks: [
      // {
      //   name: "LinkedIn",
      //   url: "https://www.linkedin.com/in/leopoldo-miranda/",
      // },
      {
        name: "Whatsapp",
        url: "https://wa.me/8618758922201",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/a.rbahi",
      },
      {
        name: "Wechat",
        imageUrl: "/team/ayoub-wechat-white.png",
      },
    ],
  },
  {
    imageUrl: "/team/yassine.jpg",
    firstName: "Yassine",
    lastName: "Cherif-Riahi",
    positions: ["Logistics Expert", "Master of Supply Chain Optimization"],
    socialNetworks: [
      // {
      //   name: "LinkedIn",
      //   url: "https://www.linkedin.com/in/leopoldo-miranda/",
      // },
      {
        name: "Whatsapp",
        url: "https://wa.me/8615157190084",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/yassine.sheriff",
      },
      {
        name: "Wechat",
        imageUrl: "/team/yassine-wechat-white.png",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/250?img=58",
    firstName: "Sofian",
    lastName: "Es-Sebyity",
    positions: ["Minister of Operations in Morocco", "Regional Director"],
    socialNetworks: [
      // {
      //   name: "LinkedIn",
      //   url: "https://www.linkedin.com/in/leopoldo-miranda/",
      // },
      {
        name: "Whatsapp",
        url: "https://wa.me/212648752082",
      },
    ],
  },
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return LinkedInIcon;
    case "Whatsapp":
      return WhatsappIcon;
    case "Wechat":
      return WechatIcon;
    case "Instagram":
      return InstagramIcon;
    case "X":
      return XIcon;
  }
};

const { t } = useI18n(); // Using translations
</script>

<template>
  <section id="team" class="container xl:w-[75%] lg:w-[85%] py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        {{ t("team.sectionTitle") }}
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        {{ t("team.sectionSubtitle") }}
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        v-for="{
          imageUrl,
          firstName,
          lastName,
          positions,
          socialNetworks,
        } in teamList"
        :key="imageUrl"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
      >
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img
              :src="imageUrl"
              alt=""
              loading="lazy"
              class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
            />
          </div>
          <CardTitle class="py-6 pb-4 px-6">
            {{ firstName }}
            <span class="text-primary">{{ lastName }}</span>
          </CardTitle>
        </CardHeader>

        <CardContent
          v-for="(position, index) in positions"
          :key="index"
          :class="{
            'pb-0 text-muted-foreground ': true,
            'pb-4': index === positions.length - 1,
          }"
        >
          {{ t(`team.positions.${position}`) }}
          <span v-if="index < positions.length - 1">,</span>
        </CardContent>

        <CardFooter class="space-x-4 mt-auto">
          <template v-for="{ name, url, imageUrl } in socialNetworks">
            <a
              v-if="name !== 'Wechat'"
              :key="name"
              :href="url"
              target="_blank"
              class="hover:opacity-80 transition-all"
              :aria-label="`Visit our ${t(`socials.${name}`)} page`"
            >
              <component :is="socialIcon(name)" class="h-8 w-8" />
            </a>

            <div v-else key="Wechat" class="relative  ">
              <Popover>
                <PopoverTrigger
                  as="button"
                  class="hover:opacity-80 transition-all"
                >
                  <WechatIcon class="h-8 w-8 mt-1" />
                </PopoverTrigger>
                <PopoverContent class="bg-muted p-0 overflow-hidden rounded-xl shadow-lg">
                  <img
                    :src="imageUrl"
                    alt="WeChat QR Code"
                    class="w-80  object-contain"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </template>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
