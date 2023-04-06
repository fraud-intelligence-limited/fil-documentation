# Retrieving all premium peers

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/api/v1/peer-management/premium`

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
          "peerId": "string"        //A unique identifier of a peer
        }
      ]
    }
```
:::
