import { defineConfig } from 'vitepress'
import uno from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'FIB Documentation',
  description: 'Fraud Intelligence Blockchain documentation',
  srcDir: 'src',
  vite: {
    plugins: [uno()],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Release Notes', link: '/release-notes/' },
    ],

    sidebar: {
      '/': [
        {
          text: 'Overview',
          link: '/overview.md',
          collapsed: true,
          items: [
            {
              text: 'How FIB works',
              link: '/overview/how-fib-works.md',
            },
            {
              text: 'Fraud events',
              link: '/overview/fraud-events.md',
            },
            {
              text: 'Contributions',
              link: '/overview/contributions.md',
            },
            {
              text: 'Tokenomics',
              link: '/overview/tokenomics.md',
            },
            {
              text: 'Web App UI',
              link: '/overview/web-interface.md',
            },
          ],
        },
        {
          text: 'Getting started',
          link: '/getting-started.md',
          collapsed: true,
          items: [
            {
              text: 'Registering an account',
              link: '/getting-started/registering-an-account.md',
            },
            {
              text: 'Checking API availability',
              link: '/getting-started/checking-api-availability.md',
            },
            {
              text: 'Calling API endpoints',
              link: '/getting-started/calling-api-endpoints.md',
            },
            {
              text: 'Public test environment',
              link: '/getting-started/public-test-environment.md',
            },
          ],
        },
        {
          text: 'Tutorials: Web App',
          link: '/tutorials-web.md',
          collapsed: true,
          items: [
            {
              text: 'Uploading fraud data',
              link: '/tutorials-web/uploading-fraud-data.md',
            },
            {
              text: 'Flagging fraud data',
              link: '/tutorials-web/flagging-fraud-data.md',
            },
            {
              text: 'Downloading fraud data',
              link: '/tutorials-web/downloading-fraud-data.md',
            },
          ],
        },
        {
          text: 'Tutorials: API',
          link: '/tutorials-api.md',
          collapsed: true,
          items: [
            {
              text: 'Signing user email addresses',
              link: '/tutorials-api/signing-user-email-addresses.md',
            },
            {
              text: 'Signing transactions',
              link: '/tutorials-api/signing-transactions.md',
            },
            {
              text: 'Authorizing an account',
              link: '/tutorials-api/authorizing-an-account.md',
            },
            {
              text: 'Retrieving top contributions',
              link: '/tutorials-api/retrieving-top-contributions.md',
            },
            {
              text: 'Submitting a contribution',
              link: '/tutorials-api/submitting-a-contribution.md',
              items: [
                {
                  text: 'Verifying a contribution has been submitted',
                  link: '/tutorials-api/submitting-a-contribution/verifying-a-contribution-has-been-submitted.md',
                },
              ],
            },
            {
              text: 'Flagging a contribution',
              link: '/tutorials-api/flagging-a-contribution.md',
              items: [
                {
                  text: 'Verifying a contribution has been flagged',
                  link: '/tutorials-api/flagging-a-contribution/verifying-a-contribution-has-been-flagged.md',
                },
              ],
            },
          ],
        },
        {
          text: 'API Specification',
          link: '/api-specification.md',
          items: [
            {
              text: 'auth-controller',
              collapsed: true,
              items: [
                {
                  text: 'Authorizing a user in the system',
                  link: '/api-specification/auth-controller/authorizing-a-user-in-the-system.md',
                },
                {
                  text: 'Refreshing authentication tokens',
                  link: '/api-specification/auth-controller/refreshing-authentication-tokens.md',
                },
                {
                  text: 'Logging a user out of the system',
                  link: '/api-specification/auth-controller/logging-a-user-out-of-the-system.md',
                },
              ],
            },
            {
              text: 'wallet-controller',
              collapsed: true,
              items: [
                {
                  text: 'Retrieving token balance',
                  link: '/api-specification/wallet-controller/retrieving-token-balance.md',
                },
              ],
            },
            {
              text: 'peer-controller',
              collapsed: true,
              items: [
                {
                  text: 'Retrieving user details',
                  link: '/api-specification/peer-controller/retrieving-user-details.md',
                },
                {
                  text: 'Retrieving peer limit state',
                  link: '/api-specification/peer-controller/retrieving-peer-limit-state.md',
                },
              ],
            },
            {
              text: 'contribution-controller',
              collapsed: true,
              items: [
                {
                  text: 'Assembling a contribution',
                  link: '/api-specification/contribution-controller/assembling-a-contribution.md',
                },
                {
                  text: 'Submitting a contribution',
                  link: '/api-specification/contribution-controller/submitting-a-contribution.md',
                },
                {
                  text: 'Assembling a contribution flag',
                  link: '/api-specification/contribution-controller/assembling-a-contribution-flag.md',
                },
                {
                  text: 'Submitting a contribution flag',
                  link: '/api-specification/contribution-controller/submitting-a-contribution-flag.md',
                },
                {
                  text: 'Retrieving a contribution by ID',
                  link: '/api-specification/contribution-controller/retrieving-a-contribution-by-ID.md',
                },
                {
                  text: 'Retrieving contributions',
                  link: '/api-specification/contribution-controller/retrieving-contributions.md',
                },
                {
                  text: 'Retrieving download pricing rate',
                  link: '/api-specification/contribution-controller/retrieving-pricing-rate.md',
                },
                {
                  text: 'Retrieving upload rewards rate',
                  link: '/api-specification/contribution-controller/retrieving-rewards-rate.md',
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/fraud-intelligence-limited/fil-documentation' }],

    search: {
      provider: 'local',
    },
  },
})
