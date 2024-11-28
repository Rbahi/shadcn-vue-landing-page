<script setup lang="ts">
import { ref, onMounted } from "vue";

const videos = ref([
  "/hero-videos/cargosz.mp4",
  "/hero-videos/cargoship.mp4",
  "/hero-videos/cargo1.mp4",
]);
const currentVideoIndex = ref(0);
const fading = ref(false);

const changeVideo = () => {
  fading.value = true;
  setTimeout(() => {
    currentVideoIndex.value =
      (currentVideoIndex.value + 1) % videos.value.length;
    fading.value = false;
  }, 1000);
};

onMounted(() => {
  setInterval(changeVideo, 5000);
});

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
</script>

<template>
  <section class="container">
    <div class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-16">
      <div class="text-center space-y-8">
        <Badge variant="outline" class="text-sm py-2 pr-3">
          <span class="mr-2 text-primary">
            <Badge>{{ $t("hero.badge.new") }}</Badge>
          </span>
          <span>{{ $t("hero.badge.message") }}</span>
        </Badge>

        <div
          class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold"
        >
          <h1>
            <span class="block">{{ $t("hero.title.welcome") }}</span>
            <span
              class="text-transparent bg-gradient-to-r from-[rgb(164,115,237)] to-primary bg-clip-text"
            >
              {{ $t("hero.title.brand") }}
            </span>
            <span class="block">{{ $t("hero.title.slogan") }}</span>
          </h1>
        </div>

        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          {{ $t("hero.description") }}
        </p>

        <div class="space-y-4 md:space-y-0 md:space-x-4">
          <Button as-child class="w-5/6 md:w-1/4 font-bold group/arrow animate-pulse duration-1000 shadow-2xl">
            <a href="https://wa.me/8615157190084" target="_blank" class="flex">
              {{ $t("hero.buttons.getStarted") }}
              <ArrowRight
                class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
              />
            </a>
          </Button>

          <Button as-child variant="secondary" class="w-5/6 md:w-1/4 font-bold">
            <a href="#popular-products">{{ $t("hero.buttons.mostPopular") }}</a>
          </Button>
        </div>
      </div>

      <div class="relative aspect-video w-full group mt-14">
        <!-- gradient shadow -->
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <div class="relative">
          <video
            class="w-full md:w-[1200px] mx-auto rounded-2xl relative leading-none flex items-center transition-all duration-1000"
            autoplay
            muted
            loop
            playsinline
            :src="videos[currentVideoIndex]"
            :class="{ 'opacity-0': fading, 'opacity-100': !fading }"
          ></video>
        </div>

        <!-- gradient effect img -->
        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}
</style>
