# Assembling a contribution

> Assembles a contribution that must be later [submitted](submitting-a-contribution.md) in order to store the fraud event records on the network.\
> For details, see [Contributions: Submitting contributions](../../overview/contributions.md#submitting-contributions).

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/contribution/assemble`

**Method**: `POST`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](../auth-controller/refreshing-authentication-tokens.md).

#### Input/request structure

::: details Show

::: code-group Data structure

```json5 [Structure]
[
  {
    id: 'idRange',
    fraudType: 'string',
    origination: 'string',
    destination: 'string'
  }
]
```

```json5 [Example]
[
  {
    id: '129.0.0.1',
    fraudType: 'IPFraud',
    origination: 'SE',
    destination: 'GB'
  }
]
```

:::

::: info

For a detailed breakdown of every field and value in the body of a request, see [Contributions: Assembling contributions](../../overview/contributions.md#assembling-contributions).

:::

::: tip Note

This endpoint accepts requests with up to `500` entries.

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
  data: 'transactionHex'
}
```

```json5 [Example]
{
  status: {
    code: 200,
    name: 'OK'
  },
  data: '31fd14aecf7aa369a77035658556b2ff25c2b148d9516afbfa9b0edc709b1e1ae326b377b223e8e8486fee4d997ef03c29bcc6ead443daa68f0d397ceea2f78f7ede2df67d1f2f04bcbc51c40effce9f4f8d3b66394b0b2b0c094f8347117d08539a4a19f3bc8b75bc4dab24385fe3c5ef8faafc61d38095c594b30b33275613'
}
```

:::

### Responses

| Response Code | Description |
| :-: | --- |
| `200` | Contribution has been assembled and its `transactionHex` string has been retrieved successfully. |
| `400` | Contribution type is invalid. |
| `401` | `accessToken` is either expired or invalid. |
| `500` | Internal server error. |
