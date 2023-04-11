# Contributions

> **Contribution** — a piece of data that describes a fraud event on the blockchain.

Contributions can be submitted by authorized peers, and are stored on the blockchain.

A peer that has contributed at least a single fraud event is considered a **_contributor_**.

## Operations

### Submitting contributions

Once a contribution has been submitted, the peer’s list of contributions is updated, and their credit balance is increased by an amount equal to the number of contributions submitted based on the current reward rate active in the network.

For complete instructions on how to submit a contribution, see _[Submitting a contribution](../Tutorials/Submitting_a_contribution.md)_.

For information on the credit balance and rewards, see _[Tokenomics](./Tokenomics.md)_.

### Retrieving contributions

In order for peers to keep their own records updated with the latest fraud event data, they can _[retrieve top contributions in a number of ways](../Tutorials/Retrieving_top_contributions.md)_.

### Flagging contributions

If a peer deems a certain contribution to no longer be relevant (e.g., _it is a false positive_), they can _[flag that contribution](../Tutorials/Flagging_a_contribution.md)_.

## API requests data structure

When _[retrieving top contributions](../API_Specification/contribution-controller/Retrieving_top_contributions.md)_, the following data is returned in the body of the response:

::: details Show

| Field | Value Type | Description |
| --- | --- | --- |
| `id` | `string` | Fraud event identifier. |
| `fraudType` | `enum string` | The type of the fraud event. <br> Could be one of the following: <br> 1. `Wangiri` <br> 2. `IRSF` <br> 3. `StolenDevice` <br> 4. `IPFraud` <br> 5. `SMSA2P` |
| `origination` | `string` | The two-digit code of the country the fraud event originated from (Alpha-2, ISO 3166). |
| `destination` | `string` | The two-digit code of the country the fraud event was identified as such (Alpha-2, ISO 3166). |
| `expiryDate` | `integer($int32)` | The exact time and date until which the event is considered relevant (represented as https://www.epochconverter.com/clock in seconds). |
| `fraudStatus` | `enum string` | The status of the event at the time of observing. <br> Could be one of the following: <br> 1. **Active** <br> 2. **Expired** <br> 3. **Flagged** |
| `confidenceIndex` | `number($double)` | The predicted fraud likelihood score in the range from 1 to 100. |
| `isPremium` | `boolean` | The definition of whether the contributor is a premium user. |
| `peerId` | `string` | The unique key of the peer that contributed the data. |

:::

When _[assembling a contribution](../API_Specification/contribution-controller/Assembling_a_contribution.md)_ to then _[submit it](../API_Specification/contribution-controller/Submitting_a_contribution.md)_, the following data must be specified in the body of the request:

::: details Show

| Field | Value Type | Description |
| --- | --- | --- |
| `id` | `string` | Fraud event identifier. |
| `fraudType` | `enum string` | The type of the fraud event. <br> Could be one of the following: <br> 1. `Wangiri` <br> 2. `IRSF` <br> 3. `StolenDevice` <br> 4. `IPFraud` <br> 5. `SMSA2P` |
| `origination` | `string` | The two-digit code of the country the fraud event originated from (Alpha-2, ISO 3166). |
| `destination` | `string` | The two-digit code of the country the fraud event was identified as such (Alpha-2, ISO 3166). |
| `expiryDate` | `integer($int32)` | The exact time and date until which the event is considered relevant (represented as https://www.epochconverter.com/clock in seconds). |

:::
