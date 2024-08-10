import type { Theme } from "vitepress";

import Layout from "./Layout.vue";
// main.ts
import "virtual:uno.css";

export default {
  Layout,
  enhanceApp(ctx) {},
} satisfies Theme;
