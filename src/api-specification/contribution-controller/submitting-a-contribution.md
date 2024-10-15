# Submitting a contribution

> Submits [an assembled contribution](assembling-a-contribution.md).\
> For details, see [Contributions: Submitting contributions](../../overview/contributions.md#submitting-contributions).

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/contribution`

**Method**: `POST`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](../auth-controller/refreshing-authentication-tokens.md).

#### Input/request structure

::: details Show

::: code-group Data structure

```json5 [Structure]
'transactionHex(signed)'
```

```json5 [Example]
'99581b01a18a5170de27760a48305cee353ce283edd747c346bc98553907ed7dd929441bdefa28a58dd34102471806ac7812e950b27ad27dc074cc1e93bc6b80e10fd6fbb63eee0784e728e2023342dbbb42bbae9fafbe68072e6bc44acf6e9b558285667ca3aec300251cbc2096fec857c493ef8c634a64319af88202bc3f12'
```

:::

::: tip NOTE

The `transactionHex` string retrieved when [assembling a contribution](assembling-a-contribution.md) must first be [signed](../../tutorials-api/signing-transactions.md) before submitting this request.

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
    tokenIds: [
      {
        definitionId: 'idRange#assetDomain',
        accountId: 'accountName@accountDomain'
      }
    ],
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
    tokenIds: [
      {
        definitionId: '+79991234567_12345#contribution',
        accountId: 'cat_thecat@xome'
      }
    ],
    rewarded: 100
  }
}
```

:::

### Responses

| Response Code | Description |
| :-: | --- |
| `200` | Contribution has been submitted and tokens have been rewarded successfully. |
| `400` | Invalid transaction. |
| `401` | `accessToken` is either expired or invalid. |
| `500` | Internal server error. |
