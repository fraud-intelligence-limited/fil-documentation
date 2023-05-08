# Tokenomics

This topic provides a summary of the key financial concepts that are operational on the platform.

## Payment model

The FIB provides a freemium pay-per-use model that allows users to earn and spend internal digital credits.

Credits can be spent on downloading fraud event data from other users.

## Uploading fraud events

In order to incentivize the registered peers to submit the fraud events that they have encountered, credits are rewarded for every submitted contribution.

See the following related tutorials:
- [Tutorials: Web UI > Uploading fraud data](../tutorials-web/uploading-fraud-data.md)
- [Tutorials: API > Submitting a contribution](../tutorials-api/submitting-a-contribution.md)

## Downloading fraud events

The earned credits can be used to pay for downloading the fraud event data stored on the blockchain, which enables peers to update their own records and stay informed about the latest fraudulent activities. This process helps organizations to remain vigilant and prevent fraudulent activities from occurring within their own system.

See the following related tutorials:
- [Tutorials: Web UI > Downloading fraud data](../tutorials-web/downloading-fraud-data.md)
- [Tutorials: API > Retrieving top contributions](../tutorials-api/retrieving-top-contributions.md)

## Credit balance

The number of digital credits that a peer has on their account, and that can be used to pay for downloading of fraud event data.

A peer can check their current credit balance by going to the [**Tokens**](web-interface.md#tokens) page of the FIB Web UI or by calling the following API endpoint: [Retrieving credit balance](../api-specification/wallet-controller/retrieving-credit-balance.md).

## Current conversion rate

- **Uploading fraud events**: `10` credits per `id` fraud identifier.
- **Downloading fraud events**: `1` credit per `id` fraud identifier.

## Welcome bonus

Every new peer that has successfully registered with FIB, automatically receives a 1000 credits bonus.

## Premium subscription

Our premium subscription offers custom paid conditions for users seeking to gain access to exclusive features and benefits, tailored to their individual needs.

To apply for a premium subscription and discuss the conditions, go to the [**Profile**](web-interface.md#profile) page of the FIB Web UI and select **Request** on the **Subscription** tab.

Alternatively, you may contact us at [support@fraudintelligencelimited.com](mailto:support@fraudintelligencelimited.com).

## Monthly reward limit

The monthly reward limit is currently 1,000,000,000 rewards per peer.

::: tip Info

_Fraud Intelligence Limited_ may from time to time, by an in-advance written email notice to you, adjust the reward limit, in accordance with the [RAG Fraud blockchain Terms & Conditions document](https://github.com/fraud-intelligence-limited/fil-legal/blob/main/RAG%20Fraud%20Blockchain%20Terms%20of%20Use%20v2.0.docx).

:::
