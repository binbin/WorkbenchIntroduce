// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const tailwindPlugin = require("./plugins/tailwind-plugin.cjs");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "中心工作台",
  // scripts: [
  //   {
  //     src: "https://hm.baidu.com/hm.js?66d9b2c1629401a79d6b73414a42551d",
  //     async: true,
  //   },
  // ],

  tagline: "集合多元，从此工作不再分心",
  url: "https://www.51chifeng.cn",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "binbin",
  projectName: "51chifeng.cn",
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    tailwindPlugin,
    [
      require.resolve("docusaurus-plugin-baidu-tongji"),
      {
        token: "66d9b2c1629401a79d6b73414a42551d",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "中心工作台",
        logo: {
          alt: "集合多元，从此工作不再分心",
          src: "img/logo.svg",
        },
        items: [
          // todo: multiple version config
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'left',
          //   dropdownActiveClassDisabled: true,
          // },
          {
            type: "doc",
            docId: "👋 简介",
            position: "left",
            label: "详细说明",
          },
          { to: "/blog", label: "产品资讯", position: "left" },
          {
            href: "http://demo.51chifeng.cn/",
            label: "立即体验",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust"],
      },
    }),
};

module.exports = config;
