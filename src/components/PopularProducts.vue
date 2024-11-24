<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface productsProps {
  icon: string;
  image: string;
  name: string;
}

const products: productsProps[] = [
  {
    icon: "crown",
    image: "pacheco.png",
    name: "products.acmebrand",
  },
  {
    icon: "vegan",
    image: "pacheco.png",
    name: "products.acmelogo",
  },
  {
    icon: "ghost",
    image: "pacheco.png",
    name: "products.acmesponsor",
  },
  {
    icon: "puzzle",
    image: "pacheco.png",
    name: "products.acmeipsum",
  },
  {
    icon: "squirrel",
    image: "pacheco.png",
    name: "products.acme",
  },
  {
    icon: "cookie",
    image: "pacheco.png",
    name: "products.accmee",
  },
  {
    icon: "drama",
    image: "pacheco.png",
    name: "products.acmetech",
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
        class="gap-[1rem] md:gap-[3rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[1rem] md:gap-[3rem]"
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
                class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.05]"
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
