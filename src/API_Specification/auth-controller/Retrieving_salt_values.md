# Retrieving salt values

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/auth/api/v1/authentication-management/salt`

**Method**: `GET`

**Parameters**: —

**Input/request structure**:

A `GET` request to the endpoint.

**Output/response structure**:

::: details Show

```jsx
    {
      "status": {
        "code": 0,                  //integer($int32)
        "name": "string",
        "message": "string"
      },
      "data": "string"
    }
```
:::
