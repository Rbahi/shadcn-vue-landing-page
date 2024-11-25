<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Handshake,
  CheckCircle,
  ShieldCheck,
  Wallet,
  CreditCard,
  Package,
  Truck,
} from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "handshake",
    title: "benefits.expertNegotiation.title",
    description: "benefits.expertNegotiation.description",
  },
  {
    icon: "shieldCheck",
    title: "benefits.qualityAssurance.title",
    description: "benefits.qualityAssurance.description",
  },
  {
    icon: "wallet",
    title: "benefits.paymentSolutions.title",
    description: "benefits.paymentSolutions.description",
  },
  {
    icon: "truck",
    title: "benefits.shippingSolutions.title",
    description: "benefits.shippingSolutions.description",
  },
];

const iconMap: Record<
  string,
  | typeof Handshake
  | typeof CheckCircle
  | typeof ShieldCheck
  | typeof Wallet
  | typeof CreditCard
  | typeof Package
  | typeof Truck
> = {
  handshake: Handshake,
  checkCircle: CheckCircle,
  shieldCheck: ShieldCheck,
  wallet: Wallet,
  creditCard: CreditCard,
  package: Package,
  truck: Truck,
};
</script>

<template>
  <section id="benefits" class="container py-24 sm:py-32">
    <div class="grid lg:grid-cols-2 lg:gap-24">
      <div class="flex flex-col justify-between mb-8 lg:mb-0">
        <div>
          <h2 class="text-lg text-primary mb-2 tracking-wider">
            {{ $t("benefits.sectionTitle") }}
          </h2>

          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            {{ $t("benefits.sectionHeading") }}
          </h2>
          <p class="text-xl text-muted-foreground">
            {{ $t("benefits.sectionDescription") }}
          </p>
        </div>
        <Card
          class="bg-muted/50 dark:bg-card hover:bg-background hover:shadow-md dark:hover:bg-background transition-all delay-75 mt-8"
        >
          <CardHeader>
            <h3 class="text-xl font-semibold text-primary">
              {{ $t("benefits.testimonialHeading") }}
            </h3>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <p class="text-lg italic">
              {{ $t("benefits.testimonialQuote") }}
            </p>
            <p class="mt-4 text-right text-sm">
              - {{ $t("benefits.testimonialAuthor") }}
            </p>
          </CardContent>
        </Card>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component class="size-8 mb-6 text-primary" :is="iconMap[icon]" />

              <span
                class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
                >0{{ index + 1 }}</span
              >
            </div>

            <CardTitle>{{ $t(title) }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ $t(description) }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
