# Tokenomics

This topic provides a summary of the key financial concepts that are operational on the platform.

## Payment model

FIB provides a freemium pay-per-use model that allows users to earn and spend internal digital credits, called **tokens**.

Tokens can be spent on downloading fraud event data submitted to the system by other FIB users.

## Uploading fraud events

In order to incentivize the registered peers and their users to submit the fraud events that they have encountered, credits are rewarded for every submitted contribution.

See the following related tutorials:

- [Tutorials: Web App > Uploading fraud data](../tutorials-web/uploading-fraud-data.md)
- [Tutorials: API > Submitting a contribution](../tutorials-api/submitting-a-contribution.md)

## Downloading fraud events

The earned tokens can be used to pay for downloading the fraud event data stored on the blockchain, which enables peers to update their own records and stay informed about the latest fraudulent activities. This process helps organizations to remain vigilant and prevent fraudulent activities from occurring within their own system.

See the following related tutorials:

- [Tutorials: Web App > Downloading fraud data](../tutorials-web/downloading-fraud-data.md)
- [Tutorials: API > Retrieving contributions](../tutorials-api/retrieving-contributions.md)

## Token balance

The number of digital credits that a user has on their account, and that can be used to pay for downloading of fraud event data.

A user can check their current token balance in any of the following two ways:

- By calling the [Retrieving token balance](../api-specification/wallet-controller/retrieving-token-balance.md) endpoint as an [authorized user](../api-specification/auth-controller/authorizing-a-user-in-the-system.md).
- By checking the [Balance](web-interface.md#balance) section of the [Profile](web-interface.md#profile) screen as an account signed in to the [Web App](https://app.fraudintelligencelimited.com).

## Current conversion rate

- **Uploading fraud events**: `10` tokens per `id` fraud identifier.
- **Downloading fraud events**: `1` tokens per `id` fraud identifier.

## Confidence index

All of the contributions submitted to the blockchain are automatically evaluated and assigned a score—**confidence index**—which is a numeric representation of the level of certainty that a contribution is fraudulent.

When assigning a contribution with a confidence index value, FIB considers many crucial factors, such as the presence of CLI manipulation, origination from a known hotspot of fraudulent activity, attack patterns, event confirmation by multiple peers, etc.

[//]: <> (If necessary, a detailed description of how the confidence index is calculated may be added here or to the "Contributions" topic)

The confidence index value inherently affects the price of downloading the fraud event data. By default, users download fraud event data in accordance with the [current conversion rate](#current-conversion-rate). However, when [retrieving contributions](../api-specification/contribution-controller/retrieving-contributions.md) (see the `confidence-score` parameter) a user can specify whether they want the price of the retrieved contributions to be calculated in accordance with the confidence index. If enabled, the price of any given contribution is expected to rise above the [current conversion rate](#current-conversion-rate).

::: tip Note

As new fraud event data is uploaded to the blockchain, the confidence index value for any given contribution is constantly updated.

Contributions with a set confidence index value can be downloaded repeatedly with no extra charge to the user's token balance, even if the value has changed since the first retrieval.

:::

## Welcome bonus

Every new user that has successfully registered with FIB, automatically receives a `1,000` tokens bonus.

## Premium subscription

Our premium subscription offers custom paid conditions for users seeking to gain access to exclusive features and benefits, tailored to their individual needs.

<!-- To apply for a premium subscription and discuss the conditions, go to the [Profile](web-interface.md#profile) page of the FIB Web App and select **Request** on the **Subscription** tab. -->

Alternatively, you may contact us at [support@fraudintelligencelimited.com](mailto:support@fraudintelligencelimited.com).

## Monthly reward limit

The monthly reward limit is currently `1,000,000,000` tokens per peer.

A user can check their current limit status in any of the following two ways:

- By calling the [Retrieving peer limit status](../api-specification/peer-controller/retrieving-peer-limit-status.md) endpoint as an [authorized user](../api-specification/auth-controller/authorizing-a-user-in-the-system.md).
- By checking the [Balance](web-interface.md#balance) section of the [Profile](web-interface.md#profile) screen as an account logged in to the [Web App](https://app.fraudintelligencelimited.com).

::: warning

_Fraud Intelligence Limited_ may from time to time, by an in-advance written email notice to you, adjust the reward limit, in accordance with the [Fraud Intelligence Blockchain Terms & Conditions document](https://github.com/fraud-intelligence-limited/fil-legal/blob/main/Fraud%20Intelligence%20Blockchain%20Terms%20of%20Use%20v4.0.pdf).

:::
