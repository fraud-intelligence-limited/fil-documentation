# Authorizing a user in the system

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/auth/api/v1/authentication-management/session`

**Method**: `POST`

**Parameters**: —

**Input/request structure**:

::: details Show

```json5
{
  email: 'string',
  signature: 'string',
  publicKey: 'string'
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
  data: {
    accessToken: 'string',
    refreshToken: 'string',
    expirationTime: 0 //integer($int64)
  }
}
```

:::

### Responses

| Response Code | Description |
| --- | --- |
| `200` | User authorization has been successful. |
| `401` | User signature is incorrect or failed to be decoded. |
| `404` | User not found. |
| `422` | User signature either could not be decoded or verified, or the `publicKey` string is not valid. |
| `500` | Internal server error. |
