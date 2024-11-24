import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";

// Import vue-i18n and the translations
import { createI18n } from "vue-i18n";
import { messages } from "./locales";

// Detect the user's browser/system language
const userLanguage = navigator.language.split("-")[0] || "en";

// Initialize vue-i18n
const i18n = createI18n({
  locale: userLanguage, // Set the detected language as the initial locale
  fallbackLocale: "en", // Use English as the fallback language
  messages, // Use the messages imported from locales
});

// Create the Vue app
const app = createApp(App);

// Use the i18n plugin
app.use(i18n);

app.mount("#app");
