# Submitting a contribution

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/contribution`

**Method**: `POST`

**Parameters**: —

**Input/request structure**:

::: details Show

```json5
'string'
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
  data: {
    definitionId: 'Id_range#domain', //IP/telephone number/IMEI
    accountId: 'user@peerId',
  },
}
```

:::
