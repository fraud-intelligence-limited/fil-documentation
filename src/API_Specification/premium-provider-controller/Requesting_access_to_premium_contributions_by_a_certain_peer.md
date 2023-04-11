# Requesting access to premium contributions by a certain peer

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/premium-provider-management/application?peer={peerID}`

**Method**: `POST`

**Parameters**:

| Field | Value Type | Description |
| --- | --- | --- |
| `peer` | `string` | A unique peer identifier. <br> `peer` is a required parameter. See *[Retrieving all premium peer](../../API_Specification/peer-controller/Retrieving_all_premium_peers.md)*. |

**Input/request structure**:

A `POST` request to the endpoint, where `peer` is a unique peer identifier.

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
          "status": "PENDING"       //Could be one of the following: PENDING, DECLINED, APPROVED, NONE
        }
      ]
    }
```
:::
