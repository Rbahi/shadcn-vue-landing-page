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

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Ayoub",
    lastName: "Rbahi",
    positions: ["UI/UX Designer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Whatsapp",
        url: "https://wa.me/8618758922201",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/a.rbahi",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Yassine",
    lastName: "Cherif-Riahi",
    positions: ["Machine Learning Engineer", "TensorFlow Tinkerer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Whatsapp",
        url: "https://wa.me/8615157190084",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/yassine.sheriff",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/250?img=58",
    firstName: "Sofian",
    lastName: "Essahli",
    positions: ["Vue Fronted Developer", "Creator Of This Website"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
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
  <section id="team" class="container lg:w-[75%] py-24 sm:py-32">
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
          <a
            v-for="{ name, url } in socialNetworks"
            :key="name"
            :href="url"
            target="_blank"
            class="hover:opacity-80 transition-all"
            :aria-label="`Visit our ${t(`socials.${name}`)} page`"
          >
            <component :is="socialIcon(name)" class="h-8 w-8" />
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
