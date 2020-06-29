module.exports = {
  title: "TamaRive",
  tagline: "Scientific Instrument & Experimental Device",
  url: "https://tamarive.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "liudingxin", // Usually your GitHub org/user name.
  projectName: "tamarive", // Usually your repo name.
  themeConfig: {
    disableDarkMode: false,
    defaultDarkMode: true,
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
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },

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
          title: "Products",
          items: [
            {
              label: "FlowBox",
              to: "docs/doc1",
            },
            {
              label: "Second Doc",
              to: "docs/doc2",
            },
          ],
        },
        {
          title: "Lab",
          items: [
            {
              label: "The Dealer",
              to: "docs/doc3",
            },
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
            // },
            // {
            //   label: "Discord",
            //   href: "https://discordapp.com/invite/docusaurus",
            // },
            // {
            //   label: "Twitter",
            //   href: "https://twitter.com/docusaurus",
            // },
          ],
        },
        {
          title: "More",
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
