// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VoceChat',
  tagline: 'Vocechat Document Site',
  url: 'https://doc.voce.chat.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://voce.chat/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'privoce', // Usually your GitHub org/user name.
  projectName: 'vocechat-server', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/privoce/vocechat-doc/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'VoceChat',
        logo: {
          alt: 'VoceChat Logo',
          src: 'https://voce.chat/favicon.ico',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            href: 'https://github.com/privoce/vocechat-server',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                to: 'https://voce.chat',
              },
              {
                label: 'Demo',
                href: 'https://privoce.voce.chat',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Privoce, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'YOUR_APP_ID',

      //   // Public API key: it is safe to commit it
      //   apiKey: 'YOUR_SEARCH_API_KEY',

      //   indexName: 'YOUR_INDEX_NAME',

      //   // Optional: see doc section below
      //   contextualSearch: true,

      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: 'external\\.com|domain\\.com',

      //   // Optional: Algolia search parameters
      //   searchParameters: {},

      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',

      //   //... other Algolia params
      // },
    }),
};

module.exports = config;
