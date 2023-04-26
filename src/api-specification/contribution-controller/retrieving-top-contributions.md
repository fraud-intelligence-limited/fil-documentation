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
| `ft` | `array[string]` | The type of the fraud event. <br> Could be one of the following: <ol><li>`Wangiri`</li><li>`IRSF`</li><li>`StolenDevice`</li><li>`IPFraud`</li><li>`SMSA2P`</li></ol> |
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
    message: 'string'
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
      premium: true //boolean
    }
  ]
}
```

:::

### Responses

| Response Code | Description |
| --- | --- |
| `200` | Contributions have been successfully retrieved and filtered by the specified parameters. |
| `400` | Request parameters are invalid or the fraud type could not be resolved by code. |
| `404` | Contribution subscription has not been found. |
| `500` | Internal server error. |
