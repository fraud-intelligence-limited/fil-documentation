# Contributions

> **Contribution** — a piece of data that describes a fraud event on the blockchain.

Contributions can be submitted by authorized peers, and are stored on the blockchain.

A peer or its user that has contributed at least a single fraud event is considered a **_contributor_**.

## Operations

### Submitting contributions

Once a contribution has been submitted, the peer’s list of contributions is updated, and their [token balance](tokenomics.md#token-balance) is increased by an amount equal to the number of contributions submitted based on the current reward rate active in the network.

When preparing a contribution for upload, the contributor must specify, whether they are the original source of the fraud event data. To do so, they must leave the `sourcePeerId` value empty. However, if the original source differs from the uploader, the `sourcePeerId` value must be the `peerId` of that specific user on the network. In such cases, the reward is split between the contributor and the original source according the [reward split](./tokenomics.md#reward-split) rules.

For complete instructions on how to submit a contribution, see [Submitting a contribution](../tutorials-api/submitting-a-contribution.md).

For information on the token balance and rewards, see [Tokenomics](./tokenomics.md).

### Retrieving contributions {#rc1}

In order for peers to keep their own records updated with the latest fraud event data, they can [retrieve contributions in a number of ways](../tutorials-api/retrieving-contributions.md).

### Flagging contributions

If a peer deems a certain contribution to no longer be relevant (e.g., it is a "false positive"), they can [flag that contribution](../tutorials-api/flagging-a-contribution.md). Once a contribution is flagged, the ID of the peer that flagged it is saved with the contribution as `flagger` value.

## API data structures

### Retrieving contributions {#rc2}

When [retrieving contributions](../api-specification/contribution-controller/retrieving-contributions.md), the following data is returned in the body of the response:

::: details Response body

| Field | Value Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier of a fraud event. |
| `fraudType` | `string(enum)` | The [type of the fraud event](fraud-events.md#types-of-fraud-events). <br> Can be one of the following: <ol><li>`Wangiri`</li><li>`IRSF`</li><li>`StolenDevice`</li><li>`IPFraud`</li><li>`SMSA2P`</li><li>`FlashCall`</li><li>`Scam`</li></ol> |
| `origination` | `string` | The two-letter code of the country the fraud event originated from (Alpha-2, [ISO 3166](https://www.iso.org/iso-3166-country-codes.html)). |
| `destination` | `string` | The two-letter code of the country the fraud event was identified as such (Alpha-2, [ISO 3166](https://www.iso.org/iso-3166-country-codes.html)). |
| `expiryDate` | `integer($int64)` | The exact time and date until which the event is considered relevant (ISO 8601: `YYYY-MM-DDTHH:MM:SSZ`). <br> By default, the `expiryDate` is set 30 days away from the `timestamp` value for all fraud types, except for `IRSF`, which has it set 90 days away. |
| `fraudStatus` | `string(enum)` | The status of the fraud event in relation to its `expiryDate`. <br> Can be one of the following: <ol><li>`ACTIVE`</li><li>`EXPIRED`</li><li>`FLAGGED`</li></ol> |
| `confidenceIndex` | `number($double)` | The predicted fraud likelihood score in the range from 1 to 100. |
| `isPrivileged` | `boolean` | The definition of whether a contribution is privileged. |
| `peerId` | `string` | The unique identifier of the peer that contributed the data. |
| `flagger` | `string` | The unique identifier of the peer that flagged the data. If a contribution hasn't been flagged at the time of observing, the field returns `null`. |
| `timestamp` | `integer($int32)` | The exact time and date of when a contribution has been submitted (ISO 8601: `YYYY-MM-DDTHH:MM:SSZ`). |
| `flagTimestamp` | `integer($int32)` | The exact time and date of when a contribution has been flagged. If a contribution hasn't been flagged at the time of observing, the field returns `null`. |
| `self` | `integer($int32)` | Out of all the retrieved contributions, the number of contributions that have been submitted by the requesting user. |
| `old` | `integer($int32)` | Out of all the retrieved contributions, the number of contributions that have already been seen by the requesting user. |
| `new` | `integer($int32)` | Out of all the retrieved contributions, the number of contributions that have _not_ yet been seen by the requesting user. |
| `newWithConfidenceIndex` | `integer($int32)` | Out of all the retrieved `new` contributions, the number of contributions that had their price potentially affected by the [confidence index](tokenomics.md#confidence-index). |
| `creditsSpent` | `integer($int32)` | The total amount of tokens spent on the retrieved contributions. |
| `balanceLeft` | `integer($int32)` | The remaining token balance after retrieving contributions. |
| `contributionsNotReturned` | `integer($int32)` | The number of contributions that have not been returned. |
| `contributionsNotReturnedCost` | `integer($int64)` | The total cost of all the contributions that have not been returned but met the filter requirements, i.e., the amount of tokens that were not available on the user's balance at the time of the retrieval. |
| `assetDefinitionId` | `string` | The unique identifier of a contribution record on the blockchain network. |
| `sourcePeerId` | `string` | The unique identifier of the original source that contributed the data. May be different from the `peerID`. <br> For details, see [Tokenomics: Reward split](./tokenomics.md#reward-split). |

:::

### Assembling contributions

When [assembling a contribution](../api-specification/contribution-controller/assembling-a-contribution.md) to then [submit it](../api-specification/contribution-controller/submitting-a-contribution.md), the following data must be specified in the body of the request:

::: details Request body

| Field | Value Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier of a fraud event. Or a range of fraud identifiers. <br> Example: `127.0.0.1` OR `127.0.0.1-127.0.0.2` OR `+14155552671` OR `+14155552671-+14155552672` OR `107615702016566` |
| `fraudType` | `string(enum)` | The [type of the fraud event](fraud-events.md#types-of-fraud-events). <br> Can be one of the following: <ol><li>`Wangiri`</li><li>`IRSF`</li><li>`StolenDevice`</li><li>`IPFraud`</li><li>`SMSA2P`</li><li>`FlashCall`</li><li>`Scam`</li></ol> |
| `origination` | `string` | The two-letter code of the country the fraud event originated from (Alpha-2, [ISO 3166](https://www.iso.org/iso-3166-country-codes.html)). |
| `destination` | `string` | The two-letter code of the country the fraud event was identified as such (Alpha-2, [ISO 3166](https://www.iso.org/iso-3166-country-codes.html)). |
| `sourcePeerId` | `string` | The unique identifier of the original source that contributed the data. May be different from the `peerID` and is an optional field. <br> For details, see [Tokenomics: Reward split](./tokenomics.md#reward-split). |

:::
