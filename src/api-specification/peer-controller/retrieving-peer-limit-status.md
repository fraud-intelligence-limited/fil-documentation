# Retrieving peer limit status

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/peer-management/limit`

**Method**: `GET`

**Parameters**: —

**Input/request structure**:

A `GET` request to the endpoint.

**Output/response structure**:

::: details Show

```json5
{
  status: {
    code: 0,
    name: 'string',
    message: 'string'
  },
  data: {
    used: 0,
    total: 0,
    updatePeriod: 0,
    nextUpdate: 0
  }
}
```

:::

### Responses

| Response Code | Description |
| --- | --- |
| `200` | Peer limit status has been retrieved successfully |
| `404` | Metadata key not found or Trigger's period not specified |
| `500` | Internal server error. |
