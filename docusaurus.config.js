module.exports = {
  title: "TamaRive·玉川",
  tagline: "科学仪器",
  url: "https://tamarive.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "liudingxin", // Usually your GitHub org/user name.
  projectName: "tamarive", // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    // defaultDarkMode: true,
    navbar: {
      title: "TamaRive",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/doc1",
          activeBasePath: "docs",
          label: "文档",
          position: "left",
        },
        { to: "blog", label: "日志", position: "left" },

        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "产品",
          items: [
            {
              label: "配气仪",
              to: "docs/doc1",
            },
            {
              label: "氟油检漏仪",
              to: "docs/doc2",
            },
          ],
        },
        {
          title: "服务",
          items: [
            {
              label: "仪器保养维护及修理",
              to: "docs/doc3",
            },
            {
              label: "修理",
              to: "docs/doc3",
            },
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
            // },
          ],
        },
        {
          title: "其他",
          items: [
            {
              label: "The Dealer",
              to: "docs/doc3",
            },
            {
              label: "Blog",
              to: "blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TamaRive, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
