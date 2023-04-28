# Retrieving salt values

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/auth/api/v1/authentication-management/salt`

**Method**: `GET`

**Parameters**: —

**Input/request structure**:

A `GET` request to the endpoint.

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
| `200` | Deterministic salt persisted on the blockchain has been retrieved successfully. |
| `404` | User not found. |
| `500` | Internal server error. |
