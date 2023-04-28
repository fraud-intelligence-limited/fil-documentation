# Assembling a contribution flag

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-manager/contribution/flag/assemble`

**Method**: `PATCH`

**Parameters**: —

**Input/request structure**:

::: details Show

```json5
{
  assetIds: [
    {
      definitionId: 'Id_range#domain', //IP/telephone number/IMEI
      accountId: 'user@peerId'
    }
  ]
}
```

:::

**Output/response structure**:

::: details Show

```json5
{
  status: {
    code: 0, //integer($int32)
    name: 'string',
    message: 'string'
  },
  data: 'string'
}
```

:::

### Responses

| Response Code | Description |
| --- | --- |
| `200` | Contribution flag has been assembled and its transaction `data` has been retrieved successfully. |
| `400` | The request body of the contribution flag is incorrect or premium contribution can't be changed. |
| `404` | Asset not found. |
| `500` | Internal server error. |
