<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "howItWorks.negotiate.badgeTitle",
    title: "howItWorks.negotiate.title",
    description: "howItWorks.negotiate.description",
    image: "/how-it-works/step1.jpeg", // Replace with relevant image
  },
  {
    badgeTitle: "howItWorks.inspect.badgeTitle",
    title: "howItWorks.inspect.title",
    description: "howItWorks.inspect.description",
    image: "/how-it-works/step2.jpeg", // Replace with relevant image
  },
  {
    badgeTitle: "howItWorks.visit.badgeTitle",
    title: "howItWorks.visit.title",
    description: "howItWorks.visit.description",
    image: "/how-it-works/step3.jpeg", // Replace with relevant image
  },
  {
    badgeTitle: "howItWorks.support.badgeTitle",
    title: "howItWorks.support.title",
    description: "howItWorks.support.description",
    image: "/how-it-works/step4.jpeg", // Replace with relevant image
  },
];
</script>

<template>
  <section id="how-it-works" class="container py-24 sm:py-32">
    <div class="text-center mb-12">
      <h2 class="text-lg text-primary tracking-wider mb-2">
        {{ $t("howItWorks.sectionTitle") }}
      </h2>
      <h2 class="text-3xl md:text-4xl font-bold">
        {{ $t("howItWorks.sectionHeading") }}
      </h2>
    </div>

    <div class="lg:w-[80%] mx-auto">
      <div
        v-for="(
          { badgeTitle, title, description, image }, index
        ) in HowItWorksList"
        :key="title"
        class="sm:flex sm:items-center mb-12"
        :class="{ 'flex-row-reverse': index % 2 !== 0 }"
      >
        <!-- Text Content -->
        <div
          class="sm:w-1/2 mb-8 sm:mb-0 sm:text-left"
          :class="{ 'sm:text-right': index % 2 !== 0 }"
        >
          <Card class="h-full bg-transparent border-0 shadow-none">
            <CardHeader>
              <div class="pb-4">
                <Badge class="text-sm">
                  {{ $t(badgeTitle) }}
                </Badge>
              </div>
              <CardTitle>
                {{ $t(title) }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground">
                {{ $t(description) }}
              </p>
            </CardContent>
          </Card>
        </div>

        <!-- Image -->
        <div class="sm:w-1/2 text-center sm:text-right">
          <img
            :src="image"
            :alt="`Image for ${$t(title)}`"
            class="w-[250px] md:w-[300px] mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>
