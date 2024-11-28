import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import { inject } from "@vercel/analytics";
import { createI18n } from "vue-i18n";
import { messages } from "./locales";
import { createHead, useHead } from "@vueuse/head";

// Initialize Vercel analytics
inject();

// Read the 'lang' query parameter, or default to the browser/system language
const urlParams = new URLSearchParams(window.location.search);
const langFromUrl = urlParams.get("lang");
const userLanguage = langFromUrl || navigator.language.split("-")[0] || "en";

// Initialize vue-i18n
const i18n = createI18n({
  locale: userLanguage, // Set the detected language (from URL or browser) as the initial locale
  fallbackLocale: "en", // Use English as the fallback language
  messages, // Use the messages imported from locales
});

// Detect and apply the user's device theme
const userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
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

// Create and configure vueuse/head for dynamic meta tags
const head = createHead();
app.use(head);

// Dynamic meta content based on the current language
const metaData = {
  en: {
    title: "FMI Trading Group - Reliable Global Sourcing & Logistics",
    description:
      "FMI Trading Group specializes in import-export services, offering reliable sourcing from China, efficient logistics, and seamless shipping solutions for global businesses.",
    keywords:
      "FMI Trading Group, global sourcing, China imports, quality products, logistics solutions, import export, trading company, international shipping, reliable sourcing, product sourcing, supply chain management",
  },
  ar: {
    title: "مجموعة FMI للتجارة - المصدر الموثوق عالميًا والخدمات اللوجستية",
    description:
      "مجموعة FMI للتجارة متخصصة في خدمات الاستيراد والتصدير، حيث تقدم مصادر موثوقة من الصين، والخدمات اللوجستية الفعالة، وحلول الشحن السلسة للشركات العالمية.",
    keywords:
      "مجموعة FMI للتجارة, الاستيراد من الصين, منتجات ذات جودة, الحلول اللوجستية, التصدير, خدمات الشحن, المورد الموثوق, استيراد منتجات",
  },
  fr: {
    title:
      "FMI Trading Group - Approvisionnement fiable et logistique mondiale",
    description:
      "FMI Trading Group se spécialise dans les services d'importation et d'exportation, en offrant un approvisionnement fiable en provenance de Chine, une logistique efficace et des solutions d'expédition sans faille pour les entreprises mondiales.",
    keywords:
      "FMI Trading Group, approvisionnement global, importation de Chine, produits de qualité, solutions logistiques, exportation, fournisseur fiable, gestion de la chaîne d'approvisionnement",
  },
  es: {
    title: "FMI Trading Group - Suministro fiable y logística global",
    description:
      "FMI Trading Group se especializa en servicios de importación y exportación, ofreciendo un suministro confiable desde China, logística eficiente y soluciones de envío sin problemas para empresas globales.",
    keywords:
      "FMI Trading Group, abastecimiento global, importación de China, productos de calidad, soluciones logísticas, exportación, proveedor confiable, gestión de la cadena de suministro",
  },
};

// Set dynamic title, description, and keywords based on the selected language
const currentMeta =
  metaData[userLanguage as keyof typeof metaData] || metaData.en;

useHead({
  title: currentMeta.title, // Dynamic title
  meta: [
    { name: "description", content: currentMeta.description }, // Dynamic description
    { name: "keywords", content: currentMeta.keywords }, // Dynamic keywords
  ],
});

// Set <hreflang> tags dynamically based on the language selection
const baseUrl = "https://fmitradinggroup.com"; // Replace with your actual domain
const hreflangLinks = [
  { lang: "en", href: `${baseUrl}` },
  { lang: "ar", href: `${baseUrl}?lang=ar` },
  { lang: "fr", href: `${baseUrl}?lang=fr` },
  { lang: "es", href: `${baseUrl}?lang=es` },
];

// Dynamically inject <hreflang> tags into the page head
useHead({
  link: hreflangLinks.map((link) => ({
    rel: "alternate",
    hreflang: link.lang,
    href: link.href,
  })),
});

// Use the i18n plugin
app.use(i18n);

app.mount("#app");
