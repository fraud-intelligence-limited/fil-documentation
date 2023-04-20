# Authorizing an account

To authorize an account, perform the following:

Send a `POST` request to the `/auth/api/v1/authentication-management/session` endpoint with the following data specified:

| Field | Value Type | Description |
| --- | --- | --- |
| `email` | `string` | The user’s email address. |
| `signature` | `string` | The encoded signature of a user’s email address. |
| `publicKey` | `string` | The public key of the authentication key pair. |

::: details Input structure

```json5
{
  email: 'string',
  signature: 'string',
  publicKey: 'string'
}
```

:::

::: details Input example

```json5
{
  email: 'qa@email.com',
  signature: '2d439e8e7400c11e8c727516df43f45b76d5f18e9241ca9ea7b7c0847d521dcc7008b87f9ec399259d22993146cd0b604935f031020d5a493add9d3bddf4550e',
  publicKey: '2c92384e63afd4e806fa62bd8f293c266ee5a06af0a7355b48064d0734530fb4'
}
```

:::

### Expected result

If authorization is successful, a response with the following JSON web tokens is generated:

| Field | Value Type | Description |
| --- | --- | --- |
| `accessToken` | `string` | The access token, which is later used in headers of other requests as a bearer token. |
| `expirationTime` | `integer($int64)` | The exact time until which the event is considered relevant (represented as https://www.epochconverter.com/clock in seconds). |
| `refreshToken` | `string` | The refresh token. |

::: details Output structure

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

::: details Output example

```json5
// 200 "OK"

{
  status: {
    code: 0,
    name: 'Ok'
  },
  data: {
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJhY2MiOiJxYTBAcWEiLCJzdWIiOiJxYTBAbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9QRUVSIiwiZXhwIjoxNjYxMjQ0OTIwLCJqdGkiOiI2YzY4OGY2Ni1iNjYzLTRhMjYtODdlZC00N2YzOGU0MTExZWIifQ.wgAs5xQP5MKIBwd1fCxT8HyJ8zGEZzbO-NTpJ9assU9voZYWskSpJQcoT8pTA7D_WcgOopG7f9_I-2RN6Fi1Aw',
    refreshToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJhY2p0aSI6IjZjNjg4ZjY2LWI2NjMtNGEyNi04N2VkLTQ3ZjM4ZTQxMTFlYiIsInN1YiI6InFhMEBtYWlsLmNvbSIsImV4cCI6MTY2MTMzMTAyMCwianRpIjoiZWFhN2E3YjMtYWM3MS00Mjg2LThiOGMtMjE4ZDYwNDA1NDYwIn0.i9Xjyh1mpSb9QVPe1JdgsQoukH46vbYoUK-2cbHWEBDCHzuK7-0TcUg-mPgGodlSCwWnCfVet4IxG3wz0zfJAw',
    expirationTime: 300
  }
}
```

:::

If authorization is unsuccessful, refer to [Authorizing a user in the system > Responses](/api-specification/auth-controller/authorizing-a-user-in-the-system.md#responses) for a list of possible reasons.
