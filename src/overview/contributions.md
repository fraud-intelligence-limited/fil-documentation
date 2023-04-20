# Contributions

> **Contribution** — a piece of data that describes a fraud event on the blockchain.

Contributions can be submitted by authorized peers, and are stored on the blockchain.

A peer that has contributed at least a single fraud event is considered a **_contributor_**.

## Operations

### Submitting contributions

Once a contribution has been submitted, the peer’s list of contributions is updated, and their credit balance is increased by an amount equal to the number of contributions submitted based on the current reward rate active in the network.

For complete instructions on how to submit a contribution, see [Submitting a contribution](../tutorials/submitting-a-contribution.md).

For information on the credit balance and rewards, see [Tokenomics](./tokenomics.md).

### Retrieving contributions

In order for peers to keep their own records updated with the latest fraud event data, they can [retrieve top contributions in a number of ways](../tutorials/retrieving-top-contributions.md).

### Flagging contributions

If a peer deems a certain contribution to no longer be relevant (e.g., _it is a false positive_), they can [flag that contribution](../tutorials/flagging-a-contribution.md).

## API requests data structure

When [retrieving top contributions](../api-specification/contribution-controller/retrieving-top-contributions.md), the following data is returned in the body of the response:

::: details Request body

| Field | Value Type | Description |
| --- | --- | --- |
| `id` | `string` | Fraud event identifier. |
| `fraudType` | `enum string` | The type of the fraud event. <br> Could be one of the following: <ol><li>`Wangiri`</li><li>`IRSF`</li><li>`StolenDevice`</li><li>`IPFraud`</li><li>`SMSA2P`</li></ol> |
| `origination` | `string` | The two-digit code of the country the fraud event originated from (Alpha-2, ISO 3166). |
| `destination` | `string` | The two-digit code of the country the fraud event was identified as such (Alpha-2, ISO 3166). |
| `expiryDate` | `integer($int32)` | The exact time and date until which the event is considered relevant (represented as https://www.epochconverter.com/clock in seconds). |
| `fraudStatus` | `enum string` | The status of the event at the time of observing. <br> Could be one of the following: <ol><li>`Active`</li><li>`Expired`</li><li>`Flagged`</li></ol> |
| `confidenceIndex` | `number($double)` | The predicted fraud likelihood score in the range from 1 to 100. |
| `isPremium` | `boolean` | The definition of whether the contributor is a premium user. |
| `peerId` | `string` | The unique key of the peer that contributed the data. |

:::

When [assembling a contribution](../api-specification/contribution-controller/assembling-a-contribution.md) to then [submit it](../api-specification/contribution-controller/submitting-a-contribution.md), the following data must be specified in the body of the request:

::: details Request body

| Field | Value Type | Description |
| --- | --- | --- |
| `id` | `string` | Fraud event identifier. |
| `fraudType` | `enum string` | The type of the fraud event. <br> Could be one of the following: <ol><li>`Wangiri`</li><li>`IRSF`</li><li>`StolenDevice`</li><li>`IPFraud`</li><li>`SMSA2P`</li></ol> |
| `origination` | `string` | The two-digit code of the country the fraud event originated from (Alpha-2, ISO 3166). |
| `destination` | `string` | The two-digit code of the country the fraud event was identified as such (Alpha-2, ISO 3166). |
| `expiryDate` | `integer($int32)` | The exact time and date until which the event is considered relevant (represented as https://www.epochconverter.com/clock in seconds). |

:::
