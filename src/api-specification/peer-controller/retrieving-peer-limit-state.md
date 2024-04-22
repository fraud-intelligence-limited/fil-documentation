# Retrieving peer limit state

> Retrieves the limit state of the [authorized FIB user](../auth-controller/authorizing-a-user-in-the-system.md) at the time of the request.

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/peer-management/limit`

**Method**: `GET`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](../auth-controller/refreshing-authentication-tokens.md).

#### Input/request structure

A `GET` request to the endpoint with the `Authorization` header specified.

#### Output/response structure

::: details Show

::: code-group Data structure

```json5 [Structure]
{
  "status": {
    "code": integer($int32),
    "name": "string"
  },
  "data": {
    "used": integer($int32),
    "total": integer($int32),
    "updatePeriod": integer($int64),
    "nextUpdate": integer($int64)
  }
}
```

```json5 [Example]
{
  status: {
    code: 200,
    name: 'Ok'
  },
  data: {
    used: 0, //The number of tokens spent by the requesting peer during their existence
    total: 100, //The total token limit allocated to the requesting peer
    updatePeriod: 10, //The time period of how often the requesting peer's token balance is updated
    nextUpdate: 1704442062 //The exact time (set as [Unix Epoch time](https://www.epochconverter.com/clock) in seconds) of when the next token balance update is scheduled for
  }
}
```

:::

:::

### Responses

| Response Code | Description |
| :-: | --- |
| `200` | Peer's limit state has been retrieved successfully. |
| `404` | Metadata key not found or Trigger's period not specified. |
| `401` | `accessToken` is either expired or invalid. |
| `500` | Internal server error. |
