<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { AlertCircle, Building2, Phone, Mail, Clock } from "lucide-vue-next";

interface ContactFormeProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const contactForm = reactive<ContactFormeProps>({
  firstName: "",
  lastName: "",
  email: "",
  subject: "Web Development",
  message: "",
});

const invalidInputForm = ref<boolean>(false);

const handleSubmit = () => {
  const { firstName, lastName, email, subject, message } = contactForm;
  console.log(contactForm);

  const mailToLink = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

  window.location.href = mailToLink;
};
</script>

<template>
  <section id="contact" class="container py-24 md:py-32 md:max-w-[80%]">
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div class="mb-4">
          <h2 class="text-lg text-primary mb-2 tracking-wider">{{ $t('contact.title') }}</h2>

          <h2 class="text-3xl md:text-4xl font-bold">{{ $t('contact.connectWithUs') }}</h2>
        </div>
        <p class="mb-8 text-muted-foreground lg:w-5/6">
          {{ $t('contact.description') }}
        </p>

        <div class="flex flex-col gap-4">
          <div>
            <div class="flex gap-2 mb-1">
              <Building2 />
              <div class="font-bold">{{ $t('contact.findUs') }}</div>
            </div>

            <div>742 Evergreen Terrace, Springfield, IL 62704</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Phone />
              <div class="font-bold">{{ $t('contact.callUs') }}</div>
            </div>

            <div>+86 151 5719 0084</div>
            <div>+212</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Mail />
              <div class="font-bold">{{ $t('contact.mailUs') }}</div>
            </div>

            <div>contact@fmitradinggroup.com</div>
          </div>

          <div>
            <div class="flex gap-2">
              <Clock />
              <div class="font-bold">{{ $t('contact.visitUs') }}</div>
            </div>

            <div>
              <div>{{ $t('contact.mondayToFriday') }}</div>
              <div>{{ $t('contact.officeHours') }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- form -->
      <Card class="bg-muted/60 dark:bg-card">
        <CardHeader class="text-primary text-2xl"> </CardHeader>
        <CardContent>
          <form @submit.prevent="handleSubmit" class="grid gap-4">
            <div class="flex flex-col md:flex-row gap-8">
              <div class="flex flex-col w-full gap-1.5">
                <Label for="first-name">{{ $t('contact.firstName') }}</Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder=""
                  v-model="contactForm.firstName"
                />
              </div>

              <div class="flex flex-col w-full gap-1.5">
                <Label for="last-name">{{ $t('contact.lastName') }}</Label>
                <Input
                  id="last-name"
                  type="text"
                  placeholder=""
                  v-model="contactForm.lastName"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">{{ $t('contact.email') }}</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                v-model="contactForm.email"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="subject">{{ $t('contact.subject') }}</Label>

              <Select v-model="contactForm.subject">
                <SelectTrigger>
                  <SelectValue placeholder="{{ $t('contact.selectSubject') }}" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Product Sourcing">
                      {{ $t('contact.productSourcing') }}
                    </SelectItem>
                    <SelectItem value="Quality Assurance">
                      {{ $t('contact.qualityAssurance') }}
                    </SelectItem>
                    <SelectItem value="Shipping Solutions">
                      {{ $t('contact.shippingSolutions') }}
                    </SelectItem>
                    <SelectItem value="Payment Handling">
                      {{ $t('contact.paymentHandling') }}
                    </SelectItem>
                    <SelectItem value="General Inquiry">
                      {{ $t('contact.generalInquiry') }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="message">{{ $t('contact.message') }}</Label>
              <Textarea
                id="message"
                placeholder="{{ $t('contact.messagePlaceholder') }}"
                rows="5"
                v-model="contactForm.message"
              />
            </div>

            <Alert v-if="invalidInputForm" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>{{ $t('contact.error') }}</AlertTitle>
              <AlertDescription>
                {{ $t('contact.errorMessage') }}
              </AlertDescription>
            </Alert>

            <Button class="mt-4">{{ $t('contact.submit') }}</Button>
          </form>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </section>
  </section>
</template>
