import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'FIB Documentation',
  description: 'Fraud Intelligence Blockchain documentation',
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Guide', link: '/' }],

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
          text: 'Tutorials',
          link: '/tutorials.md',
          collapsed: true,
          items: [
            {
              text: 'Generating key pairs',
              link: '/tutorials/generating-key-pairs.md',
            },
            {
              text: 'Signing transactions',
              link: '/tutorials/signing-transactions.md',
            },
            {
              text: 'Authorizing an account',
              link: '/tutorials/authorizing-an-account.md',
            },
            {
              text: 'Retrieving top contributions',
              link: '/tutorials/retrieving-top-contributions.md',
            },
            {
              text: 'Submitting a contribution',
              link: '/tutorials/submitting-a-contribution.md',
              items: [
                {
                  text: 'Verifying a contribution has been submitted',
                  link: '/tutorials/submitting-a-contribution/verifying-a-contribution-has-been-submitted.md',
                },
              ],
            },
            {
              text: 'Flagging a contribution',
              link: '/tutorials/flagging-a-contribution.md',
              items: [
                {
                  text: 'Verifying a contribution has been flagged',
                  link: '/tutorials/flagging-a-contribution/verifying-a-contribution-has-been-flagged.md',
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
                  text: 'Retrieving salt values',
                  link: '/api-specification/auth-controller/retrieving-salt-values.md',
                },
              ],
            },
            {
              text: 'wallet-controller',
              collapsed: true,
              items: [
                {
                  text: 'Retrieving credit balance',
                  link: '/api-specification/wallet-controller/retrieving-credit-balance.md',
                },
              ],
            },
            {
              text: 'peer-controller',
              collapsed: true,
              items: [
                {
                  text: 'Requesting peer details',
                  link: '/api-specification/peer-controller/requesting-peer-details.md',
                },
                {
                  text: 'Retrieving all premium peers',
                  link: '/api-specification/peer-controller/retrieving-all-premium-peers.md',
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
                  text: 'Flagging a contribution',
                  link: '/api-specification/contribution-controller/flagging-a-contribution.md',
                },
                {
                  text: 'Requesting a contribution by ID',
                  link: '/api-specification/contribution-controller/requesting-a-contribution-by-ID.md',
                },
                {
                  text: 'Retrieving top contributions',
                  link: '/api-specification/contribution-controller/retrieving-top-contributions.md',
                },
              ],
            },
            {
              text: 'premium-provider-controller',
              collapsed: true,
              items: [
                {
                  text: 'Requesting access to premium contributions by a certain peer',
                  link: '/api-specification/premium-provider-controller/requesting-access-to-premium-contributions-by-a-certain-peer.md',
                },
                {
                  text: 'Retrieving incoming premium contribution requests',
                  link: '/api-specification/premium-provider-controller/retrieving-incoming-premium-contribution-requests.md',
                },
                {
                  text: 'Retrieving outgoing premium contribution requests',
                  link: '/api-specification/premium-provider-controller/retrieving-outgoing-premium-contribution-requests.md',
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/fraud-intelligence-limited/documentation' }],
  },
})
