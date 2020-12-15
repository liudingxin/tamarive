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
              label: "液氮冷阱与过滤器",
              to: "docs/doc1",
            },
            {
              label: "配气仪",
              to: "docs/doc1",
            },
            {
              label: "氟油检漏仪",
              to: "docs/doc2",
            },
            {
              label: "小型离子溅射仪",
              to: "docs/doc2",
            },
          ],
        },
        {
          title: "服务",
          items: [
            {
              label: "真空腔体加工",
              to: "docs/doc3",
            },
            {
              label: "实验设备定制",
              href: "docs/doc3",
            },
          ],
        },
        {
          title: "关注",
          items: [
            {
              label: "Twitter（大陆地区无法访问）",
              to: "http://www.twitter.com/tamariveworks",
            },
            {
              label: "微博",
              to: "https://www.weibo.com/tamarive",
            },
            {
              label: "B站",
              to: "https://space.bilibili.com/298970669",
            },
            {
              label: "抖音/视频号/公众号",
              to: "docs/doc3",
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
