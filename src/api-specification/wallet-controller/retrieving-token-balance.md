# Retrieving token balance

> Retrieves the token balance of the [authorized FIB user's](../auth-controller/authorizing-a-user-in-the-system.md) peer account at the time of the request.

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/wallet-management/balance`

**Method**: `GET`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](../auth-controller/refreshing-authentication-tokens.md).

#### Input/request structure

A `GET` request to the endpoint with the `Authorization` header specified.

#### Output/response structure

::: details Show

::: code-group Data structure

```json5 [Structure]
{
  "status": {
    "code": integer($int32),
    "name": "string"
  },
  "data": {
    "tokenId": {
      "definitionId": "assetName#assetDomain",
      "accountId": "accountName@accountDomain"
    },
    "balance": integer($int64)
  }
}
```

```json5 [Example]
{
  status: {
    code: 200,
    name: 'OK'
  },
  data: {
    tokenId: {
      definitionId: 'credit#admin',
      accountId: 'admin@admin'
    },
    balance: 500
  }
}
```

:::

:::

### Responses

| Response Code | Description |
| :-: | --- |
| `200` | Token balance has been retrieved successfully. |
| `401` | `accessToken` is either expired or invalid. |
| `403` | Forbidden (in case a non-admin peer attempts to request the credit balance of another peer). |
| `500` | Internal server error. |
