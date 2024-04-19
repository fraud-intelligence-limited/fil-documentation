# Retrieving upload rewards rate

> Retrieves the current rewards rate established for [submitting contributions](submitting-a-contribution.md) of all fraud types for all supported company types.

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/rewards`

**Method**: `GET`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](refreshing-authentication-tokens.md).

#### Input/request structure

A `GET` request to the endpoint with the `Authorization` header specified.

#### Output/response structure

::: details Show

::: code-group Data structure

```json5 [Structure]
{
    "status": {
        "code": integer($int32)
        "name": 'string'
        "message": 'string'
    },
    "data": {
        "rewardsTable": {
            "LARGE_TELCO": {
                "Wangiri": integer($int64)
                "SMSA2P": integer($int64)
                "IRSF": integer($int64)
                "StolenDevice": integer($int64)
                "IPFraud": integer($int64)
            },
            "MEDIUM_TELCO": {
                "Wangiri": integer($int64)
                "SMSA2P": integer($int64)
                "IRSF": integer($int64)
                "StolenDevice": integer($int64)
                "IPFraud": integer($int64)
            },
            "SMALL_TELCO": {
                "Wangiri": integer($int64)
                "SMSA2P": integer($int64)
                "IRSF": integer($int64)
                "StolenDevice": integer($int64)
                "IPFraud": integer($int64)
            },
            "VENDOR": {
                "Wangiri": integer($int64)
                "SMSA2P": integer($int64)
                "IRSF": integer($int64)
                "StolenDevice": integer($int64)
                "IPFraud": integer($int64)
            }
        }
    }
}
```

```json5 [Example]
{
    "status": {
        "code": 200,
        "name": 'OK'
        "message": 'The table containing the user's current rewards statistics has been successfully retrieved.'
    },
    "data": {
        "rewardsTable": {
            "LARGE_TELCO": {
                "Wangiri": 10,
                "SMSA2P": 20,
                "IRSF": 30,
                "StolenDevice": 40,
                "IPFraud": 50
            },
            "MEDIUM_TELCO": {
                "Wangiri": 60,
                "SMSA2P": 70,
                "IRSF": 80,
                "StolenDevice": 90,
                "IPFraud": 100
            },
            "SMALL_TELCO": {
                "Wangiri": 110,
                "SMSA2P": 120,
                "IRSF": 130,
                "StolenDevice": 140,
                "IPFraud": 150
            },
            "VENDOR": {
                "Wangiri": 160,
                "SMSA2P": 170,
                "IRSF": 180,
                "StolenDevice": 190,
                "IPFraud": 200
            }
        }
    }
}
```

:::

:::

### Responses

| Response Code | Description |
| :-: | --- |
| `200` | The table containing the user's current rewards statistics has been successfully retrieved. |
| `401` | User signature is incorrect or failed to be decoded. |
| `404` | Either account or its metadata key has not found. |
| `500` | Internal server error. |
