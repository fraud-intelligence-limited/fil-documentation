# Retrieving top contributions

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/contribution`

**Method**: `GET`

**Parameters**:

| Field | Value Type | Description |
| --- | --- | --- |
| `size` | `integer($int32)` | The number of entries, starting with the latest, shown in the response. <br> Set to `50` by default. |
| `from` and `to` | `string` | The timeframe that the response entries are filtered by (set as https://www.epochconverter.com/clock in seconds). <br> `from` is set to 0 by default. |
| `ft` | `array[string]` | The type of the fraud event. <br> Could be one of the following: <br> 1. `Wangiri` <br> 2. `IRSF` <br> 3. `StolenDevice` <br> 4. `IPFraud` <br> 5. `SMSA2P` |
| `org` | `array[string]` | The country of origination of the fraud event. Set as a two-digit country code (Alpha-2, ISO 3166; e.g., US, GA) |
| `self-only` | `boolean` | A boolean that defines whether the response should only contain contributions submitted by the requesting peer. <br> Set to `false` by default. |

**Input/request structure**:

A `GET` request to the endpoint.

**Output/response structure**:

::: details Show

```json5
{
  status: {
    code: 0, //integer($int32)
    name: 'string',
    message: 'string',
  },
  data: [
    {
      id: 'string',
      fraudType: 'Wangiri', //Could be one of the following: Wangiri, IRSF, StolenDevice, IPFraud, SMSA2P
      origination: 'string',
      destination: 'string',
      expiryDate: 0, //integer($int32)
      fraudStatus: 'string(enum)', //Could be one of the following: Active, Expired, Flagged
      confidenceIndex: 0, //number($double)
      isPremium: true, //boolean
      peerId: 'string',
      premium: true, //boolean
    },
  ],
}
```

:::
