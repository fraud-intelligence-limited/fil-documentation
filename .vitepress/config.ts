import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'FIB Documentation',
  description: 'Fraud Intelligence Blockchain documentation',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
          {
            text: 'Overview',
            link: '/api_docs/Overview.md',
            items: [
                  {
                    text: 'How FIB works',
                    link: '/api_docs/Overview/How_FIB_works.md',
                  },
                  {
                    text: 'Fraud events',
                    link: '/api_docs/Overview/Fraud_events.md',
                  },
                  {
                    text: 'Contributions',
                    link: '/api_docs/Overview/Contributions.md',
                  },
                  {
                    text: 'Tokenomics',
                    link: '/api_docs/Overview/Tokenomics.md',
                  },
            ],
          },
          {
            text: 'Getting started',
            link: '/api_docs/Getting_started.md',
            items: [
              {
                text: 'Registering an account',
                link: '/api_docs/Getting_started/Registering_an_account.md',
              },
              {
                text: 'Checking API availability',
                link: '/api_docs/Getting_started/Checking_API_availability.md',
              },
              {
                text: 'Calling API endpoints',
                link: '/api_docs/Getting_started/Calling_API_endpoints.md',
              },
              {
                text: 'Public test environment',
                link: '/api_docs/Getting_started/Public_test_environment.md',
              },
            ],
          },
            {
              text: 'Tutorials',
              link: '/api_docs/Tutorials.md',
              items: [
                  {
                    text: 'Generating key pairs',
                    link: '/api_docs/Tutorials/Generating_key_pairs.md',
                  },
                  {
                    text: 'Signing transactions',
                    link: '/api_docs/Tutorials/Signing_transactions.md',
                  },
                  {
                    text: 'Authorizing an account',
                    link: '/api_docs/Tutorials/Authorizing_an_account.md',
                  },
                  {
                    text: 'Retrieving top contributions',
                    link: '/api_docs/Tutorials/Retrieving_top_contributions.md',
                  },
                  {
                    text: 'Submitting a contribution',
                    link: '/api_docs/Tutorials/Submitting_a_contribution.md',
                    items: [{text: 'Verifying a contribution has been submitted', link: '/api_docs/Tutorials/Submitting_a_contribution/Verifying_a_contrubution_has_been_submitted.md'}],
                  },
                  {
                    text: 'Flagging a contribution',
                    link: '/api_docs/Tutorials/Flagging_a_contribution.md',
                    items: [{text: 'Verifying a contribution has been flagged', link: '/api_docs/Tutorials/Flagging_a_contribution/Verifying_a_contribution_has_been_flagged.md'}],
                  },
              ]
            },
              {
                text: 'API Specification',
                link: '/api_docs/API_Specification.md',
                        items: [
                              {
                                text: 'auth-controller',
                                items: [
                                  {
                                    text: 'Authorizing a user in the system',
                                    link: '/api_docs/API_Specification/auth-controller/Authorizing_a_user_in_the_system.md',
                                  },
                                  {
                                    text: 'Refreshing authentication tokens',
                                    link: '/api_docs/API_Specification/auth-controller/Refreshing_authentication_tokens.md',
                                  },
                                  {
                                    text: 'Retrieving salt values',
                                    link: '/api_docs/API_Specification/auth-controller/Retrieving_salt_values.md',
                                  },
                                      ],
                              },
                              {
                                text: 'wallet-controller',
                                items: [
                                    {
                                      text: 'Retrieving credit balance',
                                      link: '/api_docs/API_Specification/wallet-controller/Retrieving_credit_balance.md',
                                    },

                                      ],
                              },
                              {
                                text: 'peer-controller',
                                items: [
                                    {
                                      text: 'Requesting peer details',
                                      link: '/api_docs/API_Specification/peer-controller/Requesting_peer_details.md',
                                    },
                                    {
                                      text: 'Retrieving all premium peers',
                                      link: '/api_docs/API_Specification/peer-controller/Retrieving_all_premium_peers.md',
                                    },
                                      ],
                              },
                              {
                                text: 'contribution-controller',
                                items: [
                                  {
                                    text: 'Assembling a contribution',
                                    link: '/api_docs/API_Specification/contribution-controller/Assembling_a_contribution.md',
                                  },
                                  {
                                    text: 'Submitting a contribution',
                                    link: '/api_docs/API_Specification/contribution-controller/Submitting_a_contribution.md',
                                  },
                                  {
                                    text: 'Assembling a contribution flag',
                                    link: '/api_docs/API_Specification/contribution-controller/Assembling_a_contribution_flag.md',
                                  },
                                  {
                                    text: 'Flagging a contribution',
                                    link: '/api_docs/API_Specification/contribution-controller/Flagging_a_contribution.md',
                                  },
                                  {
                                    text: 'Requesting a contribution by ID',
                                    link: '/api_docs/API_Specification/contribution-controller/Requesting_a_contribution_by_ID.md',
                                  },
                                  {
                                    text: 'Retrieving top contributions',
                                    link: '/api_docs/API_Specification/contribution-controller/Retrieving_top_contributions.md',
                                  },
                                ],
                              },
                              {
                                text: 'premium-provider-controller',
                                items: [
                                  {
                                    text: 'Requesting access to premium contributions by a certain peer',
                                    link: '/api_docs/API_Specification/premium-provider-controller/Requesting_access_to_premium_contributions_by_a_certain_peer.md',
                                  },
                                  {
                                    text: 'Retrieving incoming premium contribution requests',
                                    link: '/api_docs/API_Specification/premium-provider-controller/Retrieving_incoming_premium_contribution_requests.md',
                                  },
                                  {
                                    text: 'Retrieving outgoing premium contribution requests',
                                    link: '/api_docs/API_Specification/premium-provider-controller/Retrieving_outgoing_premium_contribution_requests.md',
                                  },
                                ],
                              }
                                ],
              }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/fraud-intelligence-limited/documentation' }],
  },
})
