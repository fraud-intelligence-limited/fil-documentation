# Retrieving contributions

> Retrieves the contributions stored on the network as JSON strings in accordance with the parameters specified in the request.\
> This operation is treated as downloading contributions, i.e., the tokens balance of the user signed in via API is affected in accordance with the [current conversion rate](../../overview/tokenomics.md#current-conversion-rate).

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/contribution`

**Method**: `GET`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](../auth-controller/refreshing-authentication-tokens.md).

**Parameters**:

The following parameters can be specified with the request to filter the retrieved results.

| Field | Value Type | Description |
| :-: | --- | --- |
| `size` | `integer($int32)` | The number of entries, starting with the latest, shown in the response. <br> Set to `50` by default. |
| `from` and `to` | `string` | The timeframe that the response entries are filtered by. Both are set as an exact time and date (ISO 8601: `YYYY-MM-DDTHH:MM:SSZ`). <br> If the `from` parameter is left unspecified, the results will be fetched since the establishment of the FIB network. <br> If the `to` parameter is left unspecified, the results will be fetched until the latest uploaded contribution. |
| `ft` | `array[string]` | The [type of the fraud event](../../overview/fraud-events.md#types-of-fraud-events). <br> Can be one of the following: <ol><li>`Wangiri`</li><li>`IRSF`</li><li>`StolenDevice`</li><li>`IPFraud`</li><li>`SMSA2P`</li><li>`FlashCall`</li><li>`Scam`</li></ol> |
| `org` | `array[string]` | The country of origination of the fraud event. Set as a two-letter country code (Alpha-2, ISO 3166; e.g., US, GA). |
| `dst` | `array[string]` | The country of destination of the fraud event. Set as a two-letter country code (Alpha-2, ISO 3166; e.g., US, GA). |
| `fetch-mode` | `string` | The parameter that filters the response entries based on whether the requesting user has already seen them. <br> Can be one of the following: <ol><li>`NEW` — includes only the unseen by the requesting user entries.</li><li>`OLD` — includes only the already seen by the requesting user entries.</li><li>`SELF` — includes only the uploaded by the requesting user entries.</li><li>`DEFAULT` — includes all of the entries.</li></ol> <br> The `fetch-mode` parameter is set to `DEFAULT` by default. |
| `confidence-score` | `boolean` | A boolean that defines whether the price of the retrieved contributions is affected by the [confidence index](../../overview/tokenomics.md#confidence-index). If set to `true`, the price of any given contribution might rise above the [default conversion rate](../../overview/tokenomics.md#current-conversion-rate). To retrieve the currently established prices, try [retrieving download pricing rate](retrieving-pricing-rate.md). <br> The `confidence-score` parameter is set to `false` by default. |

#### Input/request structure

A `GET` request to the endpoint with the `Authorization` header specified.

#### Output/response structure

::: details Show

::: code-group Data structure

```json5 [Structure]
{
  status: {
    code: integer($int32),
    name: 'string'
  },
  data: {
    contributions: [
        {
          id": 'string',
          fraudType: 'string',
          origination: 'string',
          destination: 'string',
          expiryDate: integer($int32),
          fraudStatus: 'string(enum)',
          confidenceIndex: number($double),
          isPrivileged: boolean,
          peerId: 'string',
          flagger: 'string',
          timestamp: integer($int32),
          flagTimestamp: integer($int32),
          assetDefinitionId: 'string', // assetName#assetDomain
          sourcePeerId: 'string' // accountDomain
        }
    ],
    details: {
      self: integer($int32),
      old: integer($int32),
      new: integer($int32),
      newWithConfidenceIndex: integer($int32),
      creditsSpent: integer($int32),
      balanceLeft: integer($int32),
      contributionsNotReturned: integer($int32),
      contributionsNotReturnedCost: integer($int64)
    }
  }
}
```

```json5 [Example]
{
    status: {
        code: 200,
        name: 'Ok'
    },
    data: {
        contributions: [
            {
                id: '127.0.0.1-127.0.0.1',
                fraudType: 'IPFraud',
                origination: 'UA',
                destination: 'GB',
                expiryDate: 1711373543,
                fraudStatus: 'Active',
                confidenceIndex: null,
                isPrivileged: false,
                peerId: 'test',
                flagger: null,
                timestamp: 2024-08-31T11:35:41Z,
                flagTimestamp: 2024-09-15T10:05:24Z,
                assetDefinitionId: 'assetName#assetDomain',
                sourcePeerId: 'wonderland'
            },
            {
                id: '127.0.0.1-127.0.0.1',
                fraudType: 'IPFraud',
                origination: 'GA',
                destination: 'RU',
                expiryDate: 1711372367,
                fraudStatus: 'Flagged',
                confidenceIndex: null,
                isPrivileged: false,
                peerId: 'test',
                flagger: 'admin@test',
                timestamp: 2024-08-30T17:07:33Z,
                flagTimestamp: 2024-09-15T10:05:24Z,
                assetDefinitionId: 'assetName#assetDomain',
                sourcePeerId: 'wonderland'
            }
        ],
        details: {
            self: 6,
            old: 19,
            new: 123,
            creditsSpent: 190,
            balanceLeft: 50,
            contributionsNotReturned: 1
        }
    }
}
```

:::

::: info

For a detailed breakdown of every field and value in the body of a response, see [Contributions: Retrieving contributions](../../overview/contributions.md#retrieving-contributions).

:::

### Responses

| Response Code | Description |
| :-: | --- |
| `200` | Contributions have been successfully retrieved and filtered by the specified parameters. |
| `400` | Request parameters are invalid or the fraud type could not be resolved by code. |
| `401` | `accessToken` is either expired or invalid. |
| `404` | Contribution subscription has not been found. |
| `500` | Internal server error. |
