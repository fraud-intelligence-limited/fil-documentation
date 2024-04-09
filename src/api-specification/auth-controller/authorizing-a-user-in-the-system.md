# Authorizing a user in the system

> Signs in a registered FIB user on the FIB API server.

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/auth/api/v1/authentication-management/session`

**Method**: `POST`

#### Input/request structure

::: details Show

::: code-group Data structure

```json5 [Structure]
{
  "email": "string", //The user’s email address
  "signature": "string", //The signature of the user’s email address encoded as Hex
  "authPublicKeyHex": "string" //The public key of the 'Authorization' key pair encoded as Hex
}
```

```json5 [Example]
{
  "email": "alice@mail.com",
  "signature": "0b458f758eeca3d7a2a64de0648c9b7dccaee146202257cd8ebaeb4690aa48b464108111d8cf0e7f3b0ace1b51dcda89e76d372233514f324e00d64c6b899c0e",
  "authPublicKeyHex": "8a53d297bc406c63396967388ecc2ebc8abd701d195a43bbb4751ac5a86eac1b"
}
```

:::

::: tip Info

For instructions on how to generate the `signature` string, see [Signing user email addresses](../../tutorials-api/signing-user-email-addresses.md).

The `authPublicKeyHex` string is taken from the user's **Authorization** key pair on the FIB Web App **Profile** screen. For details, see [Web App UI: 'Authorization' key pair](../../overview/web-interface.md#akp).

:::

:::

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
  "status": {
      "code": 200,
      "name": "OK",
      "message": "User authorization has been successful."
  },
  "data": {
      "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJhY2MiOiJhbGljZUB3b25kZXJsYW5kIiwic3ViIjoiYWxpY2VAbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9QRUVSIiwiZXhwIjoxNzAzMTg3NDEyLCJqdGkiOiIwNjgzM2FlZi03ZDljLTQ2MTUtYTU4YS02YjYxZWZkM2FhNjEifQ.HvrukWtcA7nz5rbxWiklJOjnv4X7jaAQ7piJaxqlW5rvUv52rClqYYHSn9F-P4u6pKNlJSpiiiH0GnynXsL7CQ",
      "refreshToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFZERTQSJ9.eyJzdWIiOiJhbGljZUBtYWlsLmNvbSIsImFjanRpIjoiMDY4MzNhZWYtN2Q5Yy00NjE1LWE1OGEtNmI2MWVmZDNhYTYxIiwiZXhwIjoxNzAzMjczNTEyLCJqdGkiOiJhY2NkYWUzNS00ODA1LTQ5NmQtYTBiZC02Y2Y4OGI3OTBkYjkifQ.rCrbFnF5axwixq4wwURZdu_DFwFlOil9RFYkmqlLYVPoU1UpN8PlWC8Kg7QBvA-eJYVzb8yKgQ0GiIAITe3ADA",
      "expirationTime": 300
  }
}
```

:::

:::

### Responses

| Response Code | Description                                                                                     |
| :-----------: | ----------------------------------------------------------------------------------------------- |
| `200`         | User authorization has been successful.                                                         |
| `401`         | User signature is incorrect or failed to be decoded.                                            |
| `404`         | User has not been found.                                                                        |
| `422`         | User signature either could not be decoded or verified, or the `publicKey` string is not valid. |
| `500`         | Internal server error.                                                                          |
