# Authorizing an account

To authorize an account, send the following request:

::: code-group Data structure

```http [Request]
POST /auth/api/v1/authentication-management/session
```

```json5 [Input structure]
{
  email: 'string', //The user’s email address
  signature: 'string', //The signature of the user’s email address encoded as Hex
  authPublicKeyHex: 'string' //The public key of the 'Authorization' key pair encoded as Hex
}
```

```json5 [Input example]
{
  email: 'alice@mail.com',
  signature: '0b458f758eeca3d7a2a64de0648c9b7dccaee146202257cd8ebaeb4690aa48b464108111d8cf0e7f3b0ace1b51dcda89e76d372233514f324e00d64c6b899c0e',
  authPublicKeyHex: '8a53d297bc406c63396967388ecc2ebc8abd701d195a43bbb4751ac5a86eac1b'
}
```

:::

::: tip Note

For instructions on how to generate the `signature` string, see [Signing user email addresses](/tutorials-api/signing-user-email-addresses.md).

The `authPublicKeyHex` string is taken from the user's **Authorization** key pair on the FIB Web App **Profile** screen. For details, see [Web App UI: 'Authorization' key pair](../../overview/web-interface.md#akp).

:::

### Expected result

If authorization is successful, a response with the following JSON web tokens is generated:

| Field | Value Type | Description |
| --- | --- | --- |
| `accessToken` | `string` | The access token, which is later used in headers of other requests as a bearer token. |
| `refreshToken` | `string` | The refresh token. |
| `expirationTime` | `integer($int64)` | The exact time until which the event is considered relevant (represented as [Unix Epoch time](https://www.epochconverter.com/clock) in seconds). |

::: code-group Data structure

```json5 [Output structure]
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

```json5 [Output example]
{
  status: {
    code: 200,
    name: 'OK',
    message: 'User authorization has been successful.'
  },
  data: {
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJhY2MiOiJhbGljZUB3b25kZXJsYW5kIiwic3ViIjoiYWxpY2VAbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9QRUVSIiwiZXhwIjoxNzAzMTg3NDEyLCJqdGkiOiIwNjgzM2FlZi03ZDljLTQ2MTUtYTU4YS02YjYxZWZkM2FhNjEifQ.HvrukWtcA7nz5rbxWiklJOjnv4X7jaAQ7piJaxqlW5rvUv52rClqYYHSn9F-P4u6pKNlJSpiiiH0GnynXsL7CQ',
    refreshToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJzdWIiOiJhbGljZUBtYWlsLmNvbSIsImFjanRpIjoiMDY4MzNhZWYtN2Q5Yy00NjE1LWE1OGEtNmI2MWVmZDNhYTYxIiwiZXhwIjoxNzAzMjczNTEyLCJqdGkiOiJhY2NkYWUzNS00ODA1LTQ5NmQtYTBiZC02Y2Y4OGI3OTBkYjkifQ.rCrbFnF5axwixq4wwURZdu_DFwFlOil9RFYkmqlLYVPoU1UpN8PlWC8Kg7QBvA-eJYVzb8yKgQ0GiIAITe3ADA',
    expirationTime: 300
  }
}
```

:::

If authorization is unsuccessful, refer to [API Specification > Authorizing a user in the system: Responses](../api-specification/auth-controller/authorizing-a-user-in-the-system.md#responses) for a list of possible reasons.
