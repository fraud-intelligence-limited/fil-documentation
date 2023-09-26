# Flagging a contribution

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/contribution/flag`

**Method**: `PATCH`

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
    message: 'string'
  },
  data: {
    rewarded: 0 //integer($int32)
  }
}
```

:::

### Responses

| Response Code | Description |
| --- | --- |
| `200` | Contribution has been flagged and its transaction `data` has been retrieved successfully. |
| `400` | Invalid transaction. |
| `500` | Internal server error. |
