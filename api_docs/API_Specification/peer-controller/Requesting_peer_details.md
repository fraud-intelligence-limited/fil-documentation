# Requesting peer details

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/api/v1/peer-management/details`

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
      "data": {
        "accountId": "string",
        "domainId": "string",
        "accountMetadata": {
          "additionalProp1": {},
          "additionalProp2": {},
          "additionalProp3": {}
        },
        "domainMetadata": {
          "additionalProp1": {},
          "additionalProp2": {},
          "additionalProp3": {}
        }
      }
    }
```
:::
