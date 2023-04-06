# Retrieving incoming premium contribution requests

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/api/v1/premium-provider-management/incoming`

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
      "data": [
        {
          "domainId": "string",
          "requestedByPeer": "string",
          "status": "string(enum)"       //Could be one of the following: PENDING, DECLINED, APPROVED, NONE
        }
      ]
    }
```
:::
