# Retrieving a contribution by ID

> Retrieves a contribution that is stored on the network by its [`id`](../../overview/contributions.md#retrieving-contributions) (Fraud Identifier).\
> The `assetDefinitionId` value of any given retrieved contribution may be used to [assemble a contribution flag](assembling-a-contribution-flag.md) for it.

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/contribution/{id}`

**Method**: `GET`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](refreshing-authentication-tokens.md).

**Parameters**:

| Field | Value Type     | Description                                                                                                            |
| :---: | -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`  | `string(path)` | Range of [`id` values](../../overview/contributions.md#retrieving-contributions) (Fraud Identifiers), or a single one. |

#### Input/request structure

A `GET` request to the endpoint with the `{id}` parameter specified.

**Example**: `data/api/v1/subscription-management/subscription/192.168.1.1`

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
  "data": [
    {
        "assetDefinitionIds": "idRange#contribution",
        "contribution": {
            "id": "idRange", //127.0.0.1 OR 127.0.0.1-127.0.0.2 OR +14155552671 OR +14155552671-+14155552672 OR 107615702016566
            "fraudType": "string",
            "origination": "string",
            "destination": "string",
            "expiryDate": integer($int32),
            "fraudStatus": "string(enum)", //'ACTIVE' OR 'EXPIRED' OR 'FLAGGED'
            "confidenceIndex": number($double),
            "isPrivileged": boolean,
            "peerId": "string",
            "flagger": "string",
            "timestamp": integer($int32),
            "flagTimestamp": integer($int32)
      }
    }
  ]
}
```

```json5 [Example]
{
    "status": {
        "code": 200,
        "name": "Ok",
        "message": "Contribution has been successfully retrieved by its ID"
    },
    "data": [
        {
            "assetDefinitionId": "130.130.130.1-130.130.130.1_1711570471#contribution",
            "contribution": {
                "id": "130.130.130.1-130.130.130.1",
                "fraudType": "IPFraud",
                "origination": "GB",
                "destination": "US",
                "expiryDate": 1719346471,
                "fraudStatus": "Active",
                "confidenceIndex": null,
                "isPrivileged": false,
                "peerId": "soramitsu",
                "flagger": null,
                "timestamp": 1711570471,
                "flagTimestamp": null
      }
    }
  ]
}
```

:::

:::

### Responses

| Response Code | Description                                                                   |
| :-----------: | ----------------------------------------------------------------------------- |
| `200`         | Contribution has been successfully retrieved by its ID.                       |
| `400`         | Contribution ID is incorrect or the fraud type could not be resolved by code. |
| `500`         | Internal server error.                                                        |
