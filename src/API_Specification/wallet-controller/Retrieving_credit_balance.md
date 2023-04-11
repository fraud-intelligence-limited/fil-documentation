# Retrieving credit balance

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/wallet-management/balance`

**Method**: `GET`

**Parameters**: —

**Input/request structure**:

A `GET` request to the endpoint.

**Output/response structure**:

::: details Show

```jsx
    {
      "status": {
        "code": 0,                               //integer($int32)
        "name": "string",
        "message": "string"
      },
      "data": {
        "tokenId": {
          "definitionId": "credit#admin",
          "accountId": "user@peerId"
        },
        "balance": 0,                            //integer($int32)
      }
    }
```
:::
