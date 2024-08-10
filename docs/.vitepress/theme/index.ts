import type { Theme } from "vitepress";

import Layout from "./Layout.vue";
// main.ts
import "virtual:uno.css";
import "github-markdown-css/github-markdown.css";
import "./index.scss";

export default {
  Layout,
  enhanceApp(ctx) {},
} satisfies Theme;
