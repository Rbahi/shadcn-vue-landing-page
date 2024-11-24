<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BadgeCheck,
  Factory,
  DollarSign,
  Languages,
  Navigation,
  Package,
  Shield,
  Users,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "factory",
    title: "features.factoryVisits.title",
    description: "features.factoryVisits.description",
  },
  {
    icon: "badgeCheck",
    title: "features.qualityAssurance.title",
    description: "features.qualityAssurance.description",
  },
  {
    icon: "dollarSign",
    title: "features.competitivePricing.title",
    description: "features.competitivePricing.description",
  },
  {
    icon: "languages",
    title: "features.languageExpertise.title",
    description: "features.languageExpertise.description",
  },
  {
    icon: "navigation",
    title: "features.marketNavigation.title",
    description: "features.marketNavigation.description",
  },
  {
    icon: "package",
    title: "features.endToEndShipping.title",
    description: "features.endToEndShipping.description",
  },
  {
    icon: "shield",
    title: "features.securePayments.title",
    description: "features.securePayments.description",
  },
  {
    icon: "users",
    title: "features.clientSupport.title",
    description: "features.clientSupport.description",
  },
];

const iconMap: Record<
  string,
  | typeof BadgeCheck
  | typeof Factory
  | typeof DollarSign
  | typeof Languages
  | typeof Navigation
  | typeof Package
  | typeof Shield
  | typeof Users
> = {
  badgeCheck: BadgeCheck,
  factory: Factory,
  dollarSign: DollarSign,
  languages: Languages,
  navigation: Navigation,
  package: Package,
  shield: Shield,
  users: Users,
};
</script>

<template>
  <section id="features" class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      {{ $t("features.sectionTitle") }}
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      {{ $t("features.sectionHeading") }}
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      {{ $t("features.sectionDescription") }}
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary"
              />
            </div>

            <CardTitle>
              {{ $t(title) }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ $t(description) }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>
