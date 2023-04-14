import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'FIB Documentation',
  description: 'Fraud Intelligence Blockchain documentation',
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/' },
    ],

    sidebar: {
      '/': [
        {
          text: 'Overview',
          link: '/overview.md',
          items: [
            {
              text: 'How FIB works',
              link: '/overview/how_fib_works.md',
            },
            {
              text: 'Fraud events',
              link: '/overview/fraud_events.md',
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
          link: '/getting_started.md',
          items: [
            {
              text: 'Registering an account',
              link: '/getting_started/registering_an_account.md',
            },
            {
              text: 'Checking API availability',
              link: '/getting_started/checking_api_availability.md',
            },
            {
              text: 'Calling API endpoints',
              link: '/getting_started/calling_api_endpoints.md',
            },
            {
              text: 'Public test environment',
              link: '/getting_started/public_test_environment.md',
            },
          ],
        },
        {
          text: 'Tutorials',
          link: '/tutorials.md',
          items: [
            {
              text: 'Generating key pairs',
              link: '/tutorials/generating_key_pairs.md',
            },
            {
              text: 'Signing transactions',
              link: '/tutorials/signing_transactions.md',
            },
            {
              text: 'Authorizing an account',
              link: '/tutorials/authorizing_an_account.md',
            },
            {
              text: 'Retrieving top contributions',
              link: '/tutorials/retrieving_top_contributions.md',
            },
            {
              text: 'Submitting a contribution',
              link: '/tutorials/submitting_a_contribution.md',
              items: [
                {
                  text: 'Verifying a contribution has been submitted',
                  link: '/tutorials/submitting_a_contribution/verifying_a_contrubution_has_been_submitted.md',
                },
              ],
            },
            {
              text: 'Flagging a contribution',
              link: '/tutorials/flagging_a_contribution.md',
              items: [
                {
                  text: 'Verifying a contribution has been flagged',
                  link: '/tutorials/flagging_a_contribution/verifying_a_contribution_has_been_flagged.md',
                },
              ],
            },
          ],
        },
        {
            text: 'API Specification',
            link: '/api_specification.md',
            items: [
              {
                text: 'auth-controller',
                items: [
                  {
                    text: 'Authorizing a user in the system',
                    link: '/api_specification/auth-controller/authorizing_a_user_in_the_system.md',
                  },
                  {
                    text: 'Refreshing authentication tokens',
                    link: '/api_specification/auth-controller/refreshing_authentication_tokens.md',
                  },
                  {
                    text: 'Retrieving salt values',
                    link: '/api_specification/auth-controller/retrieving_salt_values.md',
                  },
                ],
              },
              {
                text: 'wallet-controller',
                items: [
                  {
                    text: 'Retrieving credit balance',
                    link: '/api_specification/wallet-controller/retrieving_credit_balance.md',
                  },
                ],
              },
              {
                text: 'peer-controller',
                items: [
                  {
                    text: 'Requesting peer details',
                    link: '/api_specification/peer-controller/requesting_peer_details.md',
                  },
                  {
                    text: 'Retrieving all premium peers',
                    link: '/api_specification/peer-controller/retrieving_all_premium_peers.md',
                  },
                ],
              },
              {
                text: 'contribution-controller',
                items: [
                  {
                    text: 'Assembling a contribution',
                    link: '/api_specification/contribution-controller/assembling_a_contribution.md',
                  },
                  {
                    text: 'Submitting a contribution',
                    link: '/api_specification/contribution-controller/submitting_a_contribution.md',
                  },
                  {
                    text: 'Assembling a contribution flag',
                    link: '/api_specification/contribution-controller/assembling_a_contribution_flag.md',
                  },
                  {
                    text: 'Flagging a contribution',
                    link: '/api_specification/contribution-controller/flagging_a_contribution.md',
                  },
                  {
                    text: 'Requesting a contribution by ID',
                    link: '/api_specification/contribution-controller/requesting_a_contribution_by_ID.md',
                  },
                  {
                    text: 'Retrieving top contributions',
                    link: '/api_specification/contribution-controller/retrieving_top_contributions.md',
                  },
                ],
              },
              {
                text: 'premium-provider-controller',
                items: [
                  {
                    text: 'Requesting access to premium contributions by a certain peer',
                    link: '/api_specification/premium-provider-controller/requesting_access_to_premium_contributions_by_a_certain_peer.md',
                  },
                  {
                    text: 'Retrieving incoming premium contribution requests',
                    link: '/api_specification/premium-provider-controller/retrieving_incoming_premium_contribution_requests.md',
                  },
                  {
                    text: 'Retrieving outgoing premium contribution requests',
                    link: '/api_specification/premium-provider-controller/retrieving_outgoing_premium_contribution_requests.md',
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
