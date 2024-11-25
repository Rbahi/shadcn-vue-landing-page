<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface productsProps {
  image: string;
  name: string;
}

const products: productsProps[] = [
  {
    image: "/products/fire-extinguisher.png",
    name: "products.fireExtinguisher",
  },
  {
    image: "/products/phone-screen.png",
    name: "products.phoneScreen",
  },
  {
    image: "/products/angle-grinder.png",
    name: "products.angleGrinder",
  },
  {
    image: "/products/fire-extinguisher.png",
    name: "products.safetyBoot",
  },
  {
    image: "/products/machine.png",
    name: "products.machine",
  },
  {
    image: "/products/suitcase.png",
    name: "products.suitcase",
  },
  {
    image: "/products/jewelry.png",
    name: "products.jewelry",
  },
  {
    image: "/products/phone-accessories.png",
    name: "products.phoneAccessories",
  },
];
</script>

<template>
  <section
    id="popular-products"
    class="md:max-w-[75%] mx-auto pt-24 pb-24 sm:pb-32"
  >
    <h2 class="text-center mb-12 text-3xl md:text-4xl font-bold">
      {{ $t("popularProducts.title") }}
    </h2>

    <div class="mx-auto">
      <Marquee
        class="gap-[1rem] md:gap-[2.5rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[1rem] md:gap-[2.5rem] py-1"
      >
        <Card
          v-for="{ image, name } in products"
          :key="name"
          class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
        >
          <!-- Card container -->
          <CardHeader class="p-0 gap-0">
            <div class="w-32 md:w-60 h-full overflow-hidden">
              <img
                :src="image"
                alt=""
                loading="lazy"
                class="w-full aspect-square object-cover saturate-50 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.02]"
              />
            </div>
            <CardTitle class="py-3 text-center text-sm md:text-2xl">
              {{ $t(name) }}
            </CardTitle>
          </CardHeader>
        </Card>
      </Marquee>
    </div>
  </section>
</template>
