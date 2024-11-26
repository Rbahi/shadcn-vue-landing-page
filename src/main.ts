import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import { injectSpeedInsights } from "@vercel/speed-insights";

// Import vue-i18n and the translations
import { createI18n } from "vue-i18n";
import { messages } from "./locales";

// Initialize Vercel speed insights
injectSpeedInsights();

// Detect the user's browser/system language
const userLanguage = navigator.language.split("-")[0] || "en";

// Initialize vue-i18n
const i18n = createI18n({
  locale: userLanguage, // Set the detected language as the initial locale
  fallbackLocale: "en", // Use English as the fallback language
  messages, // Use the messages imported from locales
});

// Detect and apply the user's device theme
const userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

// Apply the detected theme to the HTML element
document.documentElement.classList.add(userTheme);

// Listen for system theme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const newTheme = e.matches ? "dark" : "light";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
  });

// Create the Vue app
const app = createApp(App);

// Use the i18n plugin
app.use(i18n);

app.mount("#app");
