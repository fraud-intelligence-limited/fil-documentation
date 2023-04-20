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

| Code | Name | Status Code | Description |
| --- | --- | --- | --- |
| `200 OK` | `Ok` | `0` | Authorization has been successful. |
| `400 Bad Request` | `ArgumentNotValid` | `11` | Argument is not valid. |
| `401 Invalid Signature` | `InvalidSignature` | `2` | User’s signature is incorrect. |
| `401 Invalid Signature` | `SignatureDecodeError` | `19` | User’s signature failed to be decoded. |
| `422 Unprocessable Entity` | `InvalidPublicKey` | `18` | User’s public key is incorrect. |
| `422 Unprocessable Entity` | `SignatureDecodeError` | `19` | Failed to decode the user's email signature. |
