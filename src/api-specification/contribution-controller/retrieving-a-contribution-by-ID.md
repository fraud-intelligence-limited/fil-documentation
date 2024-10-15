# Retrieving a contribution by ID

> Retrieves a contribution that is stored on the network by its [`id`](../../overview/contributions.md#retrieving-contributions) (Fraud Identifier).\
> The `assetDefinitionId` value of any given retrieved contribution may be used to [assemble a contribution flag](assembling-a-contribution-flag.md) for it.

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/contribution/{id}`

**Method**: `GET`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](../auth-controller/refreshing-authentication-tokens.md).

**Parameters**:

| Field | Value Type | Description |
| :-: | --- | --- |
| `id` | `string(path)` | Range of [`id` values](../../overview/contributions.md#retrieving-contributions) (Fraud Identifiers), or a single one. |

#### Input/request structure

A `GET` request to the endpoint with the `{id}` parameter and `Authorization` header specified.

**Example**: `data/api/v1/subscription-management/subscription/192.168.1.1`

#### Output/response structure

::: details Show

::: code-group Data structure

```json5 [Structure]
{
  status: {
    code: integer($int32),
    name: 'string'
  },
  data: [
    {
        assetDefinitionIds: 'idRange#contribution',
        contribution: {
            id": 'idRange',
            fraudType: 'string',
            origination: 'string',
            destination: string,
            expiryDate: integer($int32),
            fraudStatus: 'string(enum)',
            confidenceIndex: number($double),
            isPrivileged: boolean,
            peerId: 'string',
            flagger: 'string',
            timestamp: integer($int32),
            flagTimestamp: integer($int32)
      }
    }
  ]
}
```

```json5 [Example]
{
  status: {
    code: 200,
    name: 'Ok'
  },
  data: [
    {
      assetDefinitionId: '130.130.130.1-130.130.130.1_1711570471#contribution',
      contribution: {
        id: '130.130.130.1-130.130.130.1',
        fraudType: 'IPFraud',
        origination: 'GB',
        destination: 'US',
        expiryDate: 1719346471,
        fraudStatus: 'Active',
        confidenceIndex: null,
        isPrivileged: false,
        peerId: 'soramitsu',
        flagger: null,
        timestamp: 2024-08-31T11:35:41Z,
        flagTimestamp: null
      }
    }
  ]
}
```

:::

::: info

For a detailed breakdown of every field and value in the body of a response, see [Contributions: Retrieving contributions](../../overview/contributions.md#retrieving-contributions).

:::

::: warning

Starting with version 1.3.1, expired contributions are no longer retrieved by ID.

:::

### Responses

| Response Code | Description |
| :-: | --- |
| `200` | Contribution has been successfully retrieved by its ID. |
| `400` | Contribution ID is incorrect or the fraud type could not be resolved by code. |
| `401` | `accessToken` is either expired or invalid. |
| `404` | Requested contribution cannot be found. |
| `500` | Internal server error. |
