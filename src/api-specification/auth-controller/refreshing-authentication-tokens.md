# Refreshing authentication tokens

> Refreshes the authentication tokens of the [authorized FIB user](../auth-controller/authorizing-a-user-in-the-system.md).

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/auth/api/v1/authentication-management/session`

**Method**: `PATCH`

**Header**: `Authorization` — represented by a `string` that is the `refreshToken` value that was returned either at the authorization, or the previous time the token has been refreshed.

#### Input/request structure

A `PATCH` request to the endpoint with the `Authorization` header specified.

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
  "data": {
    "accessToken": "string",
    "refreshToken": "string",
    "expirationTime": integer($int64)
  }
}
```

```json5 [Example]
{
  status: {
    code: 200,
    name: 'OK',
    message: 'Authentication tokens have been refreshed successfully.'
  },
  data: {
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJhY2MiOiJib2JAYWRtaW4iLCJzdWIiOiJib2JAbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImV4cCI6MTcwMzI2MTU3NCwianRpIjoiOGUxNzgzZDgtNGE1Yi00ZGQ0LWI3OGQtYjUwNTY1NDAwNTAzIn0.BUqeWAnkqtE6oKc-ztDwaQ36om9trZTNKR8vwelMqr4m67y3td-cVu9lOY7WTY09tTMoVQQ-rbuEFcmxCY17BA',
    refreshToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJzdWIiOiJib2JAbWFpbC5jb20iLCJhY2p0aSI6IjhlMTc4M2Q4LTRhNWItNGRkNC1iNzhkLWI1MDU2NTQwMDUwMyIsImV4cCI6MTcwMzM0NzY3NCwianRpIjoiYTZmYmQ5ZjktZThkZC00YzBmLWJhNDYtNDlkMDE5MDg2MjZhIn0.LUBHyyqMMRpQ81jsd08Ip5Yft7IeWtwYWO-PSffhhVHEsWDgtZykbsE-RLRh8Xi9KUljkqibdCc7qJlMZLeHBg',
    expirationTime: 300
  }
}
```

:::

### Responses

| Response Code | Description |
| :-: | --- |
| `200` | Authentication tokens have been refreshed successfully. |
| `400` | Bad request. |
| `401` | Either the signature or refresh token are not valid, or the Bearer token could not be parsed from the `Authorization` header. |
| `404` | User not found. |
| `422` | Unprocessable content. |
| `500` | Internal server error. |
