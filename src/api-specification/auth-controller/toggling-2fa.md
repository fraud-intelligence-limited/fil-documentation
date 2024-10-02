# Toggling 2FA

> Enables or disables the Two-Factor Authentication.

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/auth/api/v1/authentication-management/2fa`

**Method**: `PATCH`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](../auth-controller/refreshing-authentication-tokens.md).

**Parameters**:

| Field | Value Type | Description |
| :-: | --- | --- |
| `enable` | `boolean` | A boolean that defines whether the request enables or disables the 2FA. |

#### Input/request structure

A `PATCH` request to the endpoint with the `enable` parameter specified.

#### Output/response structure

::: details Show

::: code-group Data structure

```json5 [Structure]
{
  status: {
    code: integer($int32),
    name: 'string',
  },
  data: {}
}
```

```json5 [Example]
{
  status: {
    code: 200,
    name: 'string'
  },
  data: {}
}
```

:::

### Responses

| Response Code | Description |
| :-: | --- |
| `200` | Link to enable\disable the 2FA has been sent successfully. |
| `404` | User has not been found. |
| `500` | Internal server error. |
