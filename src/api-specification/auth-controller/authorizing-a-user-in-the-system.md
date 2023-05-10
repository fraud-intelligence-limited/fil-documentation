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
  email: 'string', //The user’s email address
  signature: 'string', //The encoded signature of a user’s email address
  publicKey: 'string' //The public key of the authentication key pair
}
```

::: tip Note

For instructions on how to generate `signature` and `publicKey` strings, see [Generating key pairs](../../tutorials-api/generating-key-pairs.md) and [Signing user email addresses](../../tutorials-api/signing-user-email-addresses.md).

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
