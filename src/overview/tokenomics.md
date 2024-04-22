# Tokenomics

This topic provides a summary of the key financial concepts that are operational on the platform.

## Subscription types

FIB provides its users with the following two types of subscription:

#### Freemium

Pay-per-use model that allows its users to earn and spend internal digital credits, called **tokens**.

Tokens can be earned by [uploading fraud events](#uploading-fraud-events) and spent on [downloading fraud events](#downloading-fraud-events).

Freemium subscription is available for all registered FIB users and applies all of the rules described in this documentation.

#### Premium

Paid model that allows its users to have unlimited access to the fraud data stored on the network.

Base price of a Premium subscription is `1,000` USD per month. However, if you require exclusive features and benefits, these can be discussed individually and may affect the base price of the subscription.

To apply for a Premium subscription, please contact us at [support@fraudintelligencelimited.com](mailto:support@fraudintelligencelimited.com).

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

Users registered under the same peer share the same token balance.

A user can check their current token balance in any of the following two ways:

- By calling the [Retrieving token balance](../api-specification/wallet-controller/retrieving-token-balance.md) endpoint as an [authorized user](../api-specification/auth-controller/authorizing-a-user-in-the-system.md).
- By checking the [Balance](web-interface.md#balance) section of the [Profile](web-interface.md#profile) screen as an account signed in to the [Web App](https://app.fraudintelligencelimited.com).

## Current conversion rate

- **Uploading fraud events**: `10` tokens per `id` fraud identifier.
- **Downloading fraud events**: `1` token per `id` fraud identifier.

## Welcome bonus

Every new user that has successfully registered with FIB, automatically receives a `1,000` tokens bonus.

## Monthly reward limit

The monthly reward limit is currently `1,000,000,000` tokens per peer.

A user can check their current limit status in any of the following two ways:

- By calling the [Retrieving peer limit state](../api-specification/peer-controller/retrieving-peer-limit-state.md) endpoint as an [authorized user](../api-specification/auth-controller/authorizing-a-user-in-the-system.md).
- By checking the [Balance](web-interface.md#balance) section of the [Profile](web-interface.md#profile) screen as an account logged in to the [Web App](https://app.fraudintelligencelimited.com).

::: warning

_Fraud Intelligence Limited_ may from time to time, by an in-advance written email notice to you, adjust the reward limit, in accordance with the [Fraud Intelligence Blockchain Terms & Conditions document](https://github.com/fraud-intelligence-limited/fil-legal/blob/main/Fraud%20Intelligence%20Blockchain%20Terms%20of%20Use%20v4.0.pdf).

:::

## Confidence index

All of the contributions submitted to the blockchain are automatically evaluated and assigned a score—**confidence index**—which is a numeric representation of the level of certainty that a contribution is fraudulent.

When assigning a contribution with a confidence index value, FIB considers many crucial factors, such as the presence of CLI manipulation, origination from a known hotspot of fraudulent activity, attack patterns, event confirmation by multiple peers, etc.

[//]: <> (If necessary, a detailed description of how the confidence index is calculated may be added here or to the "Contributions" topic)

The confidence index value inherently affects the price of downloading the fraud event data. By default, users download fraud event data in accordance with the [current conversion rate](#current-conversion-rate). However, when [retrieving contributions](../api-specification/contribution-controller/retrieving-contributions.md) (see the `confidence-score` parameter) a user can specify whether they want the price of the retrieved contributions to be calculated in accordance with the confidence index. If enabled, the price of any given contribution might rise above the [current conversion rate](#current-conversion-rate).

::: tip Note

As new fraud event data is uploaded to the blockchain, the confidence index value for any given contribution is constantly updated.

Contributions with a set confidence index value can be downloaded repeatedly with no extra charge to the user's token balance, even if the value has changed since the first retrieval.

:::
