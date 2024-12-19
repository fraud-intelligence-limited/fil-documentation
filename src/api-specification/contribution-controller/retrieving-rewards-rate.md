# Retrieving upload rewards rate

> Retrieves the current rewards rate established for [submitting contribution flags](submitting-a-contribution-flag.md) and [submitting contributions](submitting-a-contribution.md) of all fraud types for all supported company types.

**Protocol**: `HTTP`

**Encoding**: `JSON`

**Endpoint**: `/data/api/v1/contribution-management/rewards`

**Method**: `GET`

**Header**: `Authorization` — represented by a `string` that is the `accessToken` value that was returned either at the authorization, or the previous time the token [has been refreshed](../auth-controller/refreshing-authentication-tokens.md).

#### Input/request structure

A `GET` request to the endpoint with the `Authorization` header specified.

#### Output/response structure

::: details Show

::: code-group Data structure

```json5 [Structure]
{
    status: {
        code: integer($int32),
        name: 'string'
    },
    data: {
        rewardsTable: {
            LARGE_TELCO: {
                Wangiri: integer($int64)
                SMSA2P: integer($int64)
                IRSF: integer($int64)
                StolenDevice: integer($int64)
                IPFraud: integer($int64)
                FlashCall: integer($int64)
                Scam: integer($int64)
            },
            MEDIUM_TELCO: {
                Wangiri: integer($int64)
                SMSA2P: integer($int64)
                IRSF: integer($int64)
                StolenDevice: integer($int64)
                IPFraud" integer($int64)
                FlashCall: integer($int64)
                Scam: integer($int64)
            },
            SMALL_TELCO: {
                Wangiri: integer($int64)
                SMSA2P: integer($int64)
                IRSF: integer($int64)
                StolenDevice: integer($int64)
                IPFraud: integer($int64)
                FlashCall: integer($int64)
                Scam: integer($int64)
            },
            VENDOR: {
                Wangiri: integer($int64)
                SMSA2P: integer($int64)
                IRSF: integer($int64)
                StolenDevice: integer($int64)
                IPFraud: integer($int64)
                FlashCall: integer($int64)
                Scam: integer($int64)
            }
        }
    }
}
```

```json5 [Example]
{
  status: {
    code: 200,
    name: 'OK'
  },
  data: {
    rewardsTable: {
      LARGE_TELCO: {
        Wangiri: 10,
        SMSA2P: 20,
        IRSF: 30,
        StolenDevice: 40,
        IPFraud: 50
        FlashCall: 60,
        Scam: 70,
      },
      MEDIUM_TELCO: {
        Wangiri: 80,
        SMSA2P: 90,
        IRSF: 100,
        StolenDevice: 110,
        IPFraud: 120
        FlashCall: 130,
        Scam: 140,
      },
      SMALL_TELCO: {
        Wangiri: 150,
        SMSA2P: 160,
        IRSF: 170,
        StolenDevice: 180,
        IPFraud: 190
        FlashCall: 200,
        Scam: 210,
      },
      VENDOR: {
        Wangiri: 220,
        SMSA2P: 230,
        IRSF: 240,
        StolenDevice: 250,
        IPFraud: 260
        FlashCall: 270,
        Scam: 280,
      }
    }
  }
}
```

:::

### Responses

| Response Code | Description |
| :-: | --- |
| `200` | The currently active rewards rate for uploading and flagging contributions has been successfully retrieved. |
| `401` | User signature is incorrect or failed to be decoded. |
| `404` | Either account or its metadata key has not found. |
| `500` | Internal server error. |
