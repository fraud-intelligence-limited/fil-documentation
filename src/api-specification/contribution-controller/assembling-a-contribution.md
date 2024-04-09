# Assembling a contribution

> Assembles a contribution that must be later [submitted](submitting-a-contribution.md) in order to store the fraud event data on the network.

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/contribution/assemble`

**Method**: `POST`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](refreshing-authentication-tokens.md).

#### Input/request structure

::: details Show

::: code-group Data structure

```json5 [Structure]
[
  {
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
    "timestamp": integer($int32)
  }
]
```

```json5 [Example]
[
  {
    "id": "129.0.0.1",
    "fraudType": "IPFraud",
    "origination": "SE",
    "destination": "GB",
    "expiryDate": 1719068894
    "fraudStatus": "Active"
    "confidenceIndex": 0.5,
    "isPrivileged": true,
    "peerId": "wonderland",
    "flagger": "alice@wonderland",
    "timestamp": 1711120097
  }
]
```

:::

::: info

For a detailed breakdown of every field and value in the body of a request, see [Contributions: API requests data structure](../../overview/contributions.md#api-requests-data-structure).

:::

::: tip Note

This endpoint accepts requests with up to `500` entries.

:::

:::

#### Output/response structure

::: details Show

::: code-groups Data structure

```json5 [Structure]
{
  "status": {
    "code": integer($int32),
    "name": "string",
    "message": "string"
  },
  "data": "transactionHex"
}
```

```json5 [Example]
{
  "status": {
    "code": 200,
    "name": "OK",
    "message": "Contribution has been assembled and its transaction `transactionHex` string has been retrieved successfully"
  },
  "data": "31fd14aecf7aa369a77035658556b2ff25c2b148d9516afbfa9b0edc709b1e1ae326b377b223e8e8486fee4d997ef03c29bcc6ead443daa68f0d397ceea2f78f7ede2df67d1f2f04bcbc51c40effce9f4f8d3b66394b0b2b0c094f8347117d08539a4a19f3bc8b75bc4dab24385fe3c5ef8faafc61d38095c594b30b33275613"
}
```

:::

:::

### Responses

| Response Code | Description                                                                                      |
| :-----------: | ------------------------------------------------------------------------------------------------ |
| `200`         | Contribution has been assembled and its `transactionHex` string has been retrieved successfully. |
| `400`         | Contribution type is invalid.                                                                    |
| `404`         | Account not found or the rewards table doesn't exist.                                            |
| `500`         | Internal server error.                                                                           |
