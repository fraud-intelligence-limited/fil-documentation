# Requesting a contribution by ID

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/contribution/{contributionID}`

**Method**: `GET`

**Parameters**:

| Field | Value Type | Description |
| --- | --- | --- |
| `contributionID` | `string(path)` | Range of _[`id` values](../../Overview/Fraud_events.md)_ (Fraud Identifiers), or a single one. |

**Input/request structure**:

A `GET` request to the endpoint, where `{contributionID}` is a required parameter.

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
      assetIds: [
        {
          definitionId: 'Id_range#domain', //IP/telephone number/IMEI
          accountId: 'user@peerId',
        },
      ],
    },
  ],
}
```

:::
