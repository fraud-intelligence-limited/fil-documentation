# Contributions

> **Contribution** — a piece of data that describes a fraud event on the blockchain.

Contributions can be submitted by authorized peers, and are stored on the blockchain.

A peer or its user that has contributed at least a single fraud event is considered a **_contributor_**.

## Operations

### Submitting contributions

Once a contribution has been submitted, the peer’s list of contributions is updated, and their [token balance](tokenomics.md#token-balance) is increased by an amount equal to the number of contributions submitted based on the current reward rate active in the network.

For complete instructions on how to submit a contribution, see [Submitting a contribution](../tutorials-api/submitting-a-contribution.md).

For information on the token balance and rewards, see [Tokenomics](./tokenomics.md).

### Retrieving contributions

In order for peers to keep their own records updated with the latest fraud event data, they can [retrieve contributions in a number of ways](../tutorials-api/retrieving-contributions.md).

### Flagging contributions

If a peer deems a certain contribution to no longer be relevant (e.g., it is a "false positive"), they can [flag that contribution](../tutorials-api/flagging-a-contribution.md). Once a contribution is flagged, the ID of the peer that flagged it is saved with the contribution as `flagger` value.

## API data structures

### Retrieving contributions

When [retrieving contributions](../api-specification/contribution-controller/retrieving-contributions.md), the following data is returned in the body of the response:

::: details Response body

| Field | Value Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier of a fraud event. |
| `fraudType` | `string(enum)` | The [type of the fraud event](fraud-events.md#types-of-fraud-events). <br> Can be one of the following: <ol><li>`Wangiri`</li><li>`IRSF`</li><li>`StolenDevice`</li><li>`IPFraud`</li><li>`SMSA2P`</li></ol> |
| `origination` | `string` | The two-letter code of the country the fraud event originated from (Alpha-2, [ISO 3166](https://www.iso.org/iso-3166-country-codes.html)). |
| `destination` | `string` | The two-letter code of the country the fraud event was identified as such (Alpha-2, [ISO 3166](https://www.iso.org/iso-3166-country-codes.html)). |
| `expiryDate` | `integer($int64)` | The exact time and date until which the event is considered relevant (represented as [Unix Epoch time](https://www.epochconverter.com/clock) in seconds). |
| `fraudStatus` | `string(enum)` | The status of the fraud event in relation to its `expiryDate`. <br> Can be one of the following: <ol><li>`ACTIVE`</li><li>`EXPIRED`</li><li>`FLAGGED`</li></ol> |
| `confidenceIndex` | `number($double)` | The predicted fraud likelihood score in the range from 1 to 100. |
| `isPrivileged` | `boolean` | The definition of whether a contribution is privileged. |
| `peerId` | `string` | The unique Domain ID of the peer that contributed the data. |
| `flagger` | `string` | The unique ID of the peer that flagged the data. If a contribution hasn't been flagged at the time of observing, the field returns `null`. |
| `timestamp` | `integer($int32)` | The exact time and date of when a contribution has been submitted (represented as [Unix Epoch time](https://www.epochconverter.com/clock) in seconds). |
| `flagTimestamp` | `integer($int32)` | The exact time and date of when a contribution has been flagged. If a contribution hasn't been flagged at the time of observing, the field returns `null`. |
| `self` | `integer($int32)` | Out of all the retrieved contributions, the number of contributions that have been submitted by the requesting user. |
| `old` | `integer($int32)` | Out of all the retrieved contributions, the number of contributions that have already been seen by the requesting user. |
| `new` | `integer($int32)` | Out of all the retrieved contributions, the number of contributions that have _not_ yet been seen by the requesting user. |
| `newWithConfidenceIndex` | `integer($int32)` | Out of all the retrieved `new` contributions, the number of contributions that had their price potentially affected by the [confidence index](tokenomics.md#confidence-index). |
| `creditsSpent` | `integer($int32)` | The total amount of tokens spent on the retrieved contributions. |
| `balanceLeft` | `integer($int32)` | The remaining token balance after retrieving contributions. |
| `contributionsNotReturned` | `integer($int32)` | The number of contributions that have not been returned. |
| `contributionsNotReturnedCost` | `integer($int64)` | The total cost of all the contributions that have not been returned but met the filter requirements, i.e., the amount of tokens that were not available on the user's balance at the time of the retrieval. |

:::

### Assembling contributions

When [assembling a contribution](../api-specification/contribution-controller/assembling-a-contribution.md) to then [submit it](../api-specification/contribution-controller/submitting-a-contribution.md), the following data must be specified in the body of the request:

::: details Request body

| Field | Value Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier of a fraud event. Or a range of fraud identifiers. <br> Example: `127.0.0.1` OR `127.0.0.1-127.0.0.2` OR `+14155552671` OR `+14155552671-+14155552672` OR `107615702016566` |
| `fraudType` | `string(enum)` | The [type of the fraud event](fraud-events.md#types-of-fraud-events). <br> Can be one of the following: <ol><li>`Wangiri`</li><li>`IRSF`</li><li>`StolenDevice`</li><li>`IPFraud`</li><li>`SMSA2P`</li></ol> |
| `origination` | `string` | The two-letter code of the country the fraud event originated from (Alpha-2, [ISO 3166](https://www.iso.org/iso-3166-country-codes.html)). |
| `destination` | `string` | The two-letter code of the country the fraud event was identified as such (Alpha-2, [ISO 3166](https://www.iso.org/iso-3166-country-codes.html)). |

:::
