module.exports = {
  title: "TamaRive玉川",
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
          to: "docs/Index",
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
          title: "腔体",
          items: [
            {
              label: "钟罩型",
              to: "docs/A1",
            },
            {
              label: "罐式",
              to: "docs/A2",
            },
            {
              label: "方型",
              to: "docs/A3",
            },
          ],
        },
        {
          title: "配件",
          items: [
            {
              label: "液氮冷阱",
              to: "docs/B4",
            },
            {
              label: "水冷阱",
              // href: "docs/C1",
              to: "docs/C1",
            },
            {
              label: "分子筛",
              // href: "docs/C1",
              to: "docs/C1",
            },
          ],
        },
        {
          title: "仪器",
          items: [
            {
              label: "氟油检漏仪",
              to: "http://www.twitter.com/tamariveworks",
            },
            {
              label: "溅射仪",
              to: "https://www.weibo.com/tamarive",
            },
            {
              label: "配气仪",
              to: "https://space.bilibili.com/298970669",
            },
          ],
        },
        {
          title: "设备",
          items: [
            {
              label: "真空炉",
              to: "http://www.twitter.com/tamariveworks",
            },
            {
              label: "环境模拟舱",
              to: "https://www.weibo.com/tamarive",
            },
            {
              label: "加注机",
              to: "https://space.bilibili.com/298970669",
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
          editUrl: "#",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "#",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
