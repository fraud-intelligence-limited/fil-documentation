# Logging a user out of the system

> Signs out the [authorized FIB user](../auth-controller/authorizing-a-user-in-the-system.md) from the FIB API server.

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/auth/api/v1/authentication-management/logout`

**Method**: `POST`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](refreshing-authentication-tokens.md).

#### Input/request structure

A `POST` request to the endpoint with the `Authorization` header specified.

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
  "data": {}
}
```

```json5 [Example]
{
  "status": {
    "code": 200,
    "name": "OK",
    "message": "User has been successfully logged out."
  },
  "data": {}
}
```

:::

### Responses

| Response Code | Description                                                                                                                                   |
| :-----------: | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `200`         | User has been successfully logged out.                                                                                                        |
| `401`         | Either user signature or `refreshToken` are not valid, or the `accessToken` bearer token could not be parsed from the `Authorization` header. |
| `404`         | User has not been found.                                                                                                                      |
| `422`         | User signature either could not be decoded or verified, or the `publicKey` string is not valid.                                               |
| `500`         | Internal server error.                                                                                                                        |
