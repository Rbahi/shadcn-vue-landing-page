<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods, including bank transfers, letters of credit, and secure online payments. Contact us to discuss the best option for your needs.",
    value: "item-1",
  },
  {
    question: "Do you ship by air and sea?",
    answer:
      "Yes, we offer both air and sea shipping options. The choice depends on your timeline, budget, and the nature of the goods being transported.",
    value: "item-2",
  },
  {
    question: "Which regions do you operate in?",
    answer:
      "We operate globally, with a strong focus on Asia, the Middle East, Europe, and North America. However, we can handle shipments to almost any location worldwide.",
    value: "item-3",
  },
  {
    question: "Can you handle customs clearance?",
    answer:
      "Yes, we provide comprehensive customs clearance services to ensure that your goods comply with all local regulations and requirements.",
    value: "item-4",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on the mode of transportation and destination. Air shipments typically take 3-7 days, while sea shipments can take 2-6 weeks.",
    value: "item-5",
  },
  {
    question: "Do you provide tracking for shipments?",
    answer:
      "Yes, we provide tracking for all shipments so you can monitor your goods throughout the shipping process.",
    value: "item-6",
  },
  {
    question: "What types of products can you import or export?",
    answer:
      "We handle a wide variety of goods, including electronics, textiles, machinery, and consumer products. Let us know your requirements for specific product categories.",
    value: "item-7",
  },
  {
    question: "Do you offer insurance for shipments?",
    answer:
      "Yes, we can arrange insurance for your shipments to protect your goods against loss or damage during transit.",
    value: "item-8",
  },
  {
    question: "Can you assist with product sourcing from China?",
    answer:
      "Yes, we specialize in sourcing high-quality products directly from manufacturers in China. We also conduct quality checks to ensure that the goods meet your standards.",
    value: "item-9",
  },
  {
    question: "Do you handle bulk orders?",
    answer:
      "Yes, we are experienced in managing bulk orders and can provide competitive pricing and efficient logistics solutions.",
    value: "item-10",
  },
];
</script>

<template>
  <section id="faq" class="container md:w-[700px] py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        {{ $t("faq.title") }}
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        {{ $t("faq.commonQuestions") }}
      </h2>
    </div>

    <Accordion type="single" collapsible class="AccordionRoot">
      <AccordionItem
        v-for="item in FAQList"
        :key="item.value"
        :value="item.value"
      >
        <AccordionTrigger class="text-left">{{
          $t("faq.questions." + item.value)
        }}</AccordionTrigger>

        <AccordionContent>{{
          $t("faq.answers." + item.value)
        }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      {{ $t("faq.stillHaveQuestions") }}
      <a href="#contact" class="underline text-muted-foreground">{{ $t("faq.contactUs") }}</a>
    </h3>
  </section>
</template>
