# Submitting a contribution flag

> Submits [an assembled contribution flag](assembling-a-contribution-flag.md).\
> For details, see [Contributions: Flagging contributions](../../overview/contributions.md#flagging-contributions).

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/contribution/flag`

**Method**: `PATCH`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](../auth-controller/refreshing-authentication-tokens.md).

#### Input/request structure

::: details Show

::: code-group Data structure

```json5 [Structure]
'transactionHex(signed)'
```

```json5 [Example]
'2c658c96e40b2c919f779b3dac2bbb9a6e1e4419d653026038b315b42ef7bb77bd88328a49306f61bdc9db9bda871a166d4c0c9b36a4818116b916f426b2bd38129e31f377a68e0d9079d870ac455637e0fbbc679374629d2ab3e04130d93c6539f18c984dc484643eb73ffe101c9c7ffc3b2ccdb4b3dba1e35ec6f08d82aa5b'
```

:::

::: tip Note

The `transactionHex` string retrieved when [assembling a contribution flag](assembling-a-contribution-flag.md) must first be [signed](../../tutorials-api/signing-transactions.md) before submitting this request.

:::

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
    rewarded: integer($int32)
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
    rewarded: 50
  }
}
```

:::

### Responses

| Response Code | Description |
| :-: | --- |
| `200` | Contribution has been flagged and its `transactionHex` string has been retrieved successfully. |
| `400` | Invalid transaction. |
| `401` | `accessToken` is either expired or invalid. |
| `404` | Asset not found. |
| `500` | Internal server error. |
