import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "汪志恒的博客",
  description: "永远保持好奇",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "主页", link: "/" }],

    sidebar: [
      // {
      //   text: "Examples",
      //   items: [
      //     { text: "Markdown Examples", link: "/markdown-examples" },
      //     { text: "Runtime API Examples", link: "/api-examples" },
      //   ],
      // },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/ion1ze" }],
  },
});
