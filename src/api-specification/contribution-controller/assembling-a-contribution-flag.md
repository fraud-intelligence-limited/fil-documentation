# Assembling a contribution flag

> Assembles a contribution flag that must be later [submitted](submitting-a-contribution-flag.md) in order to flag a contribution as a False Positive. For details, see [Contributions: Flagging contributions](../../overview/contributions.md#flagging-contributions).

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-manager/contribution/flag/assemble`

**Method**: `PATCH`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](refreshing-authentication-tokens.md).

#### Input/request structure

::: details Show

::: code-group Data structure

```json5 [Structure]
{
  assetDefinitionIds: ['string']
}
```

```json5 [Example]
{
  assetDefinitionIds: ['+79991234567_12345#contribution']
}
```

:::

:::

#### Output/response structure

::: details Show

::: code-group Data structure

```json5 [Structure]
{
  "status": {
    "code": integer($int32),
    "name": "string",
    "message": "string"
  },
  "data": "transactionHex"
}
```

```json5 [Example]
{
  status: {
    code: 200,
    name: 'OK',
    message: 'Contribution flag has been assembled and its `transactionHex` string has been retrieved successfully'
  },
  data: 'ecd5253b23902f3f1a9e6a62d092d9911ef8f663737f215188062679fd895bd0e07d2858a80ccf30e341c68c651dc50f87d4782f5e5f35a31649f0979eaf4c46141133e4ae298da96295da8299edc3467a2929603caf77abeb9e81175516c997fff943a63fece49f8613a983b7481faaeedf885babd5d0dc47cf1cd990c104fe'
}
```

:::

:::

### Responses

| Response Code | Description |
| :-: | --- |
| `200` | Contribution flag has been assembled and its `transactionHex` string has been retrieved successfully. |
| `400` | The request body of the contribution flag is incorrect or premium contribution can't be changed. |
| `401` | `accessToken` is either expired or invalid. |
| `404` | Asset not found. |
| `500` | Internal server error. |
