import { defineConfig } from "vitepress";
export default defineConfig({
  //基本配置
  lang: "zh-CN",
  title: "Yeshan-Taoist`s Blog",
  description: "一个菜鸟前端工程师的自我进阶之路",
  appearance: true,
  base: "/tech-note/",
  head: [],
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
  outDir: "./.vitepress/dist",
  srcDir: "./src",
  // 主题配置
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "首页 HOME", link: "" },
      { text: "日常 DAILY", link: "" },
      {
        text: "经阁 JINGGE",
        items: [
          {
            text: "HTML",
            items: [
              { text: "1", link: "" },
              { text: "2", link: "" },
            ],
          },
          {
            text: "CSS",
            items: [
              { text: "1", link: "" },
              { text: "2", link: "" },
            ],
          },
          {
            text: "JavaScript",
            items: [
              { text: "1", link: "" },
              { text: "2", link: "" },
            ],
          },
        ],
      },
      { text: "会客 CONTACT", link: "" },
      { text: "自我 ONEELF", link: "" },
    ],
    sidebar: {},
  },
});
