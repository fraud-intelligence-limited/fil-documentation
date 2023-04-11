# Refreshing authentication tokens

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/auth/api/v1/authentication-management/session`

**Method**: `PATCH`

**Header**: `Authorization` is represented by a `string` that is the `refreshToken` value that was returned either at the authorization, or the previous time the token has been refreshed.

**Parameters**: —

**Input/request structure**:

A `PATCH` request to the endpoint, where the `Authorization` header is required.

**Output/response structure**:

::: details Show

```jsx
    {
      "status": {
    	  "code": 0,                  //integer($int32)
        "name": "string",
        "message": "string"
      },
      "data": {
        "accessToken": "string",
        "refreshToken": "string",
        "expirationTime": 0         //integer($int64)
      }
    }
```
:::
