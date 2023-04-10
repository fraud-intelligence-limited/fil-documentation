# Assembling a contribution

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/contribution/assemble`

**Method**: `POST`

**Parameters**: —

**Input/request structure**:

::: details Show

```jsx
    {
      "id": "string",                   //fraud identifier value
      "fraudType": "string(enum)",      //Could be one of the following: Wangiri, IRSF, StolenDevice, IPFraud, SMSA2P
      "origination": "string",          //two-digit country code (Alpha-2, ISO 3166)
      "destination": "string",          //two-digit country code (Alpha-2, ISO 3166)
      "expiryDate": 0,                  //integer($int32), Unix Epoch Time in seconds
    }
```
:::


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
