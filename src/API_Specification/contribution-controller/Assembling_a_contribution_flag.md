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
      accountId: 'user@peerId',
    },
  ],
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
    message: 'string',
  },
  data: 'string',
}
```

:::
