<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Star } from "lucide-vue-next";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://www.radix-vue.com/logo.svg",
    name: "Benjamin J. Keller",
    userName: "Product Manager",
    comment:
      "This service has been a game-changer for our team. The quality of products and the efficiency of the shipping are unmatched. Highly recommend!",
    rating: 5.0,
  },
  {
    image: "https://www.radix-vue.com/logo.svg",
    name: "Sophia Collins",
    userName: "Cybersecurity Analyst",
    comment:
      "Our experience with this company has been outstanding. Excellent product quality, and their customer support is always there when we need it. 10/10!",
    rating: 4.8,
  },

  {
    image: "https://www.radix-vue.com/logo.svg",
    name: "Mahmoud Abou Issam",
    userName: "Chief Technology Officer",
    comment:
      "The pricing and delivery time exceeded our expectations. A fantastic experience, and I’ll definitely continue working with this company in the future.",
    rating: 4.9,
  },
  {
    image: "https://www.radix-vue.com/logo.svg",
    name: "Sediq El Omari",
    userName: "Data Scientist",
    comment:
      "Efficient, reliable, and high-quality products! I’ve been working with them for over a year, and their service has always been consistent. Truly a pleasure to collaborate with them.",
    rating: 5.0,
  },
  {
    image: "https://www.radix-vue.com/logo.svg",
    name: "Mohammed Agalai",
    userName: "IT Project Manager",
    comment:
      "Working with this team has been incredibly smooth. They handle everything from logistics to quality control, and the products always arrive on time and in perfect condition.",
    rating: 5.0,
  },
  {
    image: "https://www.radix-vue.com/logo.svg",
    name: "Isabella Reed",
    userName: "DevOps Engineer",
    comment:
      "We were impressed with the attention to detail in every order. The customer service is responsive and extremely helpful. Will continue using them for future projects.",
    rating: 4.9,
  },
];
</script>

<template>
  <section id="testimonials" class="container py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        {{ $t("testimonials.sectionTitle") }}
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        {{ $t("testimonials.sectionHeading") }}
      </h2>
    </div>

    <Carousel
      :opts="{
        align: 'start',
      }"
      class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
    >
      <CarouselContent>
        <CarouselItem
          v-for="review in reviewList"
          :key="review.name"
          class="md:basis-1/2 lg:basis-1/3"
        >
          <Card class="bg-muted/50 dark:bg-card">
            <CardContent class="pt-6 pb-0">
              <div class="flex gap-1 pb-6">
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
              </div>

              "{{ review.comment }}"
            </CardContent>

            <CardHeader>
              <div class="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage :src="review.image" alt="User Avatar" />
                  <AvatarFallback>{{ review.name.charAt(0) }}</AvatarFallback>
                </Avatar>

                <div class="flex flex-col">
                  <CardTitle class="text-lg">{{ review.name }}</CardTitle>
                  <CardDescription>{{ review.userName }}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
</template>
